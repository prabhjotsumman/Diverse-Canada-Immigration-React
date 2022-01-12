import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import PrimaryPinkButton from './primary-pink-button'
import projectStyles from '../style.module.css'
import styles from './header-full.module.css'

const HeaderFull = (props) => {
  return (
    <div className={styles['Header']}>
      <nav className={styles['Nav']}>
        <div className={styles['container']}>
          <img
            alt={props.image_alt}
            src={props.image_src}
            className={styles['image']}
          />
          <Link
            to="/"
            className={` ${styles['navlink']} ${projectStyles['large']} `}
          >
            <span className={styles['text']}>
              Diverse Canada
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className={styles['text1']}>Immigration</span>
          </Link>
          <div className={styles['Menu']}>
            <Link
              to="/"
              className={` ${styles['navlink1']} ${projectStyles['large']} `}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className={` ${styles['navlink2']} ${projectStyles['large']} `}
            >
              About Us
            </Link>
            <Link
              to="/our-services"
              className={` ${styles['navlink3']} ${projectStyles['large']} `}
            >
              Our Services
            </Link>
            <Link
              to="/contact-us"
              className={` ${styles['navlink4']} ${projectStyles['large']} `}
            >
              Form for students
            </Link>
            <Link
              to="/free-assessment"
              className={` ${styles['navlink5']} ${projectStyles['large']} `}
            >
              Free Assessment
            </Link>
          </div>
          <div className={styles['container1']}>
            <div className={styles['container2']}>
              <Link to="/contact-us" className={styles['navlink6']}>
                <PrimaryPinkButton
                  button="Contact Us"
                  className={styles['component']}
                ></PrimaryPinkButton>
              </Link>
            </div>
            <svg viewBox="0 0 1024 1024" className={styles['icon']}>
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
      </nav>
    </div>
  )
}

HeaderFull.defaultProps = {
  image_src: '/playground_assets/maple-200w.png',
  image_alt: 'image',
}

HeaderFull.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default HeaderFull
