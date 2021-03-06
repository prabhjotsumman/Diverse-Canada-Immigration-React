import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import styles from './free-assessment.module.css'

const FreeAssessment = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Free Assessment - Diverse Canada Immigration</title>
        <meta
          name="description"
          content="Diverse Canada Immigration is the immigration consultant, Pardeep Kumar Bhatoa website and allows every person or student who want to come to Canada."
        />
        <meta
          property="og:title"
          content="Free Assessment - Diverse Canada Immigration"
        />
        <meta
          property="og:description"
          content="Diverse Canada Immigration is the immigration consultant, Pardeep Kumar Bhatoa website and allows every person or student who want to come to Canada."
        />
      </Helmet>
      <div className={styles['Profile']}>
        <div className={styles['container1']}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSc-jUUHM69FG6dpRH-FwWLSIt3A_Jfd_jamwQm_cY6p846Ozw/viewform?embedded=true"
            className={styles['iframe']}
          ></iframe>
        </div>
        <Header rootClassName="rootClassName2"></Header>
      </div>
      <Footer rootClassName="rootClassName4"></Footer>
    </div>
  )
}

export default FreeAssessment
