import { useState } from 'react'
import React from 'react'
import styles from './Header.module.css'
import search from '../svg/search.svg'
import burger from '../svg/burger.svg'
import home from '../svg/home.svg'
import about from '../svg/about.svg'
import work from '../svg/our-work.svg'
import email from '../svg/email.svg'
import logo from '../svg/logo.png'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  return (
    <div>
      <div className={styles.mobileNav}>
        <img
          src={burger}
          alt="burger menu"
          className={styles.burger}
          onClick={() => setShowMenu(!showMenu)}
        />
        <img
          src={search}
          alt="search"
          className={styles.search}
          onClick={() => setShowSearch(!showSearch)}
        />
        {showSearch && (
          <div className={styles.searchBarDiv}>
            <input type="text" className={styles.searchInput} />
          </div>
        )}
      </div>

      <div className={styles.burgerDiv}>
        {showMenu && (
          <div className={styles.burgerMenu}>
            <a href="1" className={styles.burgerHome}>
              HOME
            </a>
            <a href="2" className={styles.burgerAbout}>
              ABOUT US
            </a>
            <a href="3" className={styles.burgerWork}>
              OUR WORK
            </a>
            <a href="4" className={styles.burgerContact}>
              CONTACT
            </a>
          </div>
        )}
      </div>
      <div className={styles.tabletNav}>
        <div className={styles.navTabletLinks}>
          <a href="1">
            <img src={home} alt="home" className={styles.homeTablet} />
          </a>
          <a href="2">
            <img src={about} alt="about" className={styles.aboutTablet} />
          </a>
          <a href="3">
            <img src={work} alt="work" className={styles.workTablet} />
          </a>
          <a href="4">
            <img src={email} alt="email" className={styles.emailTablet} />
          </a>
        </div>
        <img src={search} alt="search" className={styles.search} />
      </div>
      <div className={styles.compNav}>
        <div className={styles.compNavLinks}>
          <a href="#1" className={styles.homeLink}>
            HOME{' '}
          </a>
          <a href="#2" className={styles.aboutLink}>
            {' '}
            / ABOUT US{' '}
          </a>
          <a href="#3" className={styles.workLink}>
            {' '}
            / OUR WORK{' '}
          </a>
          <a href="#4" className={styles.contactLink}>
            {' '}
            / CONTACT
          </a>
        </div>
        <img src={search} alt="search" className={styles.search} />
      </div>
      <div className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <h1 className={styles.title}>
          LOREM IPSUM <br></br>DOLOR SIT
        </h1>
      </div>
    </div>
  )
}

export default Header
