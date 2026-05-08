import { useState } from 'react';
import { serviceOptions } from '../../data/mockData';
import './ContactForm.css';

const INIT = { name: '', phone: '', email: '', service: '', message: '' };

const rules = {
  name:    v => !v.trim() ? 'الاسم مطلوب' : v.trim().length < 3 ? 'الاسم يجب أن يكون 3 أحرف على الأقل' : '',
  phone:   v => !v.trim() ? 'رقم الهاتف مطلوب' : !/^\d{10,15}$/.test(v.trim()) ? 'أدخل رقم هاتف صحيح (10-15 رقم)' : '',
  email:   v => !v.trim() ? 'البريد الإلكتروني مطلوب' : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? 'أدخل بريداً إلكترونياً صحيحاً' : '',
  service: v => !v ? 'يرجى اختيار الخدمة المطلوبة' : '',
  message: v => v.trim() && v.trim().length < 10 ? 'الرسالة يجب أن تكون 10 أحرف على الأقل' : '',
};

function validate(fields) {
  return Object.entries(rules).reduce((acc, [k, fn]) => {
    const msg = fn(fields[k]);
    if (msg) acc[k] = msg;
    return acc;
  }, {});
}

function ContactForm() {
  const [fields,    setFields]    = useState(INIT);
  const [errors,    setErrors]    = useState({});
  const [touched,   setTouched]   = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    const next = { ...fields, [name]: value };
    setFields(next);
    if (touched[name]) {
      const errs = validate(next);
      setErrors(p => ({ ...p, [name]: errs[name] || '' }));
    }
  };

  const handleBlur = e => {
    const { name } = e.target;
    setTouched(p => ({ ...p, [name]: true }));
    const errs = validate(fields);
    setErrors(p => ({ ...p, [name]: errs[name] || '' }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const allTouched = Object.keys(INIT).reduce((a, k) => ({ ...a, [k]: true }), {});
    setTouched(allTouched);
    const errs = validate(fields);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFields(INIT);
      setErrors({});
      setTouched({});
    }, 1400);
  };

  const panelItems = [
    { icon: '⚡', text: 'استشارة مجانية خلال 24 ساعة' },
    { icon: '📊', text: 'خطة تسويقية مُخصصة لعملك' },
    { icon: '🎯', text: 'استهداف دقيق للجمهور المناسب' },
    { icon: '📈', text: 'تقارير أداء شهرية شفافة' },
    { icon: '💬', text: 'دعم مستمر على مدار الأسبوع' },
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header">
          <div><span className="section-tag"><span className="section-tag-dot" />✦ تواصل معنا</span></div>
          <h2 className="section-title">ابدأ رحلتك معنا اليوم</h2>
          <p className="section-subtitle">أرسل لنا تفاصيل مشروعك وسنتواصل معك خلال 24 ساعة لتقديم استشارة مجانية كاملة.</p>
        </div>

        <div className="contact__grid">
          {/* ── Info Panel ── */}
          <div className="contact__panel">
            <div className="contact__panel-glow" aria-hidden="true" />
            <h3 className="contact__panel-title">لماذا تختار<br />DigitalBoost؟</h3>
            <ul className="contact__panel-list">
              {panelItems.map((item, i) => (
                <li key={i} className="contact__panel-item">
                  <div className="contact__panel-icon">{item.icon}</div>
                  {item.text}
                </li>
              ))}
            </ul>
            <div className="contact__panel-divider" />
            <p className="contact__panel-social-label">تابعنا على</p>
            <div className="contact__panel-socials">
              {['📘', '📷', '🐦', '💼'].map((icon, i) => (
                <div key={i} className="contact__panel-social" role="button" aria-label="رابط تواصل اجتماعي">
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* ── Form Box ── */}
          <div className="contact__form-box">
            {submitted ? (
              <div className="contact__success">
                <div className="contact__success-icon">✅</div>
                <h3 className="contact__success-title">تم إرسال طلبك بنجاح!</h3>
                <p className="contact__success-text">
                  شكراً لتواصلك معنا. سيتواصل معك فريقنا خلال 24 ساعة
                  لمناقشة تفاصيل مشروعك وتقديم الاستشارة المجانية.
                </p>
                <button className="btn btn-primary btn-lg" onClick={() => setSubmitted(false)}>
                  إرسال طلب آخر
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                {/* Name + Phone */}
                <div className="contact__row">
                  {[
                    { id: 'name',  label: 'الاسم الكامل',       type: 'text',  placeholder: 'مثال: أحمد محمد', required: true },
                    { id: 'phone', label: 'رقم الهاتف',          type: 'tel',   placeholder: '05xxxxxxxx',      required: true, inputMode: 'numeric' },
                  ].map(f => (
                    <div key={f.id} className="contact__field">
                      <label className="contact__label" htmlFor={f.id}>
                        {f.label} {f.required && <span className="contact__required">*</span>}
                      </label>
                      <input
                        id={f.id}
                        name={f.id}
                        type={f.type}
                        className={`contact__input ${errors[f.id] && touched[f.id] ? 'contact__input--error' : ''}`}
                        placeholder={f.placeholder}
                        value={fields[f.id]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        inputMode={f.inputMode}
                        aria-invalid={!!(errors[f.id] && touched[f.id])}
                      />
                      {errors[f.id] && touched[f.id] && (
                        <span className="contact__error" role="alert">⚠ {errors[f.id]}</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Email */}
                <div className="contact__field">
                  <label className="contact__label" htmlFor="email">
                    البريد الإلكتروني <span className="contact__required">*</span>
                  </label>
                  <input
                    id="email" name="email" type="email"
                    className={`contact__input ${errors.email && touched.email ? 'contact__input--error' : ''}`}
                    placeholder="example@email.com"
                    value={fields.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!(errors.email && touched.email)}
                  />
                  {errors.email && touched.email && (
                    <span className="contact__error" role="alert">⚠ {errors.email}</span>
                  )}
                </div>

                {/* Service */}
                <div className="contact__field">
                  <label className="contact__label" htmlFor="service">
                    الخدمة المطلوبة <span className="contact__required">*</span>
                  </label>
                  <select
                    id="service" name="service"
                    className={`contact__select ${errors.service && touched.service ? 'contact__input--error' : ''}`}
                    value={fields.service}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!(errors.service && touched.service)}
                  >
                    {serviceOptions.map(opt => (
                      <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.service && touched.service && (
                    <span className="contact__error" role="alert">⚠ {errors.service}</span>
                  )}
                </div>

                {/* Message */}
                <div className="contact__field">
                  <label className="contact__label" htmlFor="message">
                    رسالتك <span className="contact__optional">(اختياري)</span>
                  </label>
                  <textarea
                    id="message" name="message"
                    className={`contact__textarea ${errors.message && touched.message ? 'contact__input--error' : ''}`}
                    placeholder="أخبرنا عن عملك وأهدافك التسويقية..."
                    rows={4}
                    value={fields.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!(errors.message && touched.message)}
                  />
                  {errors.message && touched.message && (
                    <span className="contact__error" role="alert">⚠ {errors.message}</span>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn btn-primary contact__submit"
                  disabled={loading}
                >
                  {loading ? (
                    <><span className="contact__spinner" aria-hidden="true" />جارٍ الإرسال...</>
                  ) : (
                    <>احصل على استشارتك المجانية الآن <span className="btn-arrow">←</span></>
                  )}
                </button>

                <p className="contact__privacy">🔒 بياناتك محمية وآمنة تماماً</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
