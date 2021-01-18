import React from "react"
import { Link } from "gatsby"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
// import SEO from "../components/seo"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faLaptop } from "@fortawesome/free-solid-svg-icons"

const Sidebar = () => (
  <div>
    <h3>Hey this is Sidebar</h3>

    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <br />

    <StaticQuery
      query={sidebarQuery}
      render={data => (
        <div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Card key={node.id} style={{ width: "18rem" }}>
              <Link to={node.fields.slug}>
                <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
              </Link>
              <Card.Body>
                <Card.Title>
                  <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                </Card.Title>
              </Card.Body>
            </Card>
          ))}
          <br />
        </div>
      )}
    />
  </div>
)

const sidebarQuery = graphql`
  query sidebarQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Sidebar
