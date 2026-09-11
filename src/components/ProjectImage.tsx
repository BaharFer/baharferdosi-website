import { useState } from 'react';
import styles from './ProjectImage.module.css';

interface Props {
  src: string;
  alt: string;
  fileName: string;
  hint: string;
  ratio?: 'card' | 'wide' | 'mid' | 'tall' | 'split';
}

/**
 * Uniform image slot for a REAL project screenshot.
 * Fixed aspect ratio + top-anchored crop keeps every card consistent.
 */
export default function ProjectImage({ src, alt, fileName, hint, ratio = 'card' }: Props) {
  const [missing, setMissing] = useState(false);

  return (
    <div className={`${styles.frame} ${styles[ratio]} ${missing ? styles.missing : ''}`}>
      {!missing && <img src={src} alt={alt} loading="lazy" onError={() => setMissing(true)} />}
      {missing && (
        <div className={`${styles.placeholder} mono`}>
          Drop your screenshot as <b>{fileName}</b>
          <br />
          Expected: {hint}
        </div>
      )}
    </div>
  );
}
