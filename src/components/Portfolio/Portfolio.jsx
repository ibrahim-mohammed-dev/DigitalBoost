import { useEffect, useRef } from 'react';
import { portfolio } from '../../data/mockData';
import './Portfolio.css';

function Portfolio() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); }),
      { threshold: 0.12 }
    );
    ref.current?.querySelectorAll('.port-item').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="portfolio" className="section portfolio" ref={ref}>
      <div className="container">
        <div className="section-header">
          <div><span className="section-tag"><span className="section-tag-dot" />✦ أعمالنا</span></div>
          <h2 className="section-title">نتائج حقيقية لعملاء حقيقيين</h2>
          <p className="section-subtitle">اكتشف كيف ساعدنا عشرات الشركات على تحقيق أهدافها التسويقية وتنمية أعمالها رقمياً.</p>
        </div>

        <div className="port-grid">
          {portfolio.map((item, i) => (
            <div
              key={item.id}
              className="port-item"
              style={{ animationDelay: `${i * 0.1}s` }}
              role="article"
            >
              <div
                className="port-img"
                style={{ background: `linear-gradient(135deg, ${item.colorFrom}, ${item.colorTo})` }}
              >
                <div className="port-grid-lines" aria-hidden="true" />
                <span className="port-emoji" aria-hidden="true">{item.emoji}</span>
                <span className="port-pill">{item.category}</span>
                <div className="port-overlay" aria-label={`مشروع ${item.title}`}>
                  <div className="port-ov-icon">🔍</div>
                  <span className="port-ov-text">عرض التفاصيل</span>
                </div>
              </div>
              <div className="port-info">
                <span className="port-name">{item.title}</span>
                <span className="port-tag">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="port-footer">
          <p className="port-footer-text">هذه مجرد عينة من أعمالنا — لدينا المزيد!</p>
          <button
            className="btn btn-outline btn-md"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            اطلب عرض أعمال كامل
          </button>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
