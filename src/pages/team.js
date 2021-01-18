import React from "react"
import { Link } from "gatsby"
import Button from "react-bootstrap/Button"
import Layout from "../components/layout"
import SEO from "../components/seo"

const TeamPage = () => (
  <Layout>
    <SEO title="Our Team" />
    <h1>Our Team</h1>

    <Link to="/">
      <Button variant="primary">Go back to home</Button>
    </Link>
  </Layout>
)

export default TeamPage
