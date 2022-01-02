import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import Footer from '../components/footer'
import styles from './free-assessment.module.css'

const FreeAssessment = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Free Assessment - Diverse Canada Immigration</title>
        <meta
          property="og:title"
          content="Free Assessment - Diverse Canada Immigration"
        />
      </Helmet>
      <HeaderFull></HeaderFull>
      <div className={styles['Profile']}>
        <div className={styles['container1']}>
          <div className={styles['container2']}></div>
        </div>
        <div className={styles['container3']}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeAq2v1iZ-yw44BLxqsbItps0W8cVap3bmhVGWBpLYjWxz-MA/viewform?embedded=true"
            className={styles['iframe']}
          ></iframe>
        </div>
      </div>
      <Footer rootClassName="rootClassName4"></Footer>
    </div>
  )
}

export default FreeAssessment
