import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import styles from './contact-us.module.css'

const ContactUs = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Contact Us - Diverse Canada Immigration</title>
        <meta
          name="description"
          content="Diverse Canada Immigration is the immigration consultant, Pardeep Kumar Bhatoa website and allows every person or student who want to come to Canada."
        />
        <meta
          property="og:title"
          content="Contact Us - Diverse Canada Immigration"
        />
        <meta
          property="og:description"
          content="Diverse Canada Immigration is the immigration consultant, Pardeep Kumar Bhatoa website and allows every person or student who want to come to Canada."
        />
      </Helmet>
      <div className={styles['Profile']}>
        <div className={styles['container1']}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfOXKM_sqnVQ6S7znFnIQnhIodcC9psO9006tmaPOSReuRDmg/viewform?embedded=true"
            className={styles['iframe']}
          ></iframe>
        </div>
        <Header rootClassName="rootClassName3"></Header>
      </div>
      <Footer rootClassName="rootClassName3"></Footer>
    </div>
  )
}

export default ContactUs
