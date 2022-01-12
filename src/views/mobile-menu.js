import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import styles from './mobile-menu.module.css'

const MobileMenu = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Mobile Menu - Diverse Canada Immigration</title>
        <meta
          name="description"
          content="Diverse Canada Immigration is the immigration consultant, Pardeep Kumar Bhatoa website and allows every person or student who want to come to Canada."
        />
        <meta
          property="og:title"
          content="Mobile Menu - Diverse Canada Immigration"
        />
        <meta
          property="og:description"
          content="Diverse Canada Immigration is the immigration consultant, Pardeep Kumar Bhatoa website and allows every person or student who want to come to Canada."
        />
      </Helmet>
      <Header rootClassName="rootClassName5"></Header>
      <div className={styles['container1']}>
        <Link to="/" className={styles['navlink']}>
          Home
        </Link>
        <Link to="/about-us" className={styles['navlink1']}>
          About Us
        </Link>
        <Link to="/our-services" className={styles['navlink2']}>
          Our Services
        </Link>
        <Link to="/student-form" className={styles['navlink3']}>
          Form for Students
        </Link>
        <Link to="/free-assessment" className={styles['navlink4']}>
          Free Assessment
        </Link>
        <Link to="/contact-us" className={styles['navlink5']}>
          Contact Us
        </Link>
      </div>
      <Footer rootClassName="rootClassName5"></Footer>
    </div>
  )
}

export default MobileMenu
