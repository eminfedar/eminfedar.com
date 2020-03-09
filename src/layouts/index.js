import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
//import '../css/prism-okaidia.css'
//import '../css/global.css'
import '../css/screen.css'
import eficon from '../favicons/ef.png'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Emin Fedar"
      meta={[
        { name: 'description', content: 'Emin Fedar kişisel blog sitesidir.' },
        { name: 'keywords', content: 'emin, fedar, emin fedar, c++, cpp, python, linux, pardus, algoritma' },
        { charSet: 'utf-8'},
        { name: 'theme-color', content: '#111111'}
      ]}
      link={[
        { rel: 'icon', type: "image/png", sizes: "460x460", href: eficon },
        { rel: 'canonical', href: 'https://eminfedar.com' }
      ]}
    />

    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
