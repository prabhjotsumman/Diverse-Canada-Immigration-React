import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import PrimaryPinkButton from '../components/primary-pink-button'
import Header from '../components/header'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './study-permit.module.css'

const StudyPermit = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Study Permit - Diverse Canada Immigration</title>
        <meta
          name="description"
          content="Diverse Canada Immigration is the immigration consultant, Pardeep Kumar Bhatoa website and allows every person or student who want to come to Canada."
        />
        <meta
          property="og:title"
          content="Study Permit - Diverse Canada Immigration"
        />
        <meta
          property="og:description"
          content="Diverse Canada Immigration is the immigration consultant, Pardeep Kumar Bhatoa website and allows every person or student who want to come to Canada."
        />
      </Helmet>
      <div className={styles['Profile']}>
        <div className={styles['container1']}>
          <div className={styles['container2']}>
            <h4 className={styles['text']}>
              <span>Study Permit / Student Visa</span>
            </h4>
          </div>
          <span className={` ${styles['text02']} ${projectStyles['medium']} `}>
            <span></span>
            <span>
              International students willing to study at designated learning
              institutions (DLIs) in Canada must apply for a study permit if the
              duration of their study is longer than six months. Study permits
              are issued by Immigration, Refugees, and Citizenship Canada
              (IRCC). If you are not from a visa exempt country, then you need a
              visitor visa to enter Canada. If your application for a study
              permit is approved, IRCC will issue a visitor visa with a study
              permit. Visitor visa is required to enter Canada. Processing time
              of study permits varies from country to country.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              Before applying for a study permit/student visa, a student must
              have been accepted at a designated learning institution (DLI) in
              Canada. Letter of acceptance is an admission letter issued by the
              DLI confirming a student&apos;s enrolment in their program.
              Colleges and Universities have their own admission process and
              requirements.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              We can also help international students to get enrolled at
              designated learning institutions (DLIs) of their choice. A student
              selects the program of their interest which enables them to
              progress smoothly into their careers.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              We would be happy to assist you and we are just a call away.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
            <span></span>
          </span>
          <Link to="/contact-us" className={styles['navlink']}>
            <PrimaryPinkButton
              button="Contact Us"
              className={styles['component']}
            ></PrimaryPinkButton>
          </Link>
        </div>
        <Header rootClassName="rootClassName7"></Header>
      </div>
      <div className={styles['Profile1']}>
        <div className={styles['container3']}>
          <div className={styles['container4']}>
            <h4 className={styles['text19']}>
              <span>Post-Graduation Work Permit Program (PGWPP)</span>
              <br></br>
              <span></span>
            </h4>
          </div>
          <span className={` ${styles['text22']} ${projectStyles['medium']} `}>
            <span>
              International students who have graduated from eligible Canadian
              designated learning institutions (DLIs) are eligible for the
              Post-Graduation Work Permit Program (PGWPP). PGWPP is an open work
              permit, which students can utilize to gain valuable Canadian work
              experience. They can work full time, part time or be
              self-employed.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              We would be happy to assist you and we are just a call away.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
            <span></span>
          </span>
          <Link to="/contact-us" className={styles['navlink1']}>
            <PrimaryPinkButton
              button="Contact Us"
              className={styles['component2']}
            ></PrimaryPinkButton>
          </Link>
        </div>
        <Header rootClassName="rootClassName8"></Header>
      </div>
      <Footer rootClassName="rootClassName7"></Footer>
    </div>
  )
}

export default StudyPermit
