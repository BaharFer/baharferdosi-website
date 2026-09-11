import styles from './Ticker.module.css';

const items = [
  'LuxShop — Full-Stack',
  'Velora Shop — React',
  'Fitness — React',
  'SkyCast — Weather API',
  'WordPress — RTL Client Work',
];

function SparkleIcon() {
  return (
    <svg
      className={styles.sparkle}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M8 1.5L9.25 6.75L14.5 8L9.25 9.25L8 14.5L6.75 9.25L1.5 8L6.75 6.75L8 1.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Ticker() {
  const row = [...items, ...items];

  return (
    <div className={`${styles.ticker} mono`} aria-hidden="true">
      <div className={styles.inner}>
        {[0, 1].map((half) => (
          <div className={styles.half} key={half}>
            {row.map((item, i) => (
              <span key={`${half}-${i}`}>
                {item}
                <SparkleIcon />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}