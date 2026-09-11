import { capabilities } from '../data/projects';
import { useReveal } from '../hooks/useReveal';
import styles from './About.module.css';

export default function About() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="about" className={styles.about}>
      <p className="mono" style={{ color: 'var(--moss)' }}>
        04 — About / Capabilities
      </p>
      <div className={styles.grid}>
        <div>
         <h2>
         Building modern websites with clean design <em>&amp; code.</em>
        </h2>

          <p>
  I&apos;m Bahar — a Front-End Developer and Web Designer focused on
  building clean, responsive and thoughtful digital experiences. I work
  across modern React applications, e-commerce projects and real-world
  client websites, while continuously learning Next.js and expanding into
  full-stack development.
          </p>
          <div className={`${styles.stats} mono`}>
            <div>
              <b>1+</b>
              <span>Years professional experience</span>
            </div>
            <div>
              <b>7</b>
              <span>Selected real projects</span>
            </div>
  <div>
  <b>3+</b>
  <span>Frontend &amp; web technologies</span>
</div>
          </div>
        </div>
        <div className={`${styles.table} mono`}>
          {capabilities.map((c) => (
            <div className={styles.row} key={c.skill}>
              <span>{c.skill}</span>
              <span>{c.note}</span>
              <span>{c.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
