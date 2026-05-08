# ⚡ DigitalBoost — Landing Page

A production-ready, conversion-focused single-page landing page for a digital marketing agency, built with **React** and **plain CSS** (no UI libraries).

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) v16 or newer
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone / unzip the project
cd digitalboost

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

The app will open at **http://localhost:3000** in your browser.

### Build for production

```bash
npm run build
```

This creates an optimized `build/` folder ready to deploy.

---

## 📂 Project Structure

```
digitalboost/
├── public/
│   └── index.html              ← HTML shell (RTL, Google Fonts loaded here)
│
├── src/
│   ├── App.jsx                 ← Root: assembles all sections + WhatsApp button
│   ├── App.css                 ← Global CSS variables, reset, shared utilities
│   ├── index.jsx               ← React DOM entry point
│   │
│   ├── data/
│   │   └── mockData.js         ← ALL static content (services, portfolio, testimonials…)
│   │
│   └── components/
│       ├── Navbar/
│       │   ├── Navbar.jsx      ← Sticky nav, smooth scroll links, hamburger menu
│       │   └── Navbar.css
│       │
│       ├── Hero/
│       │   ├── Hero.jsx        ← Headline, CTA buttons, animated dashboard illustration
│       │   └── Hero.css
│       │
│       ├── Services/
│       │   ├── Services.jsx    ← 3 service cards with scroll-triggered animation
│       │   └── Services.css
│       │
│       ├── Portfolio/
│       │   ├── Portfolio.jsx   ← 4-item grid with hover overlay ("عرض التفاصيل")
│       │   └── Portfolio.css
│       │
│       ├── Testimonials/
│       │   ├── Testimonials.jsx ← Auto-playing carousel + trust bar
│       │   └── Testimonials.css
│       │
│       ├── ContactForm/
│       │   ├── ContactForm.jsx  ← Full form validation, success state, loading spinner
│       │   └── ContactForm.css
│       │
│       └── Footer/
│           ├── Footer.jsx       ← 4-column footer + pre-footer CTA stripe
│           └── Footer.css
│
└── package.json
```

---

## 🧩 Component Overview

| Component       | Purpose |
|----------------|---------|
| `Navbar`        | Fixed top nav with logo, links, CTA, and responsive hamburger |
| `Hero`          | First impression — headline, stats, animated mock dashboard |
| `Services`      | 3 service cards with scroll-triggered fade-in |
| `Portfolio`     | 4 project cards with hover overlay effect |
| `Testimonials`  | Auto-playing testimonial carousel with dot navigation |
| `ContactForm`   | Lead capture form with real-time Arabic validation |
| `Footer`        | 4-column footer with links, contact info, social icons |

---

## ✨ Key Features

- **Zero UI libraries** — 100% plain CSS with CSS custom properties
- **Fully responsive** — Mobile (375px), Tablet (768px), Desktop (1200px)
- **RTL Arabic layout** — `dir="rtl"` with Cairo font
- **Smooth scrolling** — All CTAs scroll to `#contact`
- **Scroll animations** — Cards fade in using `IntersectionObserver`
- **Form validation** — Name, phone, email, service (all rules in Arabic)
- **Floating WhatsApp** — Fixed button with pulse animation
- **CSS animations** — Bar chart, floating cards, testimonial carousel

---

## 🎨 Design Tokens (CSS Variables)

Defined in `App.css` — easy to customise:

| Variable              | Value     |
|-----------------------|-----------|
| `--color-primary`     | `#2563eb` |
| `--color-primary-dark`| `#1d4ed8` |
| `--color-accent`      | `#f59e0b` |
| `--font-primary`      | Cairo, Poppins |

---

## 📝 Customisation Tips

1. **Change content** → Edit `src/data/mockData.js`
2. **Change colours** → Edit CSS variables at the top of `src/App.css`
3. **Add a section** → Create a new folder in `components/`, add JSX + CSS, import in `App.jsx`
4. **Connect the form** → Replace the `setTimeout` in `ContactForm.jsx` with a real API call (e.g. Formspree, EmailJS)
5. **WhatsApp number** → Update the `href` in `App.jsx`: `https://wa.me/YOUR_PHONE_NUMBER`

---

## 📄 License

MIT — free for personal and commercial use.
