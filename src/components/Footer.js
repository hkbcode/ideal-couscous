import React from "react"
import Alert from "react-bootstrap/Alert"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLaptop } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
  return (
    <Alert variant="dark">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby </a>
      <i>and author is </i>
      <a href="https://hkbcode.github.io" target="_blank" rel="noreferrer">
        {" "}
        Hemant Bhoi{" "}
      </a>
      <FontAwesomeIcon icon={faLaptop} />
    </Alert>
  )
}

export default Footer
