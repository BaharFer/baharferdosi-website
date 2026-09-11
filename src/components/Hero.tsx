import { useState } from 'react';
import portraitImg from '../../assets/bahar (1).webp';
import styles from './Hero.module.css';
import ArrowDown from './icons/ArrowDown';
import ArrowUpRight from './icons/ArrowUpRight';

export default function Hero() {
  const [portraitMissing, setPortraitMissing] = useState(false);

  return (
    <section className={styles.hero}>
      <div className={`${styles.index} mono`}>
        <span>N°01 — Personal Portfolio</span>
        <span>Front-End Development × Web Design</span>
      </div>

      <h1 className={styles.title}>
        <span className={styles.line}>
          <em>Bahar</em>
        </span>

        <span className={`${styles.line} ${styles.right}`}>
          Ferdosi<i>.</i>
        </span>
      </h1>

      <div className={styles.grid}>
        <div>
          <div className={styles.portrait}>
            {!portraitMissing && (
              <img
                src={portraitImg}
                alt="Portrait of Bahar Ferdosi"
                onError={() => setPortraitMissing(true)}
              />
            )}

            {portraitMissing && (
              <div className={styles.fallback}>BF</div>
            )}
          </div>

          <div className={`${styles.caption} mono`}>
            FIG.01 — THE DEVELOPER
            <br />
            Remote
          </div>
        </div>

        <div>
          <p className={styles.lede}>
            I build{' '}
            <strong>modern, responsive digital experiences</strong>{' '}
            with a focus on clean interfaces, thoughtful interactions
            and maintainable frontend code.
          </p>

          <div className={`${styles.facts} mono`}>
            <div>
              <label>Role</label>
              <span>Front-End Developer / Web Designer</span>
            </div>

            <div>
              <label>Stack</label>
              <span>React · TypeScript · Vite · Next.js</span>
            </div>

            <div>
              <label>Status</label>
              <span className={styles.avail}>
                <i /> Available for freelance
              </span>
            </div>
          </div>

          <div className={`${styles.links} mono`}>
            <a href="#work">
              <ArrowDown className={styles.icon} />
              Selected work
            </a>

            <a href="mailto:b.ferdosi.1386@gmail.com">
              b.ferdosi.1386@gmail.com
              <ArrowUpRight className={styles.icon} />
            </a>

            <a
              href="https://www.linkedin.com/in/bahar-ferdosi22"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <ArrowUpRight className={styles.icon} />
            </a>

            <a
              href="https://github.com/BaharFer"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <ArrowUpRight className={styles.icon} />
            </a>
          </div>
        </div>

        <div className={`${styles.side} mono`} aria-hidden="true">
          PORTFOLIO — 2024 → 2026
          <br />
          <br />
          SCROLL
          <br />
          <ArrowDown className={styles.sideIcon} />
        </div>
      </div>
    </section>
  );
}
