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
    stickyText: '10 OF 16 SEATS REMAIN · SEPT 18',
    stickyButton: 'Reserve →',
    footerLineTwo: 'Private journeys for the operator class · Hong Kong / New York',
    footerCopyright: '© 2026 SINOCIRCUIT JOURNEYS',
    pageSubtitle: 'South China Executive Trip',
    langEn: 'EN',
    langEs: 'ES',
  },
  es: {
    pageTitle: 'Shenzhen y Yangshuo — Meridian Private Journeys',
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
  return isLangFolder ? '../assets/' : 'assets/';
}

const ASSET_ROOT = getAssetRoot();

function Nav({ onHero, scrolled, lang, onLanguageChange, text }) {
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''} ${onHero ? 'on-hero' : ''}`}>
      <div className="brand">
        <img src={`${ASSET_ROOT}Sinocircuit logo horizontal.svg`} alt="Sinocircuit logo" className="brand-logo" />
      </div>
      <div className="nav-links">
        <span className="nav-link" onClick={() => scrollToSection('overview')}>{text.navOverview}</span>
        <span className="nav-link" onClick={() => scrollToSection('itinerary')}>{text.navItinerary}</span>
        <span className="nav-link" onClick={() => scrollToSection('included')}>{text.navIncluded}</span>
        <span className="nav-link" onClick={() => scrollToSection('pricing')}>{text.navPricing}</span>
        <button className="nav-cta" onClick={() => scrollToSection('apply')}>{text.navReserve}</button>
      </div>
      <div className="lang-toggle">
        <button type="button" className={lang === 'en' ? 'active' : ''} onClick={() => onLanguageChange('en')}>{text.langEn}</button>
        <button type="button" className={lang === 'es' ? 'active' : ''} onClick={() => onLanguageChange('es')}>{text.langEs}</button>
      </div>
    </nav>);

}

function Hero({ text }) {
  const titleText = text.pageTitle.replace(' — Meridian Private Journeys', '');
  const match = titleText.match(/\s(&|y)\s/i);
  const before = match ? titleText.slice(0, match.index) : titleText;
  const connector = match ? match[1] : '';
  const after = match ? titleText.slice(match.index + match[0].length) : '';

  return (
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

        <h1 className="hero-title">
          {before}
          {connector ? <> <span className="amp">{connector}</span> {after}</> : null}
          <span className="ys"></span>
        </h1>
        <p className="hero-subtitle">{text.pageSubtitle}</p>

        <div className="hero-stage">
          <img src={`${ASSET_ROOT}hero-painting.png`} alt="Shenzhen meets Yangshuo — ink painting" className="hero-img" />
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
        </div>
      </div>
    </header>);

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
