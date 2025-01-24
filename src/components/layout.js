/*import React, { Component} from 'react'*/
import React from 'react';
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from './header'
import Footer from './footer'

/*class Layout extends Component {*/
const Layout = (props) => {
  /*render() {*/
    const frontmatter = Object.assign(
      {
        metaTitle: 'Portfolio of Jennifer Patel',
        metaDescription: 'Jennifer is a product designer, specializing in healthcare'
      },
      props.frontmatter
    )

    return (
      <div className="app">
        <Helmet
          title={frontmatter.metaTitle}
          meta={[
            {
              name: 'description',
              content: frontmatter.metaDescription,
            },
            {
              property: 'og:title',
              content: frontmatter.metaTitle,
            },
            {
              property: 'og:description',
              content: frontmatter.metaDescription,
            },
          ]}
        >
          <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap" rel="stylesheet" /> 
          <html lang="en" />
        </Helmet>
        <Header />
        <div className="app__body">{props.children}</div>
        <Footer />
      </div>
    )
//  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
