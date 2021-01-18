import React from "react"
import { Link } from "gatsby"
import Button from "react-bootstrap/Button"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About me" />
    <h1>About Page</h1>

    <Link to="/">
      <Button variant="primary">Go back to home</Button>
    </Link>
  </Layout>
)

export default AboutPage
