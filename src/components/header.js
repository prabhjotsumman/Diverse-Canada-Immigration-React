import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import PrimaryPinkButton from './primary-pink-button'
import projectStyles from '../style.module.css'
import styles from './header.module.css'

const Header = (props) => {
  return (
    <div
      data-role="Header"
      className={` ${styles['Header']} ${styles[props.rootClassName]} `}
    >
      <div className={styles['container']}>
        <Link to="/" className={styles['navlink']}>
          <div className={styles['container1']}></div>
        </Link>
        <nav className={styles['Nav']}>
          <div className={styles['container2']}>
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
                to="/study-permit"
                className={` ${styles['navlink04']} ${projectStyles['large']} `}
              >
                Study Permit
              </Link>
              <Link
                to="/student-form"
                className={` ${styles['navlink05']} ${projectStyles['large']} `}
              >
                Student Form
              </Link>
              <Link
                to="/free-assessment"
                className={` ${styles['navlink06']} ${projectStyles['large']} `}
              >
                Free Assessment
              </Link>
            </div>
            <div className={styles['container3']}>
              <div className={styles['container4']}>
                <Link to="/contact-us" className={styles['navlink07']}>
                  <PrimaryPinkButton
                    button="Contact Us"
                    className={styles['component']}
                  ></PrimaryPinkButton>
                </Link>
              </div>
              <div data-type="BurgerMenu" className={styles['BurgerMenu']}>
                <Link to="/mobile-menu">
                  <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                    <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div data-type="MobileMenu" className={styles['MobileMenu']}>
        <div className={styles['Top']}>
          <Link
            to="/"
            className={` ${styles['navlink09']} ${projectStyles['large']} `}
          >
            Soft UI Design System
          </Link>
          <div data-type="CloseMobileMenu" className={styles['CloseMenu']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon2']}>
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </div>
        </div>
        <div className={styles['Mid']}>
          <div className={styles['Menu1']}>
            <Link
              to="/"
              className={` ${styles['navlink10']} ${projectStyles['large']} `}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className={` ${styles['navlink11']} ${projectStyles['large']} `}
            >
              Profile
            </Link>
            <Link
              to="/coming-soon"
              className={` ${styles['navlink12']} ${projectStyles['large']} `}
            >
              Coming Soon
            </Link>
          </div>
        </div>
        <div className={styles['Bot']}>
          <PrimaryPinkButton button="buy now"></PrimaryPinkButton>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {
  rootClassName: '',
}

Header.propTypes = {
  rootClassName: PropTypes.string,
}

export default Header
