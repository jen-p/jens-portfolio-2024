import React from "react"
import Layout from "../components/layout"
import MyImage from '../components/myImage.js'

const NotFoundPage = () => (
  <Layout>
    <div className="container">
    <h1>404: Not found</h1>
        <div className="blurb section">
          <p>We've looked everywhere but can't find what you're looking for.</p>
          <Image src="/images/ohai.jpg" height="2118" width="1600" className="404-image" />
        </div>
    </div>
  </Layout>
)

export default NotFoundPage
