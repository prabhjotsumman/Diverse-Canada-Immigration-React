import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './about-us.module.css'

const AboutUs = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>About Us - Diverse Canada Immigration</title>
        <meta
          property="og:title"
          content="About Us - Diverse Canada Immigration"
        />
      </Helmet>
      <HeaderFull></HeaderFull>
      <div className={styles['Profile']}>
        <div className={styles['container1']}>
          <div className={styles['container2']}>
            <h4 className={styles['text']}>
              <span>About Us</span>
            </h4>
          </div>
          <div className={styles['container3']}>
            <h4 className={styles['text02']}>
              <span>Diverse Canada Immigration Services Inc.</span>
              <br></br>
              <span></span>
            </h4>
          </div>
          <span className={` ${styles['text05']} ${projectStyles['medium']} `}>
            <span>
              Diverse Canada Immigration Services Inc is an immigration
              consultancy firm based in Alberta, Canada with focus on Canadian
              Immigration related services including but not limited to Canadian
              Visitor Visa, Study Permit/Student Visa, LMIAs, Family
              Sponsorships, PR applications etc. Diverse Canada Immigration
              Services Inc. provides immigration services in all the immigration
              programs.
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
              We strive to achieve excellence in what we do and take pride in
              our work. We provide innovative and sustainable strategies to all
              our clients to make their immigration journey to Canada easy and
              enjoyable. Our focus is our clients and we simplify the approach
              to make our clients understand the immigration requirements at
              each stage of their immigration process. Immigration to Canada is
              a life changing journey and let us make this journey smooth for
              you. We are committed to our clients to provide world class
              services.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>â</span>
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
            <span></span>
          </span>
        </div>
        <img
          alt="image"
          src="/playground_assets/maple-200w.png"
          className={styles['image']}
        />
      </div>
      <div className={styles['Profile1']}>
        <div className={styles['container4']}></div>
        <div className={styles['container5']}>
          <div className={styles['container6']}>
            <h4 className={styles['text21']}>Pradeep Kumar Bhatoa</h4>
          </div>
          <span className={styles['text22']}>
            <span>
              Owner and Founder of Diverse Canada Immigration Services Inc. is a
              Professional Engineer and a Regulated Canadian Immigration
              Consultant (RCIC) R709025.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span></span>
            <span className={styles['text25']}>
              He is a member in good standing with The College of Immigration
              and Citizenship Consultants (CICC).
            </span>
            <span></span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              He also worked for a non-profit organisation for a couple of years
              to provide public safety services. He has extensive experience
              working with the public and understanding their needs and anxiety
              when it comes to working with The Act and The Regulations. His
              journey to Canada started back in 2010 as an International student
              and has gone through immigration process by himself to become a
              Canadian Citizen. He is passionate about immigration and now, he
              is working as a Regulated Canadian Immigration Consultant (RCIC)
              with the aim to help people achieve their immigration goals. He
              completed his Immigration Consultant Diploma with Honours from
              Ashton College, BC.â
            </span>
            <br></br>
            <span></span>
            <span></span>
          </span>
        </div>
      </div>
      <Footer rootClassName="rootClassName2"></Footer>
    </div>
  )
}

export default AboutUs
