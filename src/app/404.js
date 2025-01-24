import React from "react"
import Layout from "../components/layout"
import MyImage from '../components/myImage.js'

const NotFoundPage = () => (
  <Layout>
    <div className="container">
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <MyImage filename="ohai.jpg" />
    </div>
  </Layout>
)

export default NotFoundPage
