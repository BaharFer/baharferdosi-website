import { useState } from 'react';
import styles from './Contact.module.css';
import ArrowUpRight from './icons/ArrowUpRight';
export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name,
          email,
          message,
          subject: `Portfolio inquiry from ${name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>
        <p className="mono" style={{ color: '#C9D8CF' }}>
          06 — Contact
        </p>

        <h2 className={styles.giant}>
          Let&apos;s build
          <br />
          something <em>real.</em>
        </h2>

        <div className={styles.grid}>
          <div>
            <p>
              Have a project in mind or just want to say hi? I&apos;m open to freelance, new
              projects and collaborations.
            </p>

            <div className={`${styles.lines} mono`}>
              <span>
                Email —{' '}
                <a href="mailto:b.ferdosi.1386@gmail.com">
                  b.ferdosi.1386@gmail.com
                </a>
              </span>

              <span>Location — Remote / Iran</span>

              <span>
              <a
  href="https://www.linkedin.com/in/bahar-ferdosi22"
  target="_blank"
  rel="noreferrer"
  className={styles.externalLink}
>
  LinkedIn
  <ArrowUpRight className={styles.linkIcon} />
</a>{' '}
·{' '}
<a
  href="https://github.com/BaharFer"
  target="_blank"
  rel="noreferrer"
  className={styles.externalLink}
>
  GitHub
  <ArrowUpRight className={styles.linkIcon} />
</a>
              </span>
            </div>
          </div>

          <form className={styles.form} onSubmit={onSubmit}>
            <label className="mono">
              Name
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your name"
              />
            </label>

            <label className="mono">
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
              />
            </label>

            <label className="mono">
              Message
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="How can I help you?"
              />
            </label>

         <button type="submit" disabled={status === 'sending'}>
  {status === 'sending' ? (
    'Sending...'
  ) : status === 'success' ? (
    'Message sent ✓'
  ) : (
    <>
      Send message
      <ArrowUpRight className={styles.buttonIcon} />
    </>
  )}
</button>

            {status === 'error' && (
              <p className={styles.error} role="alert">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>

        <footer className={`${styles.foot} mono`}>
          <span>BF® — © 2026 Bahar Ferdosi</span>
          <span>Editorial concept — paper / ink / moss · React + TS + Vite</span>
          <a href="#top">Back to top ↑</a>
        </footer>
      </div>
    </section>
  );
}
