const nodemailer = require('nodemailer');

exports.handler = async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const payload = JSON.parse(event.body || '{}');
    const { clientName, email, trip, answers = {} } = payload;

    const requiredFields = ['clientName', 'email', 'trip', 'answers'];
    const missingFields = requiredFields.filter((field) => {
      if (field === 'answers') {
        return !answers || typeof answers !== 'object' || Array.isArray(answers);
      }
      return !payload[field];
    });

    if (missingFields.length) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: `Missing required fields: ${missingFields.join(', ')}` }),
      };
    }

    const smtpConfig = {
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE || 'false').toLowerCase() === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    };

    const missingSmtpKeys = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_SECURE', 'SMTP_USER', 'SMTP_PASS'].filter((key) => {
      if (key === 'SMTP_PORT') {
        return !process.env.SMTP_PORT;
      }
      if (key === 'SMTP_SECURE') {
        return !process.env.SMTP_SECURE;
      }
      return !process.env[key];
    });

    if (missingSmtpKeys.length) {
      console.error('Missing SMTP configuration keys:', missingSmtpKeys.join(', '));
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Missing SMTP configuration' }),
      };
    }

    const transporter = nodemailer.createTransport(smtpConfig);
    const html = buildEmailHtml({ recipient: 'matias@sinocircuit.net', clientName, email, trip, answers });
    const attachments = getLogoAttachment(answers.logoFileBase64);

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'matias@sinocircuit.net',
      replyTo: email,
      subject: `Trip questionnaire — ${clientName || 'Daniel Bradtke'}`,
      html,
      attachments,
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      // TODO: restore daniel@djld.vc before sending him the link.
      to: 'matias@sinocircuit.net',
      replyTo: 'matias@sinocircuit.net',
      subject: 'We’ve got your answers — see you in Shenzhen',
      html: `
        <div style="font-family: Arial, sans-serif; color: #1c1a15; line-height: 1.6;">
          <h2 style="margin-bottom: 8px;">Thanks, ${clientName || 'Daniel'} — we’ve got your answers.</h2>
          <p>We’ll use this to tailor your week in Shenzhen and Guilin / Yangshuo. Matias will be in touch soon.</p>
          <p style="margin-top: 20px;">Best,<br />Sinocircuit</p>
        </div>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (error) {
    console.error('SMTP questionnaire send failed', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send questionnaire email' }),
    };
  }
};

function buildEmailHtml({ recipient, clientName, email, trip, answers }) {
  const sections = [
    ['Travel & logistics', [
      ['Full name', answers.fullName],
      ['Email', answers.email || email],
      ['Nationality / passport issuing country', answers.nationality],
      ['Passport number', answers.passportNumber],
      ['Passport expiry date', answers.passportExpiry],
      ['China entry', answers.chinaEntry],
      ['Arrival airport preference', answers.arrivalAirport],
      ['Flight details if booked', answers.flightDetails],
      ['Arriving early or staying later', answers.arrivingEarly],
      ['Need airport pickup?', answers.airportPickup],
      ['Room preference', answers.roomPreference],
      ['Single occupancy', answers.singleOccupancy],
      ['Accessibility or mobility needs', answers.accessibility],
    ]],
    ['Food & health', [
      ['Dietary restrictions', formatValue(answers.dietaryRestrictions)],
      ['Other dietary note', answers.dietaryOther],
      ['Food allergies', answers.foodAllergies],
      ['Spice tolerance', answers.spiceTolerance],
      ['Hard no foods', answers.hardNoFoods],
      ['Alcohol', answers.alcohol],
      ['Coffee dependency', answers.coffeeDependency],
      ['Activity comfort', answers.activityComfort],
      ['Medical conditions / meds', answers.medicalConditions],
      ['Travel insurance', answers.travelInsurance],
    ]],
    ['Connectivity & payments', [
      ['WeChat installed?', answers.wechatInstalled],
      ['Alipay / WeChat Pay set up?', answers.alipaySetup],
      ['VPN / eSIM needs', formatValue(answers.vpnNeeds)],
      ['Other VPN / eSIM note', answers.vpnOther],
      ['Need VPN recommendation', answers.vpnRecommendation ? 'Yes' : 'No'],
      ['Preferred comms channel', answers.commsChannel],
    ]],
    ['Business & investment objectives', [
      ['Focus areas', formatValue(answers.focusAreas)],
      ['Gaming interests', formatValue(answers.gamingInterests)],
      ['Fintech & security interests', formatValue(answers.fintechInterests)],
      ['Consumer & media interests', formatValue(answers.consumerInterests)],
      ['Health-tech & longevity interests', formatValue(answers.healthInterests)],
      ['Objectives', formatValue(answers.objectives)],
      ['Deploy capital', answers.deployCapital],
      ['Typical check size', answers.typicalCheckSize],
      ['Specific companies / people', answers.companiesOrPeople],
      ['Counterparts to prioritize', formatValue(answers.counterparts)],
      ['First time in China', answers.firstTimeInChina],
      ['Existing China exposure', answers.existingChinaExposure],
      ['Mandarin level', answers.mandarin],
      ['Positioning', answers.positioning],
      ['Commercial sensitivity', answers.sensitivity],
      ['1:1 meetings', answers.meetings],
      ['Willing to extend', answers.willingToExtend],
      ['What would make this trip a clear win?', answers.tripWin],
    ]],
    ['Guilin / Yangshuo & personal', [
      ['Guilin / Yangshuo goals', formatValue(answers.guilinGoals)],
      ['Cultural interests', answers.culturalInterests],
      ['Wellness on the road', formatValue(answers.wellness)],
      ['Bringing a +1 or colleague', answers.plusOne],
      ['Plus-one details', answers.plusOneDetails],
      ['Souvenirs / gifts', answers.souvenirs],
      ['China bucket list', answers.bucketList],
    ]],
    ['Admin & consent', [
      ['Preferred name', answers.preferredName],
      ['Intro bio', answers.introBio],
      ['Logo file', answers.logoFileName || 'None uploaded'],
      ['Emergency contact', answers.emergencyContact],
      ['Photo / video consent', answers.photoConsent],
      ['Testimonial consent', answers.testimonialConsent],
      ['Anything else', answers.anythingElse],
    ]],
  ];

  const cards = sections.map(([title, rows]) => `
    <section style="margin-bottom: 24px; border: 1px solid #e8e1d2; border-radius: 12px; padding: 16px 18px; background: #fbf8f2;">
      <h3 style="margin: 0 0 12px; color: #11332a; font-size: 18px;">${title}</h3>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        ${rows.map(([label, value]) => `
          <tr>
            <td style="padding: 8px 0; vertical-align: top; font-weight: 600; color: #3a3530; width: 40%;">${label}</td>
            <td style="padding: 8px 0; vertical-align: top; color: #1c1a15;">${formatValue(value)}</td>
          </tr>
        `).join('')}
      </table>
    </section>
  `).join('');

  return `
    <div style="font-family: Arial, sans-serif; color: #1c1a15; line-height: 1.6;">
      <h2 style="margin-bottom: 6px;">Trip questionnaire — ${clientName || 'Daniel Bradtke'}</h2>
      <p style="margin-top: 0; color: #6b6557;">${trip || 'September 18–24, 2026 Shenzhen + Guilin/Yangshuo'}</p>
      <p><strong>Client:</strong> ${clientName || 'Daniel Bradtke'}<br /><strong>Email:</strong> ${email || answers.email || ''}<br /><strong>Recipient:</strong> ${recipient}</p>
      ${cards}
    </div>
  `;
}

function formatValue(value) {
  if (Array.isArray(value)) {
    return value.filter(Boolean).join(', ') || '—';
  }
  if (value === null || value === undefined || value === '') {
    return '—';
  }
  return String(value);
}

function getLogoAttachment(dataUrl) {
  if (!dataUrl) return null;
  const match = dataUrl.match(/^data:(.+);base64,(.+)$/);
  if (!match) return null;
  const [, mimeType, base64] = match;
  return {
    filename: 'company-logo',
    content: base64,
    contentType: mimeType,
  };
}
