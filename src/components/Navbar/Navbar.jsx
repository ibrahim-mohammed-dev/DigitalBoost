import { useState, useEffect, useCallback } from 'react';
import { navLinks } from '../../data/mockData';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <button className="navbar__logo" onClick={() => scrollTo('home')} aria-label="الرئيسية">
          <span className="navbar__logo-mark">⚡</span>
          DigitalBoost
        </button>

        <nav className="navbar__links">
          {navLinks.map(l => (
            <button key={l.id} className="navbar__link" onClick={() => scrollTo(l.id)}>
              {l.label}
            </button>
          ))}
        </nav>

        <button className="btn btn-primary btn-md navbar__cta" onClick={() => scrollTo('contact')}>
          ابدأ الآن <span className="btn-arrow">←</span>
        </button>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(p => !p)}
          aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          aria-expanded={menuOpen}
        >
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
        </button>
      </div>

      <div className={`navbar__mobile-menu ${menuOpen ? 'navbar__mobile-menu--open' : ''}`}>
        {navLinks.map(l => (
          <button key={l.id} className="navbar__mobile-link" onClick={() => scrollTo(l.id)}>
            {l.label}
          </button>
        ))}
        <button className="btn btn-primary btn-lg navbar__mobile-cta" onClick={() => scrollTo('contact')}>
          ابدأ الآن مجاناً <span className="btn-arrow">←</span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
