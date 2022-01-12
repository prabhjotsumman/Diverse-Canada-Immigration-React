import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import ListItem from '../components/list-item'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Diverse Canada Immigration</title>
        <meta
          name="description"
          content="Diverse Canada Immigration is the immigration consultant, Pardeep Kumar Bhatoa website and allows every person or student who want to come to Canada."
        />
        <meta property="og:title" content="Diverse Canada Immigration" />
        <meta
          property="og:description"
          content="Diverse Canada Immigration is the immigration consultant, Pardeep Kumar Bhatoa website and allows every person or student who want to come to Canada."
        />
      </Helmet>
      <Header rootClassName="rootClassName4"></Header>
      <div className={styles['Hero']}>
        <div className={styles['container01']}>
          <div className={styles['Card']}>
            <h1 className={styles['text']}>
              {' '}
              Regulated Canadian Immigration Consultant (RCIC)
            </h1>
            <span className={styles['text01']}>
              Our expert will guide you through the Canadian immigration
              process, including work and study visas, citizenship, family
              sponsorship and so much more
            </span>
            <div className={styles['container02']}>
              <div className={styles['container03']}>
                <Link to="/contact-us" className={styles['navlink']}>
                  <PrimaryPinkButton
                    button="contact us"
                    className={styles['component1']}
                  ></PrimaryPinkButton>
                </Link>
              </div>
              <Link
                to="/our-services"
                className={` ${styles['navlink1']} ${projectStyles['button']} ${projectStyles['buttonSmall']} `}
              >
                Our services
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1571055582845-67e98663656f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxjYW5hZGF8ZW58MHx8fHwxNjQwOTgzMTI2&amp;ixlib=rb-1.2.1&amp;h=1500"
        className={styles['image']}
      />
      <section className={styles['container04']}>
        <div className={styles['container05']}>
          <h1 className={styles['text02']}>
            <span className={styles['text03']}>
              Make your Canadian dream a reality
            </span>
          </h1>
          <span className={styles['text04']}>
            <span className={styles['text05']}>
              You are one step away from making your Canadian dream a reality.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span className={styles['text07']}>
              Just contact us and let&apos;s do this together!
            </span>
          </span>
        </div>
        <div className={styles['container06']}>
          <div className={styles['container07']}>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1596772160247-e66da3dcb644?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI2fHxkcmVhbXxlbnwwfHx8fDE2NDExMTI4OTA&amp;ixlib=rb-1.2.1&amp;w=700"
              className={styles['image1']}
            />
            <span className={` ${styles['text08']} ${projectStyles['small']} `}>
              <span className={styles['text09']}>
                âIt is in your moments of decision that your destiny is
                shaped.&quot;
              </span>
              <span className={styles['text10']}> - Tony Robbins</span>
            </span>
            <div className={styles['container08']}>
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExMHx8bWVldGluZ3xlbnwwfHx8fDE2NDExMTQwNzE&amp;ixlib=rb-1.2.1&amp;h=1200"
                className={styles['image2']}
              />
            </div>
          </div>
          <div className={styles['container09']}>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1565535941810-e9892acd7704?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fGNhbmFkaWFuJTIwcGFzc3BvcnR8ZW58MHx8fHwxNjQxMTEzMTI4&amp;ixlib=rb-1.2.1&amp;w=500"
              className={styles['image3']}
            />
            <div className={styles['container10']}>
              <h2
                className={` ${styles['text11']} ${projectStyles['headingTwo']} `}
              >
                <span className={styles['text12']}>Let&apos;s Connect!</span>
              </h2>
              <span className={styles['text13']}>
                <br></br>
                <span>
                  Our process is transparent and done in compliance with the
                  regulatory requirements of CICC. There is no hidden fee or
                  surprises.
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  We would be happy to assist you and we are just a call away.
                </span>
                <br></br>
                <span></span>
              </span>
              <p>
                <span></span>
              </p>
              <div className={styles['container11']}>
                <Link to="/contact-us" className={styles['navlink2']}>
                  <PrimaryPinkButton
                    button="Contact Us"
                    className={styles['component2']}
                  ></PrimaryPinkButton>
                </Link>
                <Link
                  to="/our-services"
                  className={` ${styles['navlink3']} ${projectStyles['button']} ${projectStyles['buttonSmall']} `}
                >
                  Our services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles['Contaier']}>
        <div className={styles['container12']}>
          <h2
            className={` ${styles['text22']} ${projectStyles['headingTwo']} `}
          >
            <span className={styles['text23']}>
              How we make your dream a reality ?
            </span>
          </h2>
        </div>
        <div className={styles['container13']}>
          <div className={styles['container14']}>
            <div className={styles['container15']}></div>
            <div className={styles['container16']}>
              <svg
                viewBox="0 0 987.4285714285713 1024"
                className={styles['icon']}
              >
                <path d="M438.857 508.571l312 312c-79.429 80.571-190.286 130.286-312 130.286-242.286 0-438.857-196.571-438.857-438.857s196.571-438.857 438.857-438.857v435.429zM545.714 512h441.714c0 121.714-49.714 232.571-130.286 312zM950.857 438.857h-438.857v-438.857c242.286 0 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <h1
                className={` ${styles['text24']} ${projectStyles['headingOne']} `}
              >
                Search and Discover!
              </h1>
              <span className={styles['text25']}>All the possibilities</span>
              <Link
                to="/our-services"
                className={` ${styles['navlink4']} ${projectStyles['button']} ${projectStyles['buttonSmall']} `}
              >
                Our services
              </Link>
            </div>
          </div>
          <div className={styles['container17']}>
            <ListItem
              title="1. Search"
              description="we will search for all the pathways that can be taken to make your dream a reality."
            ></ListItem>
            <ListItem
              title="2. Discover"
              description="We will shortlist all the pathways that applies particularly to you and choose the best possible way for you."
            ></ListItem>
            <ListItem
              title="3. Apply"
              description="We will provide innovative and sustainable strategies for you to make your immigration journey to Canada easy and enjoyable."
            ></ListItem>
            <Link
              to="/our-services"
              className={` ${styles['navlink5']} ${projectStyles['buttonSmall']} ${projectStyles['button']} `}
            >
              Our services
            </Link>
          </div>
        </div>
        <div className={styles['Divider']}></div>
        <div className={styles['container18']}>
          <div className={styles['container19']}>
            <h2
              className={` ${styles['text26']} ${projectStyles['headingTwo']} `}
            >
              <span className={styles['text27']}>
                Protect yourself fromÂ  immigration fraud
              </span>
            </h2>
            <span>
              <span>Find out if your representative is authorised.</span>
              <br></br>
              <span></span>
              <br></br>
              <span>
                Citizenship or immigration consultants must be a member of the
                College of Immigration and Citizenship Consultants.
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span>
                Click here to verify your immigration consultantâs status
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span></span>
              <br></br>
              <a
                href="https://www.college-ic.ca/protecting-the-public/find-an-immigration-consultant"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className={styles['text39']}>
                  https://www.college-ic.ca/protecting-the-public/find-an-immigration-consultant
                </span>
              </a>
              <span></span>
              <br></br>
              <span></span>
            </span>
            <div className={styles['container20']}>
              <Link to="/contact-us" className={styles['navlink6']}>
                <PrimaryPinkButton
                  button="Contact Us"
                  className={styles['component6']}
                ></PrimaryPinkButton>
              </Link>
              <Link
                to="/our-services"
                className={` ${styles['navlink7']} ${projectStyles['button']} ${projectStyles['buttonSmall']} `}
              >
                Our services
              </Link>
            </div>
          </div>
          <div className={styles['container21']}></div>
        </div>
      </section>
      <Footer rootClassName="rootClassName1"></Footer>
    </div>
  )
}

export default Home
