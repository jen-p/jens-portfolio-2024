import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from "../styles/main.scss"
import Layout from '../components/layout'

const Whoami = () => (
  <Layout>
    <div className="not-found-page container">
      <div className="content">
        <h1>404: Not found</h1>
        <div className="blurb section">
          <p>We've looked everywhere but can't find what you're looking for.</p>
          <div className="image-container">
            <img src="/images/ohai.jpg" className="not-found-image" />
          </div>
        </div>
      </div>
    </div>

  </Layout>
)

export default Whoami
