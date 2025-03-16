import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
//import Logo from '../assets/images/logo.inline.svg'

const Header = () => {
  /*constructor(props) {
    super(props)

    this.state = {
      mobileNavOpen: false,
    }
  }

  toggleMobileNav = () => {
    document.body.classList.toggle('has-overlay')
    this.setState({ mobileNavOpen: !this.state.mobileNavOpen })
  }*/

  
    const navItems = [
      { link: '/', title: 'Work' },
      { link: '/whoami/', title: 'Who Am I?' }
    ]

    return (
      <header>
        <div className="header-wrapper container">
          <div className="name">
              Jennifer Patel
          </div>
          <div className="header-nav">
            {navItems.map(navItem => {
              return (
                <Link
                  href={navItem.link}
                  className={`header-nav__link ${navItem.class}`}
                >
                  {navItem.title}
                </Link>
              )
            })}
          </div>

        </div>
      </header>
    )
}

export default Header
