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
          property="og:title"
          content="Our Services - Diverse Canada Immigration"
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
            </div>
          </div>
          <div className={styles['Card']}>
            <h1 className={styles['text02']}>
              Immigrate to Canada â Permanent Residency Programs
            </h1>
            <span className={styles['text03']}>
              <span>1. Visitor Visa</span>
              <br></br>
              <span>2. Express Entry</span>
              <br></br>
              <span>3. Family sponsorship</span>
              <br></br>
              <span>4. Provincial Nominee Programs (PNP)</span>
              <br></br>
              <span>5. Atlantic Immigration Pilot</span>
              <br></br>
              <span>6. Caregivers</span>
              <br></br>
              <span>7. Start-up Visa</span>
              <br></br>
              <span>8. Self-employed</span>
              <br></br>
              <span>9. Rural and Northern Immigration Pilot</span>
              <br></br>
              <span>10. Agri-Food Pilot</span>
              <br></br>
              <span>11. Health care workers permanent resident pathway</span>
              <br></br>
              <span>12. Temporary resident to permanent resident pathway.</span>
              <br></br>
              <span>13. PR Card Application</span>
              <br></br>
              <span>14. Citizenship Application</span>
              <br></br>
              <span>
                15. Permanent residence pathways for Hong Kong residents
              </span>
              <br></br>
              <span>16. Immigration Appeal Division (IAD) Hearings</span>
              <br></br>
              <span>17. Inadmissibility Hearings</span>
              <br></br>
              <span></span>
            </span>
            <span className={styles['text22']}>
              <span>
                Contact us for your one on one assessment with Pardeep Kumar
                Bhatoa, RCIC and explore your options to migrate to Canada.
              </span>
              <br></br>
              <span></span>
            </span>
            <span className={styles['text25']}>
              <span className={styles['text26']}>Disclaimer</span>
              <span>
                : Immigration programs are subjected to change at any time by
                IRCC. For up to date information visit www.Canada.ca
              </span>
            </span>
          </div>
          <div className={styles['Card1']}>
            <h1 className={styles['text28']}>
              For Visitors to Canada - Temporary residency programs
            </h1>
            <span className={styles['text29']}>
              <span>1. Visitor Visa</span>
              <br></br>
              <span>2. Foreign business visitors</span>
              <br></br>
              <span>3. Parent and Grandparent Super Visa</span>
              <br></br>
              <span>â4. Study Permit/Student Visa</span>
              <br></br>
              <span>
                5. Admission in designated learning institution (DLI).
              </span>
              <br></br>
              <span>6. Study permit extension</span>
              <br></br>
              <span>
                7. Open work permit for the spouse or common-law partner of a
                student
              </span>
              <br></br>
              <span>8. PGWP</span>
              <br></br>
              <span>â9. Work permit</span>
              <br></br>
              <span>10. Work permit extension</span>
              <br></br>
              <span>
                11. Open work permit for the spouse or common-law partner of a
                skilled worker
              </span>
              <br></br>
              <span>12. Bridging open work permit (BOWP)</span>
              <br></br>
              <span>13. Labour Market Impact Assessment (LMIA)</span>
            </span>
            <span className={styles['text43']}>
              <span>
                Contact us for your one on one assessment with Pardeep Kumar
                Bhatoa, RCIC and explore your options to migrate to Canada.
              </span>
              <br></br>
              <span></span>
            </span>
            <span className={styles['text46']}>
              <span className={styles['text47']}>Disclaimer</span>
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
                <span className={styles['text49']}>www.Canada.ca</span>
              </a>
            </span>
          </div>
          <Footer rootClassName="rootClassName"></Footer>
        </div>
      </div>
    </div>
  )
}

export default OurServices
