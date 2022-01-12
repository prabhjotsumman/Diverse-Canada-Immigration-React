import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import styles from './student-form.module.css'

const StudentForm = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Student Form - Diverse Canada Immigration</title>
        <meta
          name="description"
          content="Diverse Canada Immigration is the immigration consultant, Pardeep Kumar Bhatoa website and allows every person or student who want to come to Canada."
        />
        <meta
          property="og:title"
          content="Student Form - Diverse Canada Immigration"
        />
        <meta
          property="og:description"
          content="Diverse Canada Immigration is the immigration consultant, Pardeep Kumar Bhatoa website and allows every person or student who want to come to Canada."
        />
      </Helmet>
      <div className={styles['Profile']}>
        <div className={styles['container1']}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdnIS8CWelClnimNZJQgHDEVqW8zydYg9pUaO3h9nRg6O93Dw/viewform?embedded=true"
            className={styles['iframe']}
          ></iframe>
        </div>
        <Header rootClassName="rootClassName6"></Header>
      </div>
      <Footer rootClassName="rootClassName6"></Footer>
    </div>
  )
}

export default StudentForm
