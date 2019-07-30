import React from "react"

import Layout from "../components/boilerplate/layout"
import Image from "../components/boilerplate/image"
import SEO from "../components/boilerplate/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi peoplees</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
