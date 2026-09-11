import { services } from '../data/projects';
import { useReveal } from '../hooks/useReveal';
import styles from './Services.module.css';

export default function Services() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="services" className={styles.wrap}>
      <p className="mono" style={{ color: 'var(--moss)' }}>
        05 — What I offer
      </p>
      {services.map((s) => (
        <div className={styles.row} key={s.id}>
          <span className="mono">{s.id}</span>
          <h3>{s.title}</h3>
          <p>{s.body}</p>
        </div>
      ))}
    </section>
  );
}
