import React from "react"
import { Link } from "gatsby"
import Button from "react-bootstrap/Button"
import Layout from "../components/layout"
import SEO from "../components/seo"

const TagPage = () => (
  <Layout>
    <SEO title="Tags" />
    <h1>Tags page is here</h1>

    <Link to="/">
      <Button variant="primary">Go back to home</Button>
    </Link>
  </Layout>
)

export default TagPage
