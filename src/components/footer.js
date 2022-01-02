import React from 'react'

import PropTypes from 'prop-types'

import styles from './footer.module.css'

const Footer = (props) => {
  return (
    <footer className={` ${styles['Footer']} ${styles[props.rootClassName]} `}>
      <div className={styles['container']}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className={styles['image']}
        />
        <div className={styles['container1']}>
          <span className={styles['text']}>
            <span>Diverse Canada Immigration</span>
          </span>
          <span>{props.text}</span>
          <span>{props.text1}</span>
          <span>{props.text2}</span>
          <span>
            Copyright Â© 2022 Diverse Canada Immigration
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  text1: 'Phone: +14039260100',
  image_src: '/playground_assets/maple-200w.png',
  image_alt: 'image',
  text: 'Pardeep Kumar Bhatoa, P.Eng, RCIC',
  rootClassName: '',
  text2: 'Email: pardeep@diversecanadaimmigration.ca',
}

Footer.propTypes = {
  text1: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
}

export default Footer
