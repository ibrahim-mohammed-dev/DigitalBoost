import './Hero.css';

const stats = [
  { value: '+200', label: 'عميل راضٍ' },
  { value: '5×',   label: 'متوسط عائد الاستثمار' },
  { value: '98%',  label: 'نسبة رضا العملاء' },
];

const barHeights = [38, 60, 44, 78, 55, 90, 68];

function Hero() {
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero">
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="hero__glow"   aria-hidden="true" />
      <div className="hero__glow-2" aria-hidden="true" />

      <div className="container hero__inner">
        {/* ── Left: Text ── */}
        <div className="hero__content">
          <div className="hero__eyebrow">
            <span className="section-tag">
              <span className="section-tag-dot" />
              وكالة التسويق الرقمي #1
            </span>
          </div>

          <h1 className="hero__headline">
            خلّي عملك يكبر مع{' '}
            <span className="hero__headline-highlight">تسويق رقمي</span>{' '}
            احترافي
          </h1>

          <p className="hero__desc">
            نُقدم حلولاً تسويقية مُتكاملة تُساعدك على بناء حضور رقمي قوي،
            جذب عملاء جُدد، وتحويل المتابعين إلى زبائن حقيقيين.
          </p>

          <div className="hero__actions">
            <button className="btn btn-primary btn-xl" onClick={scrollToContact}>
              احصل على استشارة مجانية
              <span className="btn-arrow">←</span>
            </button>
            <button
              className="btn btn-outline btn-xl"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              شاهد أعمالنا
            </button>
          </div>

          <div className="hero__stats">
            {stats.map((s, i) => (
              <div key={i} className="hero__stat">
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Dashboard Card ── */}
        <div className="hero__illustration">
          <div style={{ position: 'relative', padding: '22px 22px 22px 0' }}>
            <div className="hero__dash-card">
              <div className="hero__dash-topbar">
                <span className="hero__dash-dot" style={{ background: '#ff5f57' }} />
                <span className="hero__dash-dot" style={{ background: '#ffbd2e' }} />
                <span className="hero__dash-dot" style={{ background: '#28ca41' }} />
                <span className="hero__dash-label">لوحة تحليلات الأداء</span>
              </div>
              <div className="hero__dash-body">
                <div className="hero__metric-row">
                  {[
                    { val: '87K', lbl: 'وصول', badge: '▲ 24%' },
                    { val: '3.8×', lbl: 'عائد الإعلانات', badge: '▲ 12%' },
                    { val: '4.9', lbl: 'التقييم', badge: '▲ 0.3' },
                  ].map((m, i) => (
                    <div key={i} className="hero__metric">
                      <span className="hero__metric-val">{m.val}</span>
                      <span className="hero__metric-lbl">{m.lbl}</span>
                      <span className="hero__metric-badge">{m.badge}</span>
                    </div>
                  ))}
                </div>

                <div className="hero__bar-chart">
                  {barHeights.map((h, i) => (
                    <div
                      key={i}
                      className={`hero__bar ${i % 2 !== 0 ? 'hero__bar--hi' : ''}`}
                      style={{ '--bar-h': `${h}%`, '--d': `${i * 0.08}s` }}
                    />
                  ))}
                </div>

                <div className="hero__dash-tags">
                  <div className="hero__dash-tag">
                    <div className="hero__tag-icon hero__tag-icon--blue">📱</div>
                    <div>
                      <span className="hero__tag-val">+124%</span>
                      <span className="hero__tag-lbl">نمو المتابعين</span>
                    </div>
                  </div>
                  <div className="hero__dash-tag">
                    <div className="hero__tag-icon hero__tag-icon--green">🎯</div>
                    <div>
                      <span className="hero__tag-val">65%</span>
                      <span className="hero__tag-lbl">معدل التحويل</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero__fc hero__fc--1">
              <div className="hero__fc-icon hero__fc-icon--green">📈</div>
              <div>
                <span className="hero__fc-value">+87%</span>
                <span className="hero__fc-label">مبيعات هذا الشهر</span>
              </div>
            </div>
            <div className="hero__fc hero__fc--2">
              <div className="hero__fc-icon hero__fc-icon--amber">⭐</div>
              <div>
                <span className="hero__fc-value">4.9/5</span>
                <span className="hero__fc-label">تقييم العملاء</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
