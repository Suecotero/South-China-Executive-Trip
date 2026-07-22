/* Main React app — Two Cities trip landing page */

const { useState, useEffect } = React;
const SUPPORTED_LANGS = ['en', 'es'];
const SPANISH_COUNTRIES = ['ES', 'MX', 'CO', 'AR', 'CL', 'PE', 'VE', 'EC', 'GT', 'CU', 'BO', 'DO', 'HN', 'PY', 'SV', 'NI', 'CR', 'PA', 'UY', 'GQ'];

const TEXT = {
  en: {
    pageTitle: 'Sinocircuit — China Private Journeys',
    metaDescription: 'A seven-day executive journey through Shenzhen and Yangshuo with curated factory visits, luxury stays, and expert logistics.',
    navOverview: 'Overview',
    navItinerary: 'Itinerary',
    navIncluded: 'Included',
    navPricing: 'Pricing',
    navReserve: 'Reserve a seat',
    heroEdition: 'Edition 04 · Spring 2026 · Limited to 16',
    heroTicker: '七天 · 七日',
    heroTag: "Seven days across China's hardware capital and its oldest karst landscapes — an executive expedition for founders, operators, and the curious.",
    factDuration: 'Duration',
    factDeparture: 'Departure',
    factFrom: 'From',
    overviewEyebrow: 'The arc of the week',
    overviewHeading: 'Two China’s, one week — the neon engine of the South, and the ink-painting valleys it grew out of.',
    itineraryEyebrow: 'Preliminary Schedule (details are subject to change)',
    itineraryHeading: 'The itinerary, in full.',
    includedEyebrow: 'What is included',
    includedHeading: "We sweat the logistics — so you don't.",
    pricingEyebrow: 'Pricing',
    pricingHeading: 'Three ways to travel.',
    formSidebarEyebrow: 'Reserve a seat',
    formHeading: "Tell us who you are — we'll be in touch within 48 hours.",
    formIntro: 'The group is intentionally small. We read every application and send a short call if you have any questions.',
    groupSize: 'Group size',
    departureLabel: 'Departure',
    seatsLeft: 'Seats left',
    applicationsClose: 'Applications close',
    groupSizeValue: '16 guests max',
    departureValue: 'SEPT 18 — 24, 2026',
    seatsLeftValue: '5 of 16',
    applicationsCloseValue: 'SEPT 1st, 2026',
    thankYou: 'Thank you,',
    successBody: 'Your interest is recorded. Expect a note from our team within two business days, and a call invite shortly after.',
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email',
    companyRole: 'Company or role',
    preferredTier: 'Preferred tier',
    interestsLabel: 'Most interested in (pick any)',
    notesLabel: 'Anything we should know?',
    notesPlaceholder: 'Dietary needs, travel companions, questions…',
    companyPlaceholder: 'Optional',
    submitLabel: 'Submit interest →',
    submitErrorRequired: 'Required',
    submitErrorEmail: 'Enter a valid email',
    dayLabel: 'Day',
    stickyText: '6 OF 12 SEATS REMAIN · SEPT 18',
    stickyButton: 'Reserve →',
    footerLineTwo: 'Private journeys for the operator class · Hong Kong / New York',
    footerCopyright: '© 2026 SINOCIRCUIT JOURNEYS',
    pageSubtitle: 'South China Executive Trip',
    langEn: 'EN',
    langEs: 'ES',
  },
  es: {
    pageTitle: 'Shenzhen y Yangshuo — Sinocircuit',
    pageSubtitle: 'South China Executive Trip',
    metaDescription: 'Un viaje ejecutivo de siete días por Shenzhen y Yangshuo con visitas a fábricas, alojamientos de lujo y logística experta.',
    navOverview: 'Visión general',
    navItinerary: 'Itinerario',
    navIncluded: 'Incluido',
    navPricing: 'Precios',
    navReserve: 'Reserva tu asiento',
    heroEdition: 'Edición 04 · Primavera 2026 · Limitado a 16',
    heroTicker: '七天 · 七日',
    heroTag: 'Siete días entre la capital del hardware de China y sus paisajes kársticos más antiguos — una expedición ejecutiva para fundadores, operadores y curiosos.',
    factDuration: 'Duración',
    factDeparture: 'Salida',
    factFrom: 'Desde',
    overviewEyebrow: 'El arco de la semana',
    overviewHeading: 'Dos Chinas, una semana — el motor de neón del sur y los valles de tinta de los que brotó.',
    itineraryEyebrow: 'Horario preliminar (los detalles están sujetos a cambio)',
    itineraryHeading: 'El itinerario, en su totalidad.',
    includedEyebrow: 'Qué está incluido',
    includedHeading: 'Nos encargamos de la logística para que tú no lo hagas.',
    pricingEyebrow: 'Precios',
    pricingHeading: 'Tres maneras de viajar.',
    formSidebarEyebrow: 'Reserva tu asiento',
    formHeading: 'Cuéntanos quién eres — nos pondremos en contacto dentro de 48 horas.',
    formIntro: 'El grupo es intencionalmente pequeño. Leemos cada solicitud y enviamos una breve llamada si tienes preguntas.',
    groupSize: 'Tamaño del grupo',
    departureLabel: 'Salida',
    seatsLeft: 'Asientos restantes',
    applicationsClose: 'Cierre de solicitudes',
    groupSizeValue: '16 invitados máximo',
    departureValue: '18 — 24 SEPT 2026',
    seatsLeftValue: '5 de 16',
    applicationsCloseValue: '1 de SEPT, 2026',
    thankYou: 'Gracias,',
    successBody: 'Tu interés ha sido registrado. Recibirás una nota de nuestro equipo en dos días hábiles y una invitación a llamada pronto.',
    firstName: 'Nombre',
    lastName: 'Apellido',
    email: 'Correo electrónico',
    companyRole: 'Empresa o cargo',
    preferredTier: 'Nivel preferido',
    interestsLabel: 'Más interesado en (elige cualquiera)',
    notesLabel: '¿Algo que debamos saber?',
    notesPlaceholder: 'Restricciones alimentarias, compañeros de viaje, preguntas…',
    companyPlaceholder: 'Opcional',
    submitLabel: 'Enviar interés →',
    submitErrorRequired: 'Requerido',
    submitErrorEmail: 'Ingresa un correo válido',
    dayLabel: 'Día',
    stickyText: '10 DE 16 ASIENTOS RESTANTES · 18 SEPT',
    stickyButton: 'Reservar →',
    footerLineTwo: 'Viajes privados para la clase operadora · Hong Kong / Nueva York',
    footerCopyright: '© 2026 SINOCIRCUIT JOURNEYS',
    langEn: 'EN',
    langEs: 'ES',
  }
};

const TRIP = window.TRIP_DATA;

function useScrolled(threshold = 80) {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > threshold);
      setPastHero(window.scrollY > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return { scrolled, pastHero };
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 60;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

function getPathLanguage() {
  const parts = window.location.pathname.split('/');
  // For file:// URLs on Windows, language is in the folder path, not at index [1]
  // Look for 'en' or 'es' anywhere in the path
  const found = parts.find(p => SUPPORTED_LANGS.includes(p));
  return found ? found : 'en';
}

function buildLanguagePath(lang) {
  // For file:// scheme, navigate to the other language directory
  if (window.location.protocol === 'file:') {
    const currentPath = window.location.pathname;
    // Extract the directory and change language folder
    const pathParts = currentPath.split('/');
    const currentLangIdx = pathParts.findIndex(p => ['en', 'es'].includes(p));
    if (currentLangIdx !== -1) {
      pathParts[currentLangIdx] = lang;
    }
    const newPath = pathParts.join('/');
    return newPath + window.location.search + window.location.hash;
  }
  // For HTTP(S) scheme, use path-based routing
  const remainder = window.location.pathname.replace(/^\/(?:en|es)/, '') + window.location.search + window.location.hash;
  return `/${lang}${remainder}`.replace(/\/\/+/g, '/');
}

function getAssetRoot() {
  const pathParts = window.location.pathname.split('/');
  const isLangFolder = pathParts.some((part) => SUPPORTED_LANGS.includes(part));
  if (window.location.pathname.startsWith('/welcome/')) {
    return '/assets/';
  }
  return isLangFolder ? '../assets/' : 'assets/';
}

const ASSET_ROOT = getAssetRoot();

function Nav({ onHero, scrolled, lang, onLanguageChange, text }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  const handleLanguageChange = (newLang) => {
    setMenuOpen(false);
    onLanguageChange(newLang);
  };

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''} ${onHero ? 'on-hero' : ''}`}>
      <div className="brand">
        <img src={`${ASSET_ROOT}Sinocircuit logo horizontal.svg`} alt="Sinocircuit logo" className="brand-logo" />
      </div>
      <button
        type="button"
        className={`nav-burger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-expanded={menuOpen}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <span className="nav-link" onClick={() => handleNavClick('overview')}>{text.navOverview}</span>
        <span className="nav-link" onClick={() => handleNavClick('itinerary')}>{text.navItinerary}</span>
        <span className="nav-link" onClick={() => handleNavClick('included')}>{text.navIncluded}</span>
        <span className="nav-link" onClick={() => handleNavClick('pricing')}>{text.navPricing}</span>
        <button className="nav-cta" onClick={() => handleNavClick('apply')}>{text.navReserve}</button>
      </div>
      <div className="nav-right-stack">
        <div className="lang-toggle">
          <button type="button" className={lang === 'en' ? 'active' : ''} onClick={() => handleLanguageChange('en')}>{text.langEn}</button>
          <button type="button" className={lang === 'es' ? 'active' : ''} onClick={() => handleLanguageChange('es')}>{text.langEs}</button>
        </div>
        <div className="nav-contact-links">
          <a className="nav-contact-link" href="mailto:matias@sinocircuit.net">
            matias@sinocircuit.net
          </a>
          <a
            className="nav-contact-link nav-contact-link--linkedin"
            href="https://www.linkedin.com/in/mat%C3%ADas-otero-johansson-51ab6759/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Matías Otero Johansson on LinkedIn"
          >
            in
          </a>
        </div>
      </div>
    </nav>);

}

function Hero({ text }) {
  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <div className="hero-top">
            <div className="eyebrow"><span className="dot" />{text.heroEdition}</div>
            <div className="ticker">
              <span>{text.heroTicker}</span>
              <span className="sep" />
              <span>22°N → 25°N</span>
            </div>
          </div>

          <div className="hero-stage">
            <iframe src={window.location.pathname.startsWith('/welcome/') ? '/Trip%20Map%20-%20Animated.html' : '../Trip Map - Animated.html'} style={{ width: '100%', height: '100%', border: 'none', flex: 1 }} title="Animated Trip Map" allow="autoplay; fullscreen"></iframe>
          </div>

          <div className="hero-bottom">
            <p className="hero-tag" style={{ fontSize: '22px' }}>
              {text.heroTag}
            </p>
            <div className="fact">
              <div className="fact-label">{text.factDuration}</div>
              <div className="fact-value">7 days</div>
            </div>
            <div className="fact">
              <div className="fact-label">{text.factDeparture}</div>
              <div className="fact-value">Sept 18</div>
            </div>
            <div className="fact">
              <div className="fact-label">{text.factFrom}</div>
              <div className="fact-value">$5,900</div>
            </div>
            <div className="hero-contact-actions">
              <a className="hero-contact-link" href="mailto:matias@sinocircuit.net">
                matias@sinocircuit.net
              </a>
              <a
                className="hero-contact-link hero-contact-link--linkedin"
                href="https://www.linkedin.com/in/mat%C3%ADas-otero-johansson-51ab6759/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Matías Otero Johansson on LinkedIn"
              >
                in
              </a>
            </div>
          </div>
        </div>
      </header>
    </>);

}

function Overview({ text }) {
  const shenzhenSummary = text === TEXT.en
    ? 'From a fishing village to 17 million people in forty years. We tour the factories, labs, and markets that build the hardware most of the world depends on.'
    : 'De pueblo pesquero a 17 millones de personas en cuarenta años. Recorremos fábricas, laboratorios y mercados que construyen el hardware del mundo.';
  const yangshuoSummary = text === TEXT.en
    ? 'A high-speed train north drops us into the karst. Bamboo rafts on the Yulong, terraced rice fields, and the quiet our phones were never designed for.'
    : 'Un tren de alta velocidad al norte nos deja en el karst. Balsas de bambú por el Yulong, terrazas de arroz y el silencio para el que nuestros teléfonos no fueron diseñados.';

  return (
    <section id="overview">
      <div className="section-head">
        <div className="label-col">
          <div className="eyebrow"><span className="dot" />{text.overviewEyebrow}</div>
        </div>
        <h2>{text.overviewHeading}</h2>
      </div>

      <div className="overview">
        <div className="city-card">
          <div className="city-img" style={{ backgroundImage: `url('${ASSET_ROOT}shenzhen.jpg')` }} />
          <div className="city-content">
            <div className="city-meta">
              <span>{text === TEXT.en ? 'Days 1 — 4' : 'Días 1 — 4'}</span>
              <span>深圳</span>
            </div>
            <div>
              <h3 className="city-name"><em>Shenzhen</em></h3>
              <p className="city-desc">{shenzhenSummary}</p>
            </div>
          </div>
        </div>

        <div className="city-card">
          <div className="city-img" style={{ backgroundImage: `url('${ASSET_ROOT}yangshuo.jpg')` }} />
          <div className="city-content">
            <div className="city-meta">
              <span>{text === TEXT.en ? 'Days 4 — 7' : 'Días 4 — 7'}</span>
              <span>阳朔</span>
            </div>
            <div>
              <h3 className="city-name"><em>Yangshuo</em></h3>
              <p className="city-desc">{yangshuoSummary}</p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function Day({ day, open, onToggle, text }) {
  return (
    <div className={`day ${open ? 'open' : ''}`} onClick={onToggle}>
      <div className="day-num">
        {text.dayLabel}
        <span className="n">0{day.n}</span>
      </div>
      <div>
        <h3 className="day-title">{day.title}</h3>
        <div className="day-body">
          <p className="day-summary">{day.summary}</p>
          <div className="activities">
            {day.activities.map((a, i) =>
            <div key={i} className={`activity ${a.optional ? 'optional' : ''}`}>
                <div className="a-time">{a.time}{a.note ? ` · ${a.note}` : ''}</div>
                <div className="a-name">{a.name}</div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="day-where">{day.where}</div>
      <div className="day-toggle">+</div>
    </div>);

}

function Itinerary({ text }) {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section id="itinerary" className="itinerary">
      <div className="section-head">
        <div className="label-col">
          <div className="eyebrow"><span className="dot" />{text.itineraryEyebrow}</div>
        </div>
        <h2>{text.itineraryHeading}</h2>
      </div>
      <div className="day-list">
        {TRIP.days.map((d, i) =>
          <Day key={d.n} day={d} text={text} open={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? -1 : i)} />
        )}
      </div>
    </section>);

}

function Included({ text }) {
  return (
    <section id="included">
      <div className="section-head">
        <div className="label-col">
          <div className="eyebrow"><span className="dot" />{text.includedEyebrow}</div>
        </div>
        <h2 style={{ textAlign: 'center' }}>{text.includedHeading}</h2>
      </div>
      <div className="included-grid">
        {TRIP.included.map((it, i) =>
          <div key={i} className="inc">
            <div className="inc-icon">{it.glyph}</div>
            <h4>{it.title}</h4>
            <p>{it.body}</p>
          </div>
        )}
      </div>
    </section>);

}

function Pricing({ text }) {
  return (
    <section id="pricing" className="pricing">
      <div className="pricing-inner">
        <div className="section-head">
          <div className="label-col">
            <div className="eyebrow"><span className="dot" />{text.pricingEyebrow}</div>
          </div>
          <h2>{text.pricingHeading}</h2>
        </div>
        <div className="tiers">
          {TRIP.tiers.map((t) =>
            <div key={t.id} className={`tier ${t.featured ? 'featured' : ''}`}>
              {t.featured && <div className="tier-flag">{text.navReserve}</div>}
              <div>
                <h3 className="tier-name">{t.name}</h3>
                <div className="tier-tag" style={{ margin: '0px' }}>{t.tag}</div>
              </div>
              <div className="tier-price">
                <span className="cur">USD</span>
                {t.price}
                <span className="per">/ guest</span>
              </div>
              <ul className="tier-list">
                {t.list.map((li, i) => <li key={i}>{li}</li>)}
              </ul>
            </div>
          )}
        </div>
        <p style={{
          marginTop: 32, fontFamily: 'var(--mono)', fontSize: 11,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'rgba(245,239,226,0.55)'
        }}>
          {text === TEXT.en
            ? 'Prices exclude international flights. A 25% deposit secures your seat — fully refundable until 60 days out.'
            : 'Los precios no incluyen vuelos internacionales. Un depósito del 25% asegura tu asiento — totalmente reembolsable hasta 60 días antes.'}
        </p>
      </div>
    </section>);

}

function Form({ text }) {
  const [data, setData] = useState({
    firstName: '', lastName: '', email: '', company: '',
    tier: 'founder',
    interests: [],
    notes: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (k, v) => setData((d) => ({ ...d, [k]: v }));
  const toggleInterest = (it) => {
    setData((d) => ({
      ...d,
      interests: d.interests.includes(it) ?
        d.interests.filter((x) => x !== it) :
        [...d.interests, it]
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!data.firstName.trim()) errs.firstName = true;
    if (!data.lastName.trim()) errs.lastName = true;
    if (!data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = true;
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const action = window.location.protocol === 'file:' ? '/' : '/en/';
    fetch(action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'signup',
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        company: data.company,
        tier: data.tier,
        interests: data.interests.join(', '),
        notes: data.notes,
      }).toString(),
    })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true));
  };

  const interests = [
    'Hardware & manufacturing',
    'AI & robotics',
    'Mobility & EVs',
    'Architecture',
    'Photography',
    'Slow days in Yangshuo'
  ];

  return (
    <section id="apply">
      <div className="form-wrap">
        <div className="form-side">
          <div className="eyebrow" style={{ marginBottom: 24 }}><span className="dot" />{text.formSidebarEyebrow}</div>
          <h3>{text.formHeading}</h3>
          <p>{text.formIntro}</p>
          <div className="form-meta">
            <div className="form-meta-row"><span className="l">{text.groupSize}</span><span className="v">{text.groupSizeValue}</span></div>
            <div className="form-meta-row"><span className="l">{text.departureLabel}</span><span className="v">{text.departureValue}</span></div>
            <div className="form-meta-row"><span className="l">{text.seatsLeft}</span><span className="v">{text.seatsLeftValue}</span></div>
            <div className="form-meta-row"><span className="l">{text.applicationsClose}</span><span className="v">{text.applicationsCloseValue}</span></div>
          </div>
        </div>

        {submitted ?
          <div className="form-success">
            <div className="check">✓</div>
            <h4>{text.thankYou} {data.firstName}.</h4>
            <p>{text.successBody}</p>
          </div> :
          <form name="signup" method="POST" netlify netlify-honeypot="bot-field" className="form" onSubmit={submit} noValidate>
            <input type="hidden" name="form-name" value="signup" />
            <p style={{ display: 'none' }}><label>Don’t fill this out if you're human: <input name="bot-field" /></label></p>
            <div className="form-row">
              <div className={`field ${errors.firstName ? 'error' : ''}`}>
                <label>{text.firstName}</label>
                <input type="text" value={data.firstName} onChange={(e) => update('firstName', e.target.value)} />
                <span className="err-msg">{text.submitErrorRequired}</span>
              </div>
              <div className={`field ${errors.lastName ? 'error' : ''}`}>
                <label>{text.lastName}</label>
                <input type="text" value={data.lastName} onChange={(e) => update('lastName', e.target.value)} />
                <span className="err-msg">{text.submitErrorRequired}</span>
              </div>
            </div>
            <div className="form-row">
              <div className={`field ${errors.email ? 'error' : ''}`}>
                <label>{text.email}</label>
                <input type="email" value={data.email} onChange={(e) => update('email', e.target.value)} />
                <span className="err-msg">{text.submitErrorEmail}</span>
              </div>
              <div className="field">
                <label>{text.companyRole}</label>
                <input type="text" value={data.company} onChange={(e) => update('company', e.target.value)} placeholder={text.companyPlaceholder} />
              </div>
            </div>

            <div className="field">
              <label>{text.preferredTier}</label>
              <div className="pick-tier">
                {TRIP.tiers.map((t) =>
                  <label key={t.id} className={data.tier === t.id ? 'active' : ''}>
                    <span className="pt-name">{t.name}</span>
                    <span>${t.price} · {t.tag}</span>
                    <input type="radio" name="tier" value={t.id} checked={data.tier === t.id} onChange={() => update('tier', t.id)} />
                  </label>
                )}
              </div>
            </div>

            <div className="field">
              <label>{text.interestsLabel}</label>
              <div className="chip-row">
                {interests.map((it) =>
                  <button
                    type="button" key={it}
                    className={`chip ${data.interests.includes(it) ? 'active' : ''}`}
                    onClick={() => toggleInterest(it)}>
                    {it}</button>
                )}
              </div>
            </div>

            <div className="field">
              <label>{text.notesLabel}</label>
              <textarea value={data.notes} onChange={(e) => update('notes', e.target.value)} placeholder={text.notesPlaceholder} />
            </div>

            <button type="submit" className="submit">{text.submitLabel}</button>
          </form>
        }
      </div>
    </section>);

}

function getQuestionnaireStorageKey() {
  return 'sinocircuit-questionnaire-daniel';
}

function getQuestionnaireRoute() {
  if (typeof window === 'undefined') return '';
  return window.location.pathname;
}

function getQuestionnaireInitialState() {
  const stored = typeof window !== 'undefined' ? window.localStorage.getItem(getQuestionnaireStorageKey()) : null;
  let parsed = null;
  try {
    parsed = stored ? JSON.parse(stored) : null;
  } catch (error) {
    parsed = null;
  }

  return {
    fullName: 'Daniel Bradtke',
    email: 'daniel@djld.vc',
    nationality: '',
    passportNumber: '',
    passportExpiry: '',
    chinaEntry: '',
    arrivalAirport: '',
    flightDetails: '',
    arrivingEarly: '',
    airportPickup: '',
    roomPreference: '',
    singleOccupancy: '',
    accessibility: '',
    dietaryRestrictions: [],
    dietaryOther: '',
    foodAllergies: '',
    spiceTolerance: '',
    hardNoFoods: '',
    alcohol: '',
    coffeeDependency: '',
    activityComfort: '',
    medicalConditions: '',
    travelInsurance: '',
    wechatInstalled: '',
    alipaySetup: '',
    vpnNeeds: [],
    vpnOther: '',
    vpnRecommendation: false,
    commsChannel: '',
    focusAreas: ['Gaming', 'Fintech & security', 'Health-tech & longevity', 'Consumer & media platforms'],
    gamingInterests: [],
    fintechInterests: [],
    consumerInterests: [],
    healthInterests: [],
    objectives: [],
    deployCapital: '',
    typicalCheckSize: '',
    companiesOrPeople: '',
    counterparts: [],
    firstTimeInChina: '',
    existingChinaExposure: '',
    mandarin: '',
    positioning: '',
    sensitivity: '',
    meetings: '',
    willingToExtend: '',
    tripWin: '',
    guilinGoals: [],
    culturalInterests: '',
    wellness: [],
    plusOne: '',
    plusOneDetails: '',
    souvenirs: '',
    bucketList: '',
    preferredName: 'Daniel',
    introBio: '',
    logoFileName: '',
    logoFileBase64: '',
    emergencyContact: '',
    photoConsent: '',
    testimonialConsent: '',
    anythingElse: '',
    ...parsed,
  };
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result || '');
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function formatAnswer(value) {
  if (Array.isArray(value)) {
    return value.filter(Boolean).join(', ');
  }
  if (value === null || value === undefined || value === '') {
    return '—';
  }
  return String(value);
}

function QuestionnairePage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState(getQuestionnaireInitialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const steps = [
    { title: 'Business & investment objectives', blurb: 'We’ll shape the meetings and the narrative around your goals.' },
    { title: 'Travel & logistics', blurb: 'Start with the basics so we can plan the arrival, stay, and comfort.' },
    { title: 'Food & health', blurb: 'We’ll keep the week thoughtful and logistics-safe.' },
    { title: 'Connectivity & payments', blurb: 'We want your daily life to feel seamless in China.' },
    { title: 'Guilin / Yangshuo & personal', blurb: 'We want the Yangshuo stretch to fit your mood and pace.' },
    { title: 'Admin & consent', blurb: 'Last details and permissions so we can make this easy on the ground.' },
    { title: 'Review', blurb: 'Check everything once before we send it over.' },
  ];

  useEffect(() => {
    document.title = 'Daniel pre-trip questionnaire · Sinocircuit';
    document.documentElement.lang = 'en';
    const robotsTag = document.querySelector('meta[name="robots"]');
    if (!robotsTag) {
      const tag = document.createElement('meta');
      tag.setAttribute('name', 'robots');
      tag.setAttribute('content', 'noindex,nofollow');
      document.head.appendChild(tag);
    } else {
      robotsTag.setAttribute('content', 'noindex,nofollow');
    }
  }, []);

  useEffect(() => {
    if (!submitted) {
      window.localStorage.setItem(getQuestionnaireStorageKey(), JSON.stringify(formData));
    }
  }, [formData, submitted]);

  useEffect(() => {
    if (submitted) {
      window.localStorage.removeItem(getQuestionnaireStorageKey());
    }
  }, [submitted]);

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleArrayValue = (field, value) => {
    setFormData((prev) => {
      const current = prev[field] || [];
      return {
        ...prev,
        [field]: current.includes(value) ? current.filter((item) => item !== value) : [...current, value],
      };
    });
  };

  const moveFocusArea = (index, direction) => {
    setFormData((prev) => {
      const next = [...prev.focusAreas];
      const swapIndex = index + direction;
      if (swapIndex < 0 || swapIndex >= next.length) return prev;
      [next[index], next[swapIndex]] = [next[swapIndex], next[index]];
      return { ...prev, focusAreas: next };
    });
  };

  const validateStep = () => {
    const nextErrors = {};
    if (step === 0) {
      if (!formData.focusAreas.length) nextErrors.focusAreas = 'Please rank the focus areas.';
      if (!formData.objectives.length) nextErrors.objectives = 'Please tell us what you hope to get out of the trip.';
      if (!formData.counterparts.length) nextErrors.counterparts = 'Please tell us who to prioritize.';
      if (!formData.firstTimeInChina) nextErrors.firstTimeInChina = 'Please tell us whether this is your first trip to China.';
      if (!formData.mandarin) nextErrors.mandarin = 'Please tell us about your Mandarin level.';
      if (!formData.positioning) nextErrors.positioning = 'Please tell us how to position you.';
      if (!formData.meetings) nextErrors.meetings = 'Please tell us if you want curated 1:1 meetings.';
      if (!formData.tripWin.trim()) nextErrors.tripWin = 'Please tell us what would make the trip a clear win.';
    } else if (step === 1) {
      if (!formData.fullName.trim()) nextErrors.fullName = 'Please enter your full name.';
      if (!formData.nationality.trim()) nextErrors.nationality = 'Please add your nationality or passport country.';
      if (!formData.passportExpiry) nextErrors.passportExpiry = 'Passport expiry date is required.';
      if (!formData.chinaEntry) nextErrors.chinaEntry = 'Please tell us your China entry status.';
      if (!formData.airportPickup) nextErrors.airportPickup = 'Please tell us if you need pickup.';
      if (!formData.roomPreference) nextErrors.roomPreference = 'Please choose a room preference.';
      if (!formData.singleOccupancy) nextErrors.singleOccupancy = 'Please tell us about room occupancy.';
    } else if (step === 2) {
      if (!formData.dietaryRestrictions.length && !formData.dietaryOther.trim()) nextErrors.dietaryRestrictions = 'Please share your dietary needs.';
      if (!formData.foodAllergies.trim()) nextErrors.foodAllergies = 'Please add any food allergies.';
      if (!formData.spiceTolerance) nextErrors.spiceTolerance = 'Please tell us your spice tolerance.';
      if (!formData.alcohol) nextErrors.alcohol = 'Please tell us about alcohol preferences.';
      if (!formData.coffeeDependency) nextErrors.coffeeDependency = 'Please tell us about your coffee or tea preference.';
      if (!formData.activityComfort) nextErrors.activityComfort = 'Please tell us about your activity comfort.';
      if (!formData.travelInsurance) nextErrors.travelInsurance = 'Please tell us about travel insurance.';
    } else if (step === 3) {
      if (!formData.wechatInstalled) nextErrors.wechatInstalled = 'Please tell us about WeChat.';
      if (!formData.alipaySetup) nextErrors.alipaySetup = 'Please tell us about mobile payments.';
      if (!formData.commsChannel) nextErrors.commsChannel = 'Please choose a preferred comms channel.';
    } else if (step === 4) {
      if (!formData.plusOne) nextErrors.plusOne = 'Please tell us whether you are bringing a guest or colleague.';
    } else if (step === 5) {
      if (!formData.preferredName.trim()) nextErrors.preferredName = 'Please add a preferred name.';
      if (!formData.introBio.trim()) nextErrors.introBio = 'Please add a one-line bio.';
      if (!formData.emergencyContact.trim()) nextErrors.emergencyContact = 'Please add an emergency contact.';
      if (!formData.photoConsent) nextErrors.photoConsent = 'Please choose a photo/video option.';
      if (!formData.testimonialConsent) nextErrors.testimonialConsent = 'Please tell us how to use your testimonial.';
    }
    return nextErrors;
  };

  const handleNext = () => {
    const nextErrors = validateStep();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setErrors({});
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError('');
    try {
      const body = {
        recipient: 'matias@sinocircuit.net',
        clientName: formData.fullName || 'Daniel Bradtke',
        email: formData.email,
        trip: 'September 18–24, 2026 Shenzhen + Guilin/Yangshuo',
        answers: formData,
      };

      const response = await fetch('/.netlify/functions/submit-questionnaire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!response.ok) throw new Error('Submission failed');
      setSubmitted(true);
    } catch (error) {
      setSubmitError('We could not reach the delivery service. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    if (step === 6) {
      return (
        <div className="wizard-review">
          <div className="review-card">
            <h3>Review your answers</h3>
            <p>Everything is saved locally, so you can come back and finish later if needed.</p>
            <div className="review-list">
              <div className="review-row">
                <strong>Business & investment objectives</strong>
                <span>{[formatAnswer(formData.objectives), formatAnswer(formData.counterparts), formatAnswer(formData.tripWin)].join(' · ')}</span>
                <button type="button" className="review-edit" onClick={() => setStep(0)}>Edit</button>
              </div>
              <div className="review-row">
                <strong>Travel & logistics</strong>
                <span>{[formData.fullName, formData.chinaEntry, formData.airportPickup, formData.roomPreference, formData.singleOccupancy].filter(Boolean).join(' · ') || '—'}</span>
                <button type="button" className="review-edit" onClick={() => setStep(1)}>Edit</button>
              </div>
              <div className="review-row">
                <strong>Food & health</strong>
                <span>{[formatAnswer(formData.dietaryRestrictions), formatAnswer(formData.travelInsurance)].join(' · ')}</span>
                <button type="button" className="review-edit" onClick={() => setStep(2)}>Edit</button>
              </div>
              <div className="review-row">
                <strong>Connectivity & payments</strong>
                <span>{[formData.wechatInstalled, formData.alipaySetup, formData.commsChannel].filter(Boolean).join(' · ') || '—'}</span>
                <button type="button" className="review-edit" onClick={() => setStep(3)}>Edit</button>
              </div>
              <div className="review-row">
                <strong>Guilin / Yangshuo & personal</strong>
                <span>{[formatAnswer(formData.guilinGoals), formatAnswer(formData.plusOne)].join(' · ')}</span>
                <button type="button" className="review-edit" onClick={() => setStep(4)}>Edit</button>
              </div>
              <div className="review-row">
                <strong>Admin & consent</strong>
                <span>{[formData.preferredName, formData.photoConsent, formData.testimonialConsent].filter(Boolean).join(' · ') || '—'}</span>
                <button type="button" className="review-edit" onClick={() => setStep(5)}>Edit</button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="wizard-stack">
        {step === 0 && (
          <div className="wizard-grid">
            <fieldset className="wizard-field">
              <legend>Rank DJLD’s focus areas by how much China exposure you want*</legend>
              <div className="rank-list">
                {formData.focusAreas.map((item, index) => (
                  <div key={item} className="rank-row">
                    <span>{index + 1}. {item}</span>
                    <div className="rank-actions">
                      <button type="button" onClick={() => moveFocusArea(index, -1)} disabled={index === 0}>↑</button>
                      <button type="button" onClick={() => moveFocusArea(index, 1)} disabled={index === formData.focusAreas.length - 1}>↓</button>
                    </div>
                  </div>
                ))}
              </div>
              {errors.focusAreas && <p className="field-error">{errors.focusAreas}</p>}
            </fieldset>
            <fieldset className="wizard-field">
              <legend>What are you hoping to get out of the trip?*</legend>
              {['Source deals / portfolio companies', 'Find partners or JV', 'Source suppliers / OEM for a product', 'Bring Chinese products to Western markets', 'Take portfolio companies into China', 'Market intelligence', 'Personal interest'].map((option) => (
                <label key={option} className="choice-row"><input type="checkbox" checked={formData.objectives.includes(option)} onChange={() => toggleArrayValue('objectives', option)} /> {option}</label>
              ))}
              {errors.objectives && <p className="field-error">{errors.objectives}</p>}
            </fieldset>
            <fieldset className="wizard-field">
              <legend>Which counterparts should we prioritize?*</legend>
              {['Founders', 'VCs / funds & co-investors', 'Corp dev / BD at major platforms', 'Manufacturers / OEMs', 'Service providers (payments, KYC, localization)', 'Industry bodies / government'].map((option) => (
                <label key={option} className="choice-row"><input type="checkbox" checked={formData.counterparts.includes(option)} onChange={() => toggleArrayValue('counterparts', option)} /> {option}</label>
              ))}
              {errors.counterparts && <p className="field-error">{errors.counterparts}</p>}
            </fieldset>
            <fieldset className="wizard-field">
              <legend>First time in China?*</legend>
              {['Yes', 'No'].map((option) => (
                <label key={option} className="choice-row"><input type="radio" name="firstTimeInChina" value={option} checked={formData.firstTimeInChina === option} onChange={() => updateField('firstTimeInChina', option)} /> {option}</label>
              ))}
              {errors.firstTimeInChina && <p className="field-error">{errors.firstTimeInChina}</p>}
              <label className="subfield">
                <span>Existing China exposure, contacts, or portfolio?</span>
                <textarea rows="3" value={formData.existingChinaExposure} onChange={(e) => updateField('existingChinaExposure', e.target.value)} />
              </label>
            </fieldset>
            <fieldset className="wizard-field">
              <legend>Any Mandarin?*</legend>
              {['None', 'A little', 'Conversational+'].map((option) => (
                <label key={option} className="choice-row"><input type="radio" name="mandarin" value={option} checked={formData.mandarin === option} onChange={() => updateField('mandarin', option)} /> {option}</label>
              ))}
              {errors.mandarin && <p className="field-error">{errors.mandarin}</p>}
            </fieldset>
            <fieldset className="wizard-field">
              <legend>How should we position you with counterparts?*</legend>
              {['Represent DJLD openly', 'Keep low-profile & confidential', 'Depends — let’s discuss'].map((option) => (
                <label key={option} className="choice-row"><input type="radio" name="positioning" value={option} checked={formData.positioning === option} onChange={() => updateField('positioning', option)} /> {option}</label>
              ))}
              {errors.positioning && <p className="field-error">{errors.positioning}</p>}
            </fieldset>
            <fieldset className="wizard-field">
              <legend>Want curated 1:1 meetings arranged around the group program?*</legend>
              {['Yes please', 'Maybe', 'Group program is enough'].map((option) => (
                <label key={option} className="choice-row"><input type="radio" name="meetings" value={option} checked={formData.meetings === option} onChange={() => updateField('meetings', option)} /> {option}</label>
              ))}
              {errors.meetings && <p className="field-error">{errors.meetings}</p>}
              <label className="subfield">
                <span>Willing to arrive early or stay later for meetings?</span>
                <select value={formData.willingToExtend} onChange={(e) => updateField('willingToExtend', e.target.value)}>
                  <option value="">Choose one</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Maybe">Maybe</option>
                </select>
              </label>
            </fieldset>
            <div className="wizard-field">
              <label htmlFor="tripWin">What would make this trip a clear win for you?*</label>
              <textarea id="tripWin" rows="4" value={formData.tripWin} onChange={(e) => updateField('tripWin', e.target.value)} aria-invalid={Boolean(errors.tripWin)} />
              {errors.tripWin && <p className="field-error">{errors.tripWin}</p>}
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="wizard-grid">
            <div className="wizard-field">
              <label htmlFor="fullName">Full name as it appears on passport*</label>
              <input id="fullName" name="fullName" type="text" value={formData.fullName} onChange={(e) => updateField('fullName', e.target.value)} aria-invalid={Boolean(errors.fullName)} />
              {errors.fullName && <p className="field-error">{errors.fullName}</p>}
            </div>
            <div className="wizard-field">
              <label htmlFor="nationality">Nationality / passport issuing country*</label>
              <input id="nationality" name="nationality" type="text" value={formData.nationality} onChange={(e) => updateField('nationality', e.target.value)} aria-invalid={Boolean(errors.nationality)} />
              {errors.nationality && <p className="field-error">{errors.nationality}</p>}
            </div>
            <div className="wizard-field">
              <label htmlFor="passportNumber">Passport number</label>
              <input id="passportNumber" name="passportNumber" type="text" value={formData.passportNumber} onChange={(e) => updateField('passportNumber', e.target.value)} />
              <p className="field-helper">Optional here — you can share this securely later if you prefer.</p>
            </div>
            <div className="wizard-field">
              <label htmlFor="passportExpiry">Passport expiry date*</label>
              <input id="passportExpiry" name="passportExpiry" type="date" value={formData.passportExpiry} onChange={(e) => updateField('passportExpiry', e.target.value)} aria-invalid={Boolean(errors.passportExpiry)} />
              {errors.passportExpiry && <p className="field-error">{errors.passportExpiry}</p>}
            </div>
            <fieldset className="wizard-field">
              <legend>China entry*</legend>
              {['I already hold a valid China visa', 'I’ll enter visa-free', 'I need help', 'Not sure'].map((option) => (
                <label key={option} className="choice-row"><input type="radio" name="chinaEntry" value={option} checked={formData.chinaEntry === option} onChange={() => updateField('chinaEntry', option)} /> {option}</label>
              ))}
              {errors.chinaEntry && <p className="field-error">{errors.chinaEntry}</p>}
            </fieldset>
            <fieldset className="wizard-field">
              <legend>Arrival airport preference*</legend>
              {['Hong Kong (HKG)', 'Shenzhen (SZX)', 'Guangzhou (CAN)', 'Not booked yet', 'Not sure'].map((option) => (
                <label key={option} className="choice-row"><input type="radio" name="arrivalAirport" value={option} checked={formData.arrivalAirport === option} onChange={() => updateField('arrivalAirport', option)} /> {option}</label>
              ))}
            </fieldset>
            <div className="wizard-field">
              <label htmlFor="flightDetails">Flight details if booked</label>
              <textarea id="flightDetails" name="flightDetails" rows="3" value={formData.flightDetails} onChange={(e) => updateField('flightDetails', e.target.value)} placeholder="Arrival + departure flight numbers, dates, times" />
            </div>
            <div className="wizard-field">
              <label htmlFor="arrivingEarly">Arriving early or staying later than Sep 18–24?</label>
              <textarea id="arrivingEarly" name="arrivingEarly" rows="3" value={formData.arrivingEarly} onChange={(e) => updateField('arrivingEarly', e.target.value)} />
            </div>
            <fieldset className="wizard-field">
              <legend>Need airport pickup?*</legend>
              {['Yes', 'No', 'Not sure'].map((option) => (
                <label key={option} className="choice-row"><input type="radio" name="airportPickup" value={option} checked={formData.airportPickup === option} onChange={() => updateField('airportPickup', option)} /> {option}</label>
              ))}
              {errors.airportPickup && <p className="field-error">{errors.airportPickup}</p>}
            </fieldset>
            <fieldset className="wizard-field">
              <legend>Room preference*</legend>
              {['King', 'Twin', 'No preference'].map((option) => (
                <label key={option} className="choice-row"><input type="radio" name="roomPreference" value={option} checked={formData.roomPreference === option} onChange={() => updateField('roomPreference', option)} /> {option}</label>
              ))}
              {errors.roomPreference && <p className="field-error">{errors.roomPreference}</p>}
            </fieldset>
            <fieldset className="wizard-field">
              <legend>Single occupancy (own room)?*</legend>
              {['Yes', 'No'].map((option) => (
                <label key={option} className="choice-row"><input type="radio" name="singleOccupancy" value={option} checked={formData.singleOccupancy === option} onChange={() => updateField('singleOccupancy', option)} /> {option}</label>
              ))}
              {errors.singleOccupancy && <p className="field-error">{errors.singleOccupancy}</p>}
            </fieldset>
            <div className="wizard-field">
              <label htmlFor="accessibility">Accessibility or mobility needs</label>
              <textarea id="accessibility" name="accessibility" rows="3" value={formData.accessibility} onChange={(e) => updateField('accessibility', e.target.value)} />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="wizard-grid">
            <fieldset className="wizard-field">
              <legend>Dietary restrictions*</legend>
              {['None', 'Vegetarian', 'Vegan', 'Pescatarian', 'Halal', 'Kosher', 'Gluten-free', 'Dairy-free'].map((option) => (
                <label key={option} className="choice-row"><input type="checkbox" checked={formData.dietaryRestrictions.includes(option)} onChange={() => toggleArrayValue('dietaryRestrictions', option)} /> {option}</label>
              ))}
              <div className="subfield">
                <label htmlFor="dietaryOther">Other</label>
                <input id="dietaryOther" type="text" value={formData.dietaryOther} onChange={(e) => updateField('dietaryOther', e.target.value)} />
              </div>
              {errors.dietaryRestrictions && <p className="field-error">{errors.dietaryRestrictions}</p>}
            </fieldset>
            <div className="wizard-field">
              <label htmlFor="foodAllergies">Food allergies (esp. nuts, shellfish)*</label>
              <input id="foodAllergies" type="text" value={formData.foodAllergies} onChange={(e) => updateField('foodAllergies', e.target.value)} placeholder="none" aria-invalid={Boolean(errors.foodAllergies)} />
              {errors.foodAllergies && <p className="field-error">{errors.foodAllergies}</p>}
            </div>
            <fieldset className="wizard-field">
              <legend>Spice tolerance*</legend>
              {['Mild', 'Medium', 'Bring it on'].map((option) => (
                <label key={option} className="choice-row"><input type="radio" name="spiceTolerance" value={option} checked={formData.spiceTolerance === option} onChange={() => updateField('spiceTolerance', option)} /> {option}</label>
              ))}
              {errors.spiceTolerance && <p className="field-error">{errors.spiceTolerance}</p>}
            </fieldset>
            <div className="wizard-field">
              <label htmlFor="hardNoFoods">Any foods you won’t eat / hard nos</label>
              <textarea id="hardNoFoods" rows="3" value={formData.hardNoFoods} onChange={(e) => updateField('hardNoFoods', e.target.value)} />
            </div>
            <fieldset className="wizard-field">
              <legend>Alcohol*</legend>
              {['I drink (incl. trying baijiu)', 'Wine & beer only', 'I don’t drink'].map((option) => (
                <label key={option} className="choice-row"><input type="radio" name="alcohol" value={option} checked={formData.alcohol === option} onChange={() => updateField('alcohol', option)} /> {option}</label>
              ))}
              {errors.alcohol && <p className="field-error">{errors.alcohol}</p>}
            </fieldset>
            <fieldset className="wizard-field">
              <legend>Coffee dependency*</legend>
              {['Need my daily coffee', 'Tea is fine', 'Either'].map((option) => (
                <label key={option} className="choice-row"><input type="radio" name="coffeeDependency" value={option} checked={formData.coffeeDependency === option} onChange={() => updateField('coffeeDependency', option)} /> {option}</label>
              ))}
              {errors.coffeeDependency && <p className="field-error">{errors.coffeeDependency}</p>}
            </fieldset>
            <fieldset className="wizard-field">
              <legend>Physical activity comfort for Yangshuo*</legend>
              {['Very active', 'Moderate', 'Prefer light', 'Have limitations (describe)'].map((option) => (
                <label key={option} className="choice-row"><input type="radio" name="activityComfort" value={option} checked={formData.activityComfort === option} onChange={() => updateField('activityComfort', option)} /> {option}</label>
              ))}
              {errors.activityComfort && <p className="field-error">{errors.activityComfort}</p>}
            </fieldset>
            <div className="wizard-field">
              <label htmlFor="medicalConditions">Medical conditions or medications we should be aware of for travel</label>
              <textarea id="medicalConditions" rows="4" value={formData.medicalConditions} onChange={(e) => updateField('medicalConditions', e.target.value)} />
              <p className="field-helper">Note: some medications (e.g. certain stimulants and strong painkillers) are restricted in China — flag anything you’re unsure about.</p>
            </div>
            <fieldset className="wizard-field">
              <legend>Do you have travel insurance for the trip?*</legend>
              {['Yes', 'Not yet', 'Need a recommendation'].map((option) => (
                <label key={option} className="choice-row"><input type="radio" name="travelInsurance" value={option} checked={formData.travelInsurance === option} onChange={() => updateField('travelInsurance', option)} /> {option}</label>
              ))}
              {errors.travelInsurance && <p className="field-error">{errors.travelInsurance}</p>}
            </fieldset>
          </div>
        )}

        {step === 3 && (
          <div className="wizard-grid">
            <fieldset className="wizard-field">
              <legend>Do you have WeChat installed?*</legend>
              {['Yes', 'No', 'Need help setting it up'].map((option) => (
                <label key={option} className="choice-row"><input type="radio" name="wechatInstalled" value={option} checked={formData.wechatInstalled === option} onChange={() => updateField('wechatInstalled', option)} /> {option}</label>
              ))}
              {errors.wechatInstalled && <p className="field-error">{errors.wechatInstalled}</p>}
              <p className="field-helper">It’s essential in China for comms and payments.</p>
            </fieldset>
            <fieldset className="wizard-field">
              <legend>Alipay / WeChat Pay set up with a foreign card?*</legend>
              {['Yes', 'No', 'Need help'].map((option) => (
                <label key={option} className="choice-row"><input type="radio" name="alipaySetup" value={option} checked={formData.alipaySetup === option} onChange={() => updateField('alipaySetup', option)} /> {option}</label>
              ))}
              {errors.alipaySetup && <p className="field-error">{errors.alipaySetup}</p>}
            </fieldset>
            <fieldset className="wizard-field">
              <legend>VPN / eSIM needs</legend>
              {['I use Google/Gmail', 'WhatsApp', 'Instagram', 'X'].map((option) => (
                <label key={option} className="choice-row"><input type="checkbox" checked={formData.vpnNeeds.includes(option)} onChange={() => toggleArrayValue('vpnNeeds', option)} /> {option}</label>
              ))}
              <label className="choice-row"><input type="checkbox" checked={formData.vpnRecommendation} onChange={() => updateField('vpnRecommendation', !formData.vpnRecommendation)} /> I’ll need a VPN recommendation</label>
              <div className="subfield">
                <label htmlFor="vpnOther">Other</label>
                <input id="vpnOther" type="text" value={formData.vpnOther} onChange={(e) => updateField('vpnOther', e.target.value)} />
              </div>
            </fieldset>
            <fieldset className="wizard-field">
              <legend>Preferred comms channel during the trip*</legend>
              {['WeChat', 'WhatsApp', 'Signal', 'Email', 'Other'].map((option) => (
                <label key={option} className="choice-row"><input type="radio" name="commsChannel" value={option} checked={formData.commsChannel === option} onChange={() => updateField('commsChannel', option)} /> {option}</label>
              ))}
              {errors.commsChannel && <p className="field-error">{errors.commsChannel}</p>}
            </fieldset>
          </div>
        )}

        {step === 4 && (
          <div className="wizard-grid">
            <fieldset className="wizard-field">
              <legend>What do you want from the Guilin / Yangshuo leg?</legend>
              {['Relaxation', 'Adventure', 'Photography', 'Cycling', 'Rock climbing', 'Li River cruise', 'Local culture & food'].map((option) => (
                <label key={option} className="choice-row"><input type="checkbox" checked={formData.guilinGoals.includes(option)} onChange={() => toggleArrayValue('guilinGoals', option)} /> {option}</label>
              ))}
            </fieldset>
            <div className="wizard-field">
              <label htmlFor="culturalInterests">Cultural interests (history, art, nightlife, etc.)</label>
              <textarea id="culturalInterests" rows="3" value={formData.culturalInterests} onChange={(e) => updateField('culturalInterests', e.target.value)} />
            </div>
            <fieldset className="wizard-field">
              <legend>Wellness on the road</legend>
              {['Hotel gym', 'Running routes', 'Spa', 'None needed'].map((option) => (
                <label key={option} className="choice-row"><input type="checkbox" checked={formData.wellness.includes(option)} onChange={() => toggleArrayValue('wellness', option)} /> {option}</label>
              ))}
            </fieldset>
            <fieldset className="wizard-field">
              <legend>Bringing a +1 or colleague?*</legend>
              {['No', 'Yes (details)'].map((option) => (
                <label key={option} className="choice-row"><input type="radio" name="plusOne" value={option} checked={formData.plusOne === option} onChange={() => updateField('plusOne', option)} /> {option}</label>
              ))}
              {errors.plusOne && <p className="field-error">{errors.plusOne}</p>}
              <label className="subfield">
                <span>Details</span>
                <input type="text" value={formData.plusOneDetails} onChange={(e) => updateField('plusOneDetails', e.target.value)} />
              </label>
            </fieldset>
            <div className="wizard-field">
              <label htmlFor="souvenirs">Gifts / souvenirs you’re interested in sourcing</label>
              <textarea id="souvenirs" rows="3" value={formData.souvenirs} onChange={(e) => updateField('souvenirs', e.target.value)} />
            </div>
            <div className="wizard-field">
              <label htmlFor="bucketList">Anything on your China bucket list?</label>
              <textarea id="bucketList" rows="3" value={formData.bucketList} onChange={(e) => updateField('bucketList', e.target.value)} />
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="wizard-grid">
            <div className="wizard-field">
              <label htmlFor="preferredName">Preferred name / how to introduce you*</label>
              <input id="preferredName" type="text" value={formData.preferredName} onChange={(e) => updateField('preferredName', e.target.value)} aria-invalid={Boolean(errors.preferredName)} />
              {errors.preferredName && <p className="field-error">{errors.preferredName}</p>}
            </div>
            <div className="wizard-field">
              <label htmlFor="introBio">One-line bio for intros & name badge*</label>
              <input id="introBio" type="text" value={formData.introBio} onChange={(e) => updateField('introBio', e.target.value)} aria-invalid={Boolean(errors.introBio)} />
              {errors.introBio && <p className="field-error">{errors.introBio}</p>}
            </div>
            <div className="wizard-field">
              <label htmlFor="logoUpload">Company logo upload for intro materials</label>
              <input id="logoUpload" type="file" accept=".png,.jpg,.jpeg,.svg" onChange={async (e) => {
                const file = e.target.files && e.target.files[0];
                if (!file) return;
                const dataUrl = await readFileAsDataUrl(file);
                updateField('logoFileName', file.name);
                updateField('logoFileBase64', dataUrl);
              }} />
              {formData.logoFileName ? <p className="field-helper">Attached: {formData.logoFileName}</p> : null}
            </div>
            <div className="wizard-field">
              <label htmlFor="emergencyContact">Emergency contact (name, relationship, phone)*</label>
              <input id="emergencyContact" type="text" value={formData.emergencyContact} onChange={(e) => updateField('emergencyContact', e.target.value)} aria-invalid={Boolean(errors.emergencyContact)} />
              {errors.emergencyContact && <p className="field-error">{errors.emergencyContact}</p>}
            </div>
            <fieldset className="wizard-field">
              <legend>Photo/video consent*</legend>
              {['Fine to photograph/film me', 'Please keep me out of shots', 'Ask me on the day'].map((option) => (
                <label key={option} className="choice-row"><input type="radio" name="photoConsent" value={option} checked={formData.photoConsent === option} onChange={() => updateField('photoConsent', option)} /> {option}</label>
              ))}
              {errors.photoConsent && <p className="field-error">{errors.photoConsent}</p>}
            </fieldset>
            <fieldset className="wizard-field">
              <legend>May we name you as a participant / use a testimonial later?*</legend>
              {['Yes', 'No', 'Ask me later'].map((option) => (
                <label key={option} className="choice-row"><input type="radio" name="testimonialConsent" value={option} checked={formData.testimonialConsent === option} onChange={() => updateField('testimonialConsent', option)} /> {option}</label>
              ))}
              {errors.testimonialConsent && <p className="field-error">{errors.testimonialConsent}</p>}
            </fieldset>
            <div className="wizard-field">
              <label htmlFor="anythingElse">Anything else we should know?</label>
              <textarea id="anythingElse" rows="4" value={formData.anythingElse} onChange={(e) => updateField('anythingElse', e.target.value)} />
            </div>
          </div>
        )}
      </div>
    );
  };

  if (submitted) {
    return (
      <div className="questionnaire-page">
        <div className="questionnaire-shell">
          <div className="questionnaire-intro questionnaire-intro--success">
            <div className="logo-badge"><img src="../assets/Sinocircuit logo horizontal.svg" alt="Sinocircuit logo" /></div>
            <p className="eyebrow"><span className="dot" /> Private pre-trip onboarding</p>
            <h1>Thanks, Daniel — Matias will be in touch.</h1>
            <p>We’ve got your answers and will follow up shortly. We’ll keep the trip tailored to your week on the ground.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="questionnaire-page">
      <div className="questionnaire-shell">
        <header className="questionnaire-intro">
          <div className="logo-badge"><img src="../assets/Sinocircuit logo horizontal.svg" alt="Sinocircuit logo" /></div>
          <p className="eyebrow"><span className="dot" /> Private pre-trip onboarding</p>
          <h1>Hi Daniel</h1>
          <p className="questionnaire-line">A few questions so we can tailor your week on the ground — takes about 10 minutes.</p>
          <p className="questionnaire-meta">Trip · Sept 18–24, 2026 · Shenzhen + Guilin / Yangshuo</p>
        </header>

        <section className="wizard-card" aria-labelledby="wizard-title">
          <div className="wizard-header">
            <div>
              <p className="eyebrow"><span className="dot" /> {steps[step].title}</p>
              <h2 id="wizard-title">{steps[step].title}</h2>
              <p>{steps[step].blurb}</p>
            </div>
            <div className="wizard-counter" aria-live="polite">{step + 1} / {steps.length}</div>
          </div>

          <div className="progress-bar" role="progressbar" aria-valuemin="1" aria-valuemax={steps.length} aria-valuenow={step + 1}>
            <span style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
          </div>

          {renderStepContent()}

          {submitError ? <p className="field-error field-error--block">{submitError}</p> : null}

          <div className="wizard-actions">
            <button type="button" className="wizard-secondary" onClick={handleBack} disabled={step === 0}>Back</button>
            {step === steps.length - 1 ? (
              <button type="button" className="wizard-primary" onClick={handleSubmit} disabled={isSubmitting}>{isSubmitting ? 'Sending…' : 'Submit answers'}</button>
            ) : (
              <button type="button" className="wizard-primary" onClick={handleNext}>Next</button>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

function StickyCTA({ visible, text }) {
  return (
    <div className={`sticky-cta ${visible ? 'visible' : ''}`}>
      <span className="dot" />
      <span>{text.stickyText}</span>
      <button onClick={() => scrollToSection('apply')}>{text.stickyButton}</button>
    </div>);

}

function App() {
  const [lang, setLang] = useState(getPathLanguage());
  const text = TEXT[lang] || TEXT.en;
  const trip = lang === 'es' && TRIP.translations && TRIP.translations.es ? { ...TRIP, ...TRIP.translations.es } : TRIP;
  TRIP.days = trip.days;
  TRIP.included = trip.included;
  TRIP.tiers = trip.tiers;

  useEffect(() => {
    const detectLanguageChange = () => {
      const newLang = getPathLanguage();
      if (newLang !== lang) {
        setLang(newLang);
      }
    };
    window.addEventListener('popstate', detectLanguageChange);
    return () => window.removeEventListener('popstate', detectLanguageChange);
  }, [lang]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = text.pageTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', text.metaDescription);
    }
    document.querySelectorAll('link[rel="alternate"]').forEach((link) => {
      if (link.hreflang === 'es') link.href = `${window.location.origin}/es/`;
      if (link.hreflang === 'en') link.href = `${window.location.origin}/en/`;
    });
  }, [lang, text]);

  const handleLanguageChange = (newLang) => {
    if (newLang === lang) return;
    localStorage.setItem('preferredLang', newLang);
    const newPath = buildLanguagePath(newLang);
    if (window.location.protocol === 'file:') {
      window.location.href = 'file://' + newPath;
    } else {
      window.location.pathname = newPath;
    }
  };

  const { scrolled, pastHero } = useScrolled();
  const isQuestionnaireRoute = window.location.pathname === '/welcome/daniel-8f3k2q' || window.location.pathname === '/welcome/daniel-8f3k2q/';

  if (isQuestionnaireRoute) {
    return <QuestionnairePage />;
  }

  return (
    <>
      <Nav onHero={!pastHero} scrolled={scrolled} lang={lang} onLanguageChange={handleLanguageChange} text={text} />
      <Hero text={text} />
      <Overview text={text} />
      <Itinerary text={text} />
      <Included text={text} />
      <Pricing text={text} />
      <Form text={text} />
      <footer>
        <div className="f-brand">Sinocircuit</div>
        <div>{text.footerLineTwo}</div>
        <div>{text.footerCopyright}</div>
      </footer>
      <StickyCTA visible={pastHero} text={text} />
    </>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
