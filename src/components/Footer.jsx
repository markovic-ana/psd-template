import React from 'react'
import styles from './Footer.module.css'
import facebook from '../svg/facebook.svg'
import twitter from '../svg/twitter.svg'
import email from '../svg/email.svg'
import top from '../svg/top.svg'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerStart}>
        <div className={styles.logoBackground}>
          <img src={facebook} alt="facebook" className={styles.footerImages} />
        </div>
        <div className={styles.logoBackground}>
          <img src={twitter} alt="twitter" className={styles.footerImages} />
        </div>
        <div className={styles.logoBackground}>
          <img src={email} alt="email" className={styles.footerImages} />
        </div>
      </div>
      <div className={styles.links}>
        <a href="#" className={styles.link}>
          HOME
        </a>
        <a href="#" className={styles.link}>
          ABOUT
        </a>
        <a href="#" className={styles.link}>
          OUR WORK
        </a>
        <a href="#" className={styles.link}>
          CONTACT
        </a>
      </div>
      <div className={styles.logoBackground}>
        <img src={top} alt="top" className={styles.top} />
      </div>
    </div>
  )
}

export default Footer
