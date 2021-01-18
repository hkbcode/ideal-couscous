import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Button from "react-bootstrap/Button"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>

    <Link to="/tags">
      <Button variant="dark">Tags</Button>
    </Link>
    <Link to="/team">
      <Button variant="dark">Our Team</Button>
    </Link>
    <Link to="/about/">
      <Button variant="dark">About me</Button>
    </Link>
    <Link to="/blog">
      <Button variant="primary">Blog</Button>
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
