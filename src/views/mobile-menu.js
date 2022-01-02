import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import PrimaryPinkButton from '../components/primary-pink-button'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './mobile-menu.module.css'

const MobileMenu = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Mobile Menu - Diverse Canada Immigration</title>
        <meta
          property="og:title"
          content="Mobile Menu - Diverse Canada Immigration"
        />
      </Helmet>
      <div className={styles['container1']}>
        <div className={styles['container2']}>
          <img
            alt="image"
            src="/playground_assets/maple-200w.png"
            className={styles['image']}
          />
          <Link
            to="/"
            className={` ${styles['navlink']} ${projectStyles['large']} `}
          >
            Diverse Canada Immigration
          </Link>
        </div>
        <div className={styles['Menu']}>
          <Link
            to="/"
            className={` ${styles['navlink01']} ${projectStyles['large']} `}
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className={` ${styles['navlink02']} ${projectStyles['large']} `}
          >
            About Us
          </Link>
          <Link
            to="/our-services"
            className={` ${styles['navlink03']} ${projectStyles['large']} `}
          >
            Our Services
          </Link>
          <Link
            to="/our-services"
            className={` ${styles['navlink04']} ${projectStyles['large']} `}
          >
            Form for Students
          </Link>
          <Link
            to="/free-assessment"
            className={` ${styles['navlink05']} ${projectStyles['large']} `}
          >
            Free Assessment
          </Link>
        </div>
        <div className={styles['container3']}>
          <div className={styles['container4']}>
            <Link to="/contact-us" className={styles['navlink06']}>
              <PrimaryPinkButton
                button="Contact Us"
                className={styles['component']}
              ></PrimaryPinkButton>
            </Link>
          </div>
          <div data-type="BurgerMenu" className={styles['BurgerMenu']}>
            <Link to="/">
              <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles['container5']}>
        <Link to="/" className={styles['navlink08']}>
          Home
        </Link>
        <Link to="/about-us" className={styles['navlink09']}>
          About Us
        </Link>
        <Link to="/our-services" className={styles['navlink10']}>
          Our Services
        </Link>
        <Link to="/contact-us" className={styles['navlink11']}>
          Form for Students
        </Link>
        <Link to="/free-assessment" className={styles['navlink12']}>
          Free Assessment
        </Link>
        <Link to="/contact-us" className={styles['navlink13']}>
          Contact Us
        </Link>
      </div>
      <Footer rootClassName="rootClassName5"></Footer>
    </div>
  )
}

export default MobileMenu
