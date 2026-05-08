import { useState, useEffect, useCallback } from 'react';
import { testimonials } from '../../data/mockData';
import './Testimonials.css';

function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setActive(p => (p + 1) % testimonials.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4200);
    return () => clearInterval(id);
  }, [paused, next]);

  const goTo = i => setActive(i);
  const prev = () => setActive(p => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="section testimonials">
      <div className="testimonials__blob testimonials__blob--1" aria-hidden="true" />
      <div className="testimonials__blob testimonials__blob--2" aria-hidden="true" />

      <div className="container testimonials__inner">
        <div className="section-header">
          <div><span className="section-tag"><span className="section-tag-dot" />✦ آراء عملائنا</span></div>
          <h2 className="section-title">ماذا يقول عملاؤنا عنا؟</h2>
          <p className="section-subtitle">نفتخر بثقة عملائنا ونعمل يومياً على تجاوز توقعاتهم وتحقيق نتائج ملموسة لأعمالهم.</p>
        </div>

        <div
          className="testimonials__slider"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="testimonials__track">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className={`testimonials__card ${i === active ? 'testimonials__card--active' : ''}`}
                aria-hidden={i !== active}
              >
                <span className="testimonials__quote">"</span>
                <span className="testimonials__stars">★★★★★</span>
                <p className="testimonials__text">"{t.comment}"</p>
                <div className="testimonials__author">
                  <div className="testimonials__avatar" style={{ background: t.avatarColor }}>
                    {t.avatar}
                  </div>
                  <div>
                    <span className="testimonials__name">{t.name}</span>
                    <span className="testimonials__role">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials__nav">
            <button className="testimonials__arrow" onClick={prev} aria-label="السابق">→</button>
            <div className="testimonials__dots" role="tablist">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testimonials__dot ${i === active ? 'testimonials__dot--active' : ''}`}
                  onClick={() => goTo(i)}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`تقييم ${i + 1}`}
                />
              ))}
            </div>
            <button className="testimonials__arrow" onClick={next} aria-label="التالي">←</button>
          </div>
        </div>

        <div className="testimonials__trust">
          {[
            { value: '+200', label: 'عميل سعيد' },
            { value: '5 ⭐', label: 'متوسط التقييم' },
            { value: '3+',   label: 'سنوات خبرة' },
            { value: '98%',  label: 'نسبة التوصية' },
          ].map((item, i) => (
            <div key={i} className="trust-item">
              <span className="trust-item__value">{item.value}</span>
              <span className="trust-item__label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
