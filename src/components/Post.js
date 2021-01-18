import React from "react"
import { Link } from "gatsby"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Badge from "react-bootstrap/Badge"
import { slugify } from "../util/utilityFunctions"
import Img from "gatsby-image"

const Post = ({ title, author, slug, date, body, fluid, tags }) => {
  return (
    <Card>
      <Img fluid={fluid} />

      <Card.Header>
        {author} | {date}
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>

        <ul>
          {tags.map(tag => (
            <li key={tag}>
              <Link to={`tag/${slugify(tag)}`}>
                <Badge variant="primary">{tag}</Badge>
              </Link>
            </li>
          ))}
        </ul>

        <Link to={slug}>
          <Button variant="primary">Read More</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Post
