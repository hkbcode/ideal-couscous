import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { slugify } from "../util/utilityFunctions"
import SEO from "../components/seo"
import Img from "gatsby-image"

const singlePost = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  return (
    <Layout>
      <SEO title={post.title} />
      <h1>{post.title}</h1>
      <p>{post.date} </p>
      <p>{post.author}</p>
      <Img fluid={post.image.childImageSharp.fluid} />
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />

      <ul>
        {post.tags.map(tag => (
          <li key={tag}>
            <Link to={`/tags/${slugify(tag)}`}>{tag}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const PostQuery = graphql`
  query blogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        date(formatString: "MMM D YYYY")
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default singlePost
