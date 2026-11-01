import { FC, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

type Theme = 'dark' | 'light';

const themeStorageKey = 'sf-girls-calculator-theme';

const getInitialTheme = (): Theme => {
  const savedTheme = window.localStorage.getItem(themeStorageKey);

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(themeStorageKey, theme);
    document
      .querySelector<HTMLMetaElement>('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'light' ? '#f7f1f8' : '#0c0815');
  }, [theme]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand-lockup" to="/" aria-label="SF Girls Calculator home">
          <span className="brand-copy">
            <strong>SF GIRLS</strong>
            <small>DAMAGE CALCULATOR</small>
          </span>
        </Link>

        <button
          className={`mobile-nav-toggle${isOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>

        <nav
          className={`primary-nav${isOpen ? ' is-open' : ''}`}
          id="primary-navigation"
          aria-label="Primary navigation"
          onClick={() => setIsOpen(false)}
        >
          <NavLink to="/" end className="primary-nav__link">
            <span>Calculator</span>
            <small>01</small>
          </NavLink>
          <NavLink to="/teamfinder" className="primary-nav__link">
            <span>Teamfinder</span>
            <small>02</small>
          </NavLink>
        </nav>

        <div className="site-header__actions">
          <span className="asset-status asset-status--online" role="status" aria-live="polite">
            <span className="status-dot" />
            CALCULATOR READY
          </span>
          <button
            className="header-text-link theme-toggle"
            type="button"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            aria-pressed={theme === 'light'}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
          >
            <svg className="ui-icon header-text-link__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              {theme === 'dark' ? (
                <>
                  <circle cx="12" cy="12" r="3.5" />
                  <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
                </>
              ) : (
                <path d="M20.2 15.1A8.3 8.3 0 0 1 8.9 3.8 8.4 8.4 0 1 0 20.2 15.1Z" />
              )}
            </svg>
          </button>
          <a
            className="header-text-link"
            href="https://github.com/sf-girls-archive/sf-girls-calculator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="ui-icon header-text-link__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="m8 8-4 4 4 4" />
              <path d="m16 8 4 4-4 4" />
              <path d="m14 5-4 14" />
            </svg>
            <span>GitHub</span>
          </a>
          <a
            className="header-text-link"
            href="https://www.buymeacoffee.com/ox7f"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="ui-icon header-text-link__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M5 8h12v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z" />
              <path d="M17 10h1a2.5 2.5 0 0 1 0 5h-1" />
              <path d="M9 5c0-1 .8-1.5.8-2.5M13 5c0-1 .8-1.5.8-2.5" />
            </svg>
            <span>Support</span>
          </a>
        </div>
      </div>
    </header>
  );
};
