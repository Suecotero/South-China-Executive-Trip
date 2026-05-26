/* Main React app — Two Cities trip landing page */

const { useState, useEffect, useRef } = React;

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

function scrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 60;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

function Nav({ onHero, scrolled }) {
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''} ${onHero ? 'on-hero' : ''}`}>
      <div className="brand">
        <div className="brand-mark">m</div>
        <span>SINOCIRCUIT· PRIVATE JOURNEY</span>
      </div>
      <div className="nav-links">
        <span className="nav-link" onClick={() => scrollTo('overview')}>Overview</span>
        <span className="nav-link" onClick={() => scrollTo('itinerary')}>Itinerary</span>
        <span className="nav-link" onClick={() => scrollTo('included')}>Included</span>
        <span className="nav-link" onClick={() => scrollTo('pricing')}>Pricing</span>
        <button className="nav-cta" onClick={() => scrollTo('apply')}>Reserve a seat</button>
      </div>
    </nav>);

}

function Hero() {
  return (
    <header className="hero">
      <div className="hero-content">
        <div className="hero-top">
          <div className="eyebrow"><span className="dot" />Edition 04 · Spring 2026 · Limited to 16</div>
          <div className="ticker">
            <span>七天 · 七日</span>
            <span className="sep" />
            <span>22°N → 25°N</span>
          </div>
        </div>

        <h1 className="hero-title">
          South China Executive Trip<span className="amp"></span><span className="ys"></span>
        </h1>

        <div className="hero-stage">
          <img src="assets/hero-painting.png" alt="Shenzhen meets Yangshuo — ink painting" className="hero-img" />
        </div>

        <div className="hero-bottom">
          <p className="hero-tag" style={{ fontSize: "22px" }}>
            Seven days across China's hardware capital and its oldest karst landscapes — an executive expedition for founders, operators, and the curious.
          </p>
          <div className="fact">
            <div className="fact-label">Duration</div>
            <div className="fact-value">7 days</div>
          </div>
          <div className="fact">
            <div className="fact-label">Departure</div>
            <div className="fact-value">Sept 18</div>
          </div>
          <div className="fact">
            <div className="fact-label">From</div>
            <div className="fact-value">$5,900</div>
          </div>
        </div>
      </div>
    </header>);

}

function Overview() {
  return (
    <section id="overview">
      <div className="section-head">
        <div className="label-col">
          <div className="eyebrow"><span className="dot" />The arc of the week</div>
        </div>
        <h2>Two China's, one week — the <em>neon engine</em> of the South, and the <em>ink-painting</em> valleys it grew out of.</h2>
      </div>

      <div className="overview">
        <div className="city-card">
          <div className="city-img" style={{ backgroundImage: "url('assets/shenzhen.jpg')" }} />
          <div className="city-content">
            <div className="city-meta">
              <span>Days 1 — 4</span>
              <span>深圳</span>
            </div>
            <div>
              <h3 className="city-name"><em>Shenzhen</em></h3>
              <p className="city-desc">
                From a fishing village to 17 million people in forty years. We tour the factories, labs, and markets that build the hardware most of the world depends on.
              </p>
            </div>
          </div>
        </div>

        <div className="city-card">
          <div className="city-img" style={{ backgroundImage: "url('assets/yangshuo.jpg')" }} />
          <div className="city-content">
            <div className="city-meta">
              <span>Days 4 — 7</span>
              <span>阳朔</span>
            </div>
            <div>
              <h3 className="city-name"><em>Yangshuo</em></h3>
              <p className="city-desc">A high-speed train north drops us into the karst. Bamboo rafts on the Yulong, terraced rice fields, and the quiet our phones were never designed for.

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function Day({ day, open, onToggle }) {
  return (
    <div className={`day ${open ? 'open' : ''}`} onClick={onToggle}>
      <div className="day-num">
        Day
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

function Itinerary() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section id="itinerary" className="itinerary">
      <div className="section-head">
        <div className="label-col">
          <div className="eyebrow"><span className="dot" />Preliminary Schedule (details are subject to change)</div>
        </div>
        <h2>The <em>itinerary</em>, in full.</h2>
      </div>
      <div className="day-list">
        {TRIP.days.map((d, i) =>
        <Day key={d.n} day={d} open={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? -1 : i)} />
        )}
      </div>
    </section>);

}

function Included() {
  return (
    <section id="included">
      <div className="section-head">
        <div className="label-col">
          <div className="eyebrow"><span className="dot" />What is included</div>
        </div>
        <h2 style={{ textAlign: "center" }}>We sweat the logistics — so you don't.</h2>
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

function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="pricing-inner">
        <div className="section-head">
          <div className="label-col">
            <div className="eyebrow"><span className="dot" />Pricing</div>
          </div>
          <h2>Three ways to <em>travel</em>.</h2>
        </div>
        <div className="tiers">
          {TRIP.tiers.map((t) =>
          <div key={t.id} className={`tier ${t.featured ? 'featured' : ''}`}>
              {t.featured && <div className="tier-flag">Most chosen</div>}
              <div>
                <h3 className="tier-name">{t.name}</h3>
                <div className="tier-tag" style={{ margin: "0px" }}>{t.tag}</div>
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
          Prices exclude international flights. A 25% deposit secures your seat — fully refundable until 60 days out.
        </p>
      </div>
    </section>);

}

function Form() {
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

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      "form-name": "signup",
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      company: data.company,
      tier: data.tier,
      interests: data.interests.join(", "),
      notes: data.notes,
    }).toString(),
  })
  .then(() => setSubmitted(true))
  .catch(() => setSubmitted(true)); // still show success, check Netlify dashboard
};

  const interests = ['Hardware & manufacturing', 'AI & robotics', 'Mobility & EVs', 'Architecture', 'Photography', 'Slow days in Yangshuo'];

  return (
    <section id="apply">
      <div className="form-wrap">
        <div className="form-side">
          <div className="eyebrow" style={{ marginBottom: 24 }}><span className="dot" />Reserve a seat</div>
          <h3>Tell us who you are — we'll be in touch within <em>48 hours</em>.</h3>
          <p>The group is intentionally small. We read every application and send a short call if you have any questions.</p>
          <div className="form-meta">
            <div className="form-meta-row"><span className="l">Group size</span><span className="v">16 guests max</span></div>
            <div className="form-meta-row"><span className="l">Departure</span><span className="v">SEPT 18 — 24, 2026</span></div>
            <div className="form-meta-row"><span className="l">Seats left</span><span className="v">5 of 16</span></div>
            <div className="form-meta-row"><span className="l">Applications close</span><span className="v">Mar 1, 2026</span></div>
          </div>
        </div>

        {submitted ?
        <div className="form-success">
            <div className="check">✓</div>
            <h4>Thank you, {data.firstName}.</h4>
            <p>Your interest is recorded. Expect a note from our team within two business days, and a call invite shortly after.</p>
          </div> :

        <form className="form" onSubmit={submit} noValidate>
            <div className="form-row">
              <div className={`field ${errors.firstName ? 'error' : ''}`}>
                <label>First name</label>
                <input type="text" value={data.firstName} onChange={(e) => update('firstName', e.target.value)} />
                <span className="err-msg">Required</span>
              </div>
              <div className={`field ${errors.lastName ? 'error' : ''}`}>
                <label>Last name</label>
                <input type="text" value={data.lastName} onChange={(e) => update('lastName', e.target.value)} />
                <span className="err-msg">Required</span>
              </div>
            </div>
            <div className="form-row">
              <div className={`field ${errors.email ? 'error' : ''}`}>
                <label>Email</label>
                <input type="email" value={data.email} onChange={(e) => update('email', e.target.value)} />
                <span className="err-msg">Enter a valid email</span>
              </div>
              <div className="field">
                <label>Company or role</label>
                <input type="text" value={data.company} onChange={(e) => update('company', e.target.value)} placeholder="Optional" />
              </div>
            </div>

            <div className="field">
              <label>Preferred tier</label>
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
              <label>Most interested in (pick any)</label>
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
              <label>Anything we should know?</label>
              <textarea value={data.notes} onChange={(e) => update('notes', e.target.value)} placeholder="Dietary needs, travel companions, questions…" />
            </div>

            <button type="submit" className="submit">Submit interest →</button>
          </form>
        }
      </div>
    </section>);

}

function StickyCTA({ visible }) {
  return (
    <div className={`sticky-cta ${visible ? 'visible' : ''}`}>
      <span className="dot" />
      <span>10 OF 16 SEATS REMAIN · SEPT 18</span>
      <button onClick={() => scrollTo('apply')}>Reserve →</button>
    </div>);

}

function App() {
  const { scrolled, pastHero } = useScrolled();
  return (
    <>
      <Nav onHero={!pastHero} scrolled={scrolled} />
      <Hero />
      <Overview />
      <Itinerary />
      <Included />
      <Pricing />
      <Form />
      <footer>
        <div className="f-brand">Sinocircuit</div>
        <div>Private journeys for the operator class · Hong Kong / New York</div>
        <div>© 2026 BREATH JOURNEYS</div>
      </footer>
      <StickyCTA visible={pastHero} />
    </>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
