import { useReveal } from '../hooks/useReveal';
import styles from './Manifesto.module.css';

export default function Manifesto() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className={styles.wrap}>
      <p className="mono" style={{ color: 'var(--moss)', margin: '0 0 1rem' }}>
        02 — Position
      </p>
     <p className={styles.text}>
  Not a template developer. I work across <em>two worlds</em>: polished{' '}
  <em>Persian RTL websites</em> for real clients — and clean, motion-driven{' '}
  <em>React apps</em> for the modern web.
</p>
    </section>
  );
}
