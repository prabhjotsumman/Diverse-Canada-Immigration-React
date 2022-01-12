import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import styles from './our-services.module.css'

const OurServices = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Our Services - Diverse Canada Immigration</title>
        <meta
          name="description"
          content="Diverse Canada Immigration is the immigration consultant, Pardeep Kumar Bhatoa website and allows every person or student who want to come to Canada."
        />
        <meta
          property="og:title"
          content="Our Services - Diverse Canada Immigration"
        />
        <meta
          property="og:description"
          content="Diverse Canada Immigration is the immigration consultant, Pardeep Kumar Bhatoa website and allows every person or student who want to come to Canada."
        />
      </Helmet>
      <Header rootClassName="rootClassName"></Header>
      <div className={styles['container1']}>
        <div className={styles['container2']}>
          <div className={styles['container3']}>
            <div className={styles['container4']}></div>
            <div className={styles['container5']}>
              <h4 className={styles['text']}>
                <span>Our Services</span>
              </h4>
              <span className={styles['text02']}>
                <span>
                  Contact us for your one on one assessment with Pardeep Kumar
                  Bhatoa, RCIC and explore your options to migrate to Canada.
                </span>
                <br></br>
                <span></span>
              </span>
              <span className={styles['text05']}>
                <span className={styles['text06']}>Disclaimer</span>
                <span>
                  : Immigration programs are subjected to change at any time by
                  IRCC. For up to date information visit
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://www.canada.ca"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className={styles['text08']}>www.c</span>
                  <span className={styles['text09']}>anada.ca</span>
                </a>
              </span>
            </div>
          </div>
          <div className={styles['Card']}>
            <h1 className={styles['text10']}>
              For Visitors to Canada - Temporary residency programs
            </h1>
            <span className={styles['text11']}>
              <span>â Visitor Visa</span>
              <br></br>
              <span>â Foreign business visitors</span>
              <br></br>
              <span>â Parent and Grandparent Super Visa</span>
              <br></br>
              <span>â Study Permit/Student Visa</span>
              <br></br>
              <span>â Admission in designated learning institution (DLI).</span>
              <br></br>
              <span>â Study permit extension</span>
              <br></br>
              <span>
                â Open work permit for the spouse or common-law partner of a
                student
              </span>
              <br></br>
              <span>â PGWP</span>
              <br></br>
              <span>â Work permit</span>
              <br></br>
              <span>â Work permit extension</span>
              <br></br>
              <span>
                â Open work permit for the spouse or common-law partner of a
                skilled worker
              </span>
              <br></br>
              <span>â Bridging open work permit (BOWP)</span>
              <br></br>
              <span>â Labour Market Impact Assessment (LMIA)</span>
              <br></br>
              <span>â</span>
              <span>â Immigration Appeal Division (IAD) Hearings</span>
              <br></br>
              <span>â Inadmissibility Hearings</span>
              <span></span>
            </span>
          </div>
          <div className={styles['Card1']}>
            <h1 className={styles['text30']}>
              Immigrate to Canada â Permanent Residency Programs
            </h1>
            <span className={styles['text31']}>
              <span>â Express Entry</span>
              <br></br>
              <span>â Family sponsorship</span>
              <br></br>
              <span>â Provincial Nominee Programs (PNP)</span>
              <br></br>
              <span>â Atlantic Immigration Pilot</span>
              <br></br>
              <span>â Caregivers</span>
              <br></br>
              <span>â Start-up Visa</span>
              <br></br>
              <span>â Self-employed</span>
              <br></br>
              <span>â Rural and Northern Immigration Pilot</span>
              <br></br>
              <span>â Agri-Food Pilot</span>
              <br></br>
              <span>â Health care workers permanent resident pathway</span>
              <br></br>
              <span>â Temporary resident to permanent resident pathway.</span>
              <span></span>
              <br></br>
              <span>
                â Permanent residence pathways for Hong Kong residents
              </span>
              <br></br>
              <span></span>
              <span>â Immigration Appeal Division (IAD) Hearings</span>
              <br></br>
              <span>â Inadmissibility Hearings</span>
              <br></br>
              <span></span>
            </span>
          </div>
          <div className={styles['Card2']}>
            <h1 className={styles['text49']}>For Permanent Resident</h1>
            <span className={styles['text50']}>
              <span>â PR card Application</span>
              <br></br>
              <span>
                â
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>Permanent Resident Travel Document (PRTD)</span>
              <span></span>
              <br></br>
              <span>â Citizenship Application</span>
              <br></br>
              <span>â</span>
              <span>â Immigration Appeal Division (IAD) Hearings</span>
              <br></br>
              <span>â Inadmissibility Hearings</span>
              <span></span>
              <br></br>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <Footer rootClassName="rootClassName"></Footer>
        </div>
      </div>
    </div>
  )
}

export default OurServices
