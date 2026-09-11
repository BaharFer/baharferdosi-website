import { useState } from 'react';
import ArrowUpRight from './icons/ArrowUpRight';
import styles from './Topbar.module.css';

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
];

function MenuIcon({ open }: { open: boolean }) {
  return open ? (
    <svg
      className={styles.menuIcon}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 3L13 13M13 3L3 13"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  ) : (
    <svg
      className={styles.menuIcon}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 4H14M2 8H14M2 12H14"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function Topbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.bar}>
      <div className={styles.inner}>
        <a
          className={styles.brand}
          href="#top"
          aria-label="Bahar Ferdosi — home"
        >
          BF<span>®</span>
        </a>

        <nav className={`${styles.nav} mono`} aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className={styles.right}>
          <a href="#contact" className={`${styles.cta} mono`}>
            Contact
            <ArrowUpRight className={styles.arrowIcon} />
          </a>

          <button
            className={`${styles.toggle} mono`}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? 'Close' : 'Menu'}
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {open && (
        <nav className={`${styles.mobile} mono`} aria-label="Mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className={styles.mobileCta}
          >
            Contact
            <ArrowUpRight className={styles.arrowIcon} />
          </a>
        </nav>
      )}
    </header>
  );
}
