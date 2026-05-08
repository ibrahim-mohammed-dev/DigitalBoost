// mockData.js — All static content for DigitalBoost

export const services = [
  { id: 1, icon: '📱', title: 'إدارة وسائل التواصل الاجتماعي', description: 'نُدير حساباتك على جميع المنصات بمحتوى إبداعي ومتسق يجذب جمهورك المستهدف ويُعزز حضورك الرقمي.' },
  { id: 2, icon: '📊', title: 'الإعلانات المدفوعة', description: 'نُصمم حملات إعلانية مستهدفة على Google وMeta لتحقيق أعلى عائد على الاستثمار وتوليد عملاء جدد.' },
  { id: 3, icon: '🎨', title: 'تصميم المحتوى', description: 'نُنتج محتوى بصريًا جذابًا من صور وفيديوهات وجرافيك يعكس هوية علامتك التجارية ويُميزك عن المنافسين.' },
];

export const portfolio = [
  { id: 1, title: 'حملة مطعم الأصالة',          category: 'إعلانات مدفوعة', colorFrom: '#1e40af', colorTo: '#3b82f6', emoji: '🍽️' },
  { id: 2, title: 'هوية متجر ستايل',              category: 'تصميم محتوى',    colorFrom: '#065f46', colorTo: '#10b981', emoji: '👗' },
  { id: 3, title: 'تواصل اجتماعي – تك فيوتشر',  category: 'سوشيال ميديا',   colorFrom: '#4c1d95', colorTo: '#8b5cf6', emoji: '💻' },
  { id: 4, title: 'نمو متجر بيوتي لاين',          category: 'إعلانات مدفوعة', colorFrom: '#9f1239', colorTo: '#f43f5e', emoji: '💄' },
];

export const testimonials = [
  { id: 1, name: 'أحمد محمد', role: 'صاحب مطعم',          comment: 'خدمة ممتازة ونتائج رائعة! ارتفع عدد زوار مطعمي بشكل ملحوظ خلال شهر واحد فقط من التعاون مع DigitalBoost.', rating: 5, avatar: 'أ', avatarColor: '#2563eb' },
  { id: 2, name: 'سارة علي',  role: 'مديرة متجر إلكتروني', comment: 'فريق محترف جدًا والتعامل سهل ومريح. يفهمون احتياجاتي ويُقدمون حلولًا إبداعية تُحقق النتائج المطلوبة.',   rating: 5, avatar: 'س', avatarColor: '#059669' },
  { id: 3, name: 'محمد حسن', role: 'رائد أعمال',           comment: 'زاد عدد العملاء بشكل ملحوظ بعد الاستعانة بـ DigitalBoost. أنصح كل صاحب عمل بالتواصل معهم.',              rating: 5, avatar: 'م', avatarColor: '#7c3aed' },
];

export const navLinks = [
  { id: 'home',      label: 'الرئيسية' },
  { id: 'services',  label: 'خدماتنا' },
  { id: 'portfolio', label: 'أعمالنا' },
  { id: 'contact',   label: 'تواصل معنا' },
];

export const serviceOptions = [
  { value: '',        label: 'اختر الخدمة المطلوبة' },
  { value: 'social',  label: 'إدارة وسائل التواصل الاجتماعي' },
  { value: 'ads',     label: 'الإعلانات المدفوعة' },
  { value: 'content', label: 'تصميم المحتوى' },
  { value: 'other',   label: 'خدمة أخرى' },
];
