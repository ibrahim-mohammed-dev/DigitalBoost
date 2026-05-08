import './Footer.css';

const quickLinks = [
  { id: 'home',      label: 'الرئيسية' },
  { id: 'services',  label: 'خدماتنا' },
  { id: 'portfolio', label: 'أعمالنا' },
  { id: 'contact',   label: 'تواصل معنا' },
];

const serviceLinks = [
  'إدارة السوشيال ميديا',
  'الإعلانات المدفوعة',
  'تصميم المحتوى',
  'استراتيجية التسويق',
];

const contactInfo = [
  { icon: '📍', text: 'الرياض، المملكة العربية السعودية' },
  { icon: '📞', text: '+966 50 000 0000' },
  { icon: '✉️', text: 'info@digitalboost.sa' },
];

const socials = ['📘', '📷', '🐦', '💼', '▶️'];

function Footer() {
  const sc = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Pre-footer CTA */}
      <div className="footer__pre">
        <div className="container footer__pre-inner">
          <div>
            <p className="footer__pre-title">جاهز لتنمية عملك؟</p>
            <p className="footer__pre-sub">احصل على استشارة مجانية من خبراء التسويق الرقمي</p>
          </div>
          <button className="btn btn-ghost btn-lg" onClick={() => sc('contact')}>
            ابدأ الآن مجاناً <span className="btn-arrow">←</span>
          </button>
        </div>
      </div>

      {/* Main body */}
      <div className="footer__body">
        <div className="container footer__grid">
          {/* Brand */}
          <div>
            <div className="footer__logo">
              <div className="footer__logo-mark">⚡</div>
              DigitalBoost
            </div>
            <p className="footer__tagline">
              نُحوّل أعمالك إلى قوة رقمية لا تُقهر. شريكك الموثوق في رحلة النمو الرقمي.
            </p>
            <div className="footer__socials">
              {socials.map((s, i) => (
                <a key={i} href="#!" className="footer__social" aria-label={`تواصل اجتماعي ${i + 1}`}>{s}</a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="footer__col-title">روابط سريعة</p>
            <div className="footer__links">
              {quickLinks.map(l => (
                <button key={l.id} className="footer__link" onClick={() => sc(l.id)}>
                  ← {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="footer__col-title">خدماتنا</p>
            <div className="footer__links">
              {serviceLinks.map(s => (
                <button key={s} className="footer__link" onClick={() => sc('contact')}>
                  ← {s}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="footer__col-title">تواصل معنا</p>
            <div className="footer__contact-list">
              {contactInfo.map((item, i) => (
                <div key={i} className="footer__contact-item">
                  <span className="footer__contact-icon">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <p className="footer__copy">© {year} DigitalBoost. جميع الحقوق محفوظة.</p>
          <div className="footer__legal">
            <a href="#!">سياسة الخصوصية</a>
            <a href="#!">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
