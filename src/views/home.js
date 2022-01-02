import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import OutlineBlackButton from '../components/outline-black-button'
import ListItem from '../components/list-item'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Diverse Canada Immigration</title>
        <meta property="og:title" content="Diverse Canada Immigration" />
      </Helmet>
      <Header></Header>
      <div className={styles['Hero']}>
        <div className={styles['container01']}>
          <div className={styles['Card']}>
            <h1 className={styles['text']}>
              Professional Canadian Immigration Consultant
            </h1>
            <span className={` ${styles['text01']} ${projectStyles['lead']} `}>
              Our Expert will guide you through the Canadian immigration
              process, including work and study visas, citizenship, sponsorship
              and so much more
            </span>
            <div className={styles['container02']}>
              <div className={styles['container03']}>
                <Link to="/contact-us" className={styles['navlink']}>
                  <PrimaryPinkButton
                    button="contact us"
                    className={styles['component01']}
                  ></PrimaryPinkButton>
                </Link>
              </div>
              <Link to="/our-services" className={styles['navlink1']}>
                <OutlineGrayButton
                  button="Our Services"
                  className={styles['component02']}
                ></OutlineGrayButton>
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
                src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExMHx8bWVldGluZ3xlbnwwfHx8fDE2NDExMTQwNzE&amp;ixlib=rb-1.2.1&amp;w=600"
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
              <h3
                className={` ${projectStyles['headingTwo']} ${styles['text11']} `}
              >
                <span className={styles['text12']}>Let&apos;s connect !</span>
              </h3>
              <p>
                <span></span>
              </p>
              <span>
                <span>
                  We are here to help you on every step till you come to Canada.
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
                  Let&apos;s remove all the roadblocks on your path and look at
                  it like a new opportunity to come one step near to your goal.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  It&apos;s all about taking the first step till you make it to
                  Canada.
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span>Let connect and we can discuss more.</span>
              </span>
              <div className={styles['container11']}>
                <Link to="/contact-us" className={styles['navlink2']}>
                  <PrimaryPinkButton
                    button="Contact Us"
                    className={styles['component03']}
                  ></PrimaryPinkButton>
                </Link>
                <Link to="/our-services" className={styles['navlink3']}>
                  <OutlineGrayButton
                    button="Our Services"
                    className={styles['component04']}
                  ></OutlineGrayButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles['Contaier']}>
        <div className={styles['container12']}>
          <h2
            className={` ${styles['text26']} ${projectStyles['headingTwo']} `}
          >
            <span className={styles['text27']}>
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
                className={` ${styles['text28']} ${projectStyles['headingOne']} `}
              >
                Search and Discover!
              </h1>
              <span className={styles['text29']}>All the possibilities</span>
              <Link to="/our-services" className={styles['navlink4']}>
                <OutlineBlackButton
                  button="Our Services"
                  className={styles['component05']}
                ></OutlineBlackButton>
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
              description="We will shortlist all the pathways that applies to you in person and choose the best possible way for you."
            ></ListItem>
            <ListItem
              title="3. Apply"
              description="We will guide you on every step and things that need to be done to make your journey to  Canada as smooth as possible."
            ></ListItem>
            <Link to="/our-services" className={styles['navlink5']}>
              <OutlineGrayButton
                button="Our Services"
                rootClassName="rootClassName"
                className={styles['component09']}
              ></OutlineGrayButton>
            </Link>
          </div>
        </div>
        <div className={styles['Divider']}></div>
        <div className={styles['container18']}>
          <div className={styles['container19']}>
            <ListItem
              title="Can't see what you are looking for ?"
              description="Please contact us if you have something in particular "
              rootClassName="rootClassName"
            ></ListItem>
          </div>
          <div className={styles['container20']}>
            <div className={styles['container21']}></div>
            <div className={styles['container22']}>
              <svg viewBox="0 0 1152 1024" className={styles['icon2']}>
                <path d="M1088 901.166c0 45.5 26.028 84.908 64 104.184v15.938c-10.626 1.454-21.472 2.224-32.5 2.224-68.008 0-129.348-28.528-172.722-74.264-26.222 6.982-54.002 10.752-82.778 10.752-159.058 0-288-114.616-288-256s128.942-256 288-256c159.058 0 288 114.616 288 256 0 55.348-19.764 106.592-53.356 148.466-6.824 14.824-10.644 31.312-10.644 48.7zM512 0c278.458 0 504.992 180.614 511.836 405.52-49.182-21.92-103.586-33.52-159.836-33.52-95.56 0-185.816 33.446-254.138 94.178-70.846 62.972-109.862 147.434-109.862 237.822 0 44.672 9.544 87.888 27.736 127.788-5.228 0.126-10.468 0.212-15.736 0.212-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z"></path>
              </svg>
              <h1
                className={` ${styles['text30']} ${projectStyles['headingOne']} `}
              >
                Talk and Meet!
              </h1>
              <span className={styles['text31']}>and get one step closer</span>
              <Link to="/contact-us" className={styles['navlink6']}>
                <PrimaryPinkButton
                  button="Contact Us"
                  className={styles['component11']}
                ></PrimaryPinkButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer rootClassName="rootClassName1"></Footer>
    </div>
  )
}

export default Home
