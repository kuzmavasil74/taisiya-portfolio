import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-content']}>
        <div className={styles['social-media']}>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            Facebook
          </a>
        </div>
        <div className={styles['contact-info']}>
          <p>
            Phone: <a href="tel:123456789">123 456 789</a>
          </p>
          <p>
            Email:{' '}
            <a href="mailto:taisiyastyle@example.com">
              taisiyastyle@example.com
            </a>
          </p>
          <p>
            Address:
            <a
              href="https://maps.app.goo.gl/VfztQVPuDGhHL2456"
              target="_blank"
              rel="noreferrer"
              className={styles['map-link']}
            >
              Petržílkova 2583/15, 158 00 Praha 13, Чехія
            </a>
          </p>
        </div>
      </div>
      <p className={styles.copyright}>
        &copy; 2024 TaisiyaStyle. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
