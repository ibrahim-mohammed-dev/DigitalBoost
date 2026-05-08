import { useEffect, useRef } from 'react';
import { services } from '../../data/mockData';
import './Services.css';

const features = {
  1: ['محتوى يومي إبداعي', 'إدارة التعليقات والرسائل', 'تقارير أداء شهرية'],
  2: ['حملات Google & Meta', 'استهداف دقيق للجمهور', 'تحسين مستمر للأداء'],
  3: ['جرافيك احترافي', 'فيديوهات قصيرة جذابة', 'هوية بصرية متكاملة'],
};

function Services() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); }),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll('.svc-card').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const toContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="services" className="section services" ref={ref}>
      <div className="container">
        <div className="section-header">
          <div><span className="section-tag"><span className="section-tag-dot" />✦ خدماتنا</span></div>
          <h2 className="section-title">كل ما تحتاجه لنمو عملك رقمياً</h2>
          <p className="section-subtitle">نُقدم حزمة متكاملة من الخدمات الرقمية المصممة خصيصاً لمساعدة عملك على التوسع والنمو في البيئة الرقمية.</p>
        </div>

        <div className="svc-grid">
          {services.map((svc, i) => (
            <div key={svc.id} className="svc-card" style={{ animationDelay: `${i * 0.12}s` }}>
              <div className="svc-icon">{svc.icon}</div>
              <h3 className="svc-title">{svc.title}</h3>
              <p className="svc-desc">{svc.description}</p>
              <div className="svc-features">
                {features[svc.id].map((f, j) => (
                  <div key={j} className="svc-feat">
                    <span className="svc-check">✓</span>
                    {f}
                  </div>
                ))}
              </div>
              <button className="svc-link" onClick={toContact}>اطلب الخدمة الآن ←</button>
              <span className="svc-number" aria-hidden="true">0{svc.id}</span>
            </div>
          ))}
        </div>

        <div className="svc-banner">
          <div>
            <h3>هل تحتاج إلى حزمة خدمات مُخصصة؟</h3>
            <p>نُصمم لك خطة تسويقية متكاملة تناسب ميزانيتك وأهدافك التجارية</p>
          </div>
          <button className="svc-banner-btn" onClick={toContact}>تحدث معنا الآن ←</button>
        </div>
      </div>
    </section>
  );
}

export default Services;
