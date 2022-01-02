import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import Footer from '../components/footer'
import styles from './contact-us.module.css'

const ContactUs = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Contact Us - Diverse Canada Immigration</title>
        <meta
          property="og:title"
          content="Contact Us - Diverse Canada Immigration"
        />
      </Helmet>
      <HeaderFull></HeaderFull>
      <div className={styles['Profile']}>
        <div className={styles['container1']}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfRsUMNwv8043I_QH-3cYSzJSTwQJHquatIqgHx4vI18EYuTA/viewform?embedded=true"
            className={styles['iframe']}
          ></iframe>
        </div>
      </div>
      <Footer rootClassName="rootClassName3"></Footer>
    </div>
  )
}

export default ContactUs
