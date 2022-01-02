import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import ContactUs from './views/contact-us'
import OurServices from './views/our-services'
import FreeAssessment from './views/free-assessment'
import ComingSoon from './views/coming-soon'
import AboutUs from './views/about-us'
import Home from './views/home'
import MobileMenu from './views/mobile-menu'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={ContactUs} path="/contact-us" />
        <Route exact component={OurServices} path="/our-services" />
        <Route exact component={FreeAssessment} path="/free-assessment" />
        <Route exact component={ComingSoon} path="/coming-soon" />
        <Route exact component={AboutUs} path="/about-us" />
        <Route exact component={Home} path="/" />
        <Route exact component={MobileMenu} path="/mobile-menu" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
