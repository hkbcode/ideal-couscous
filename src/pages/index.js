import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLaptop } from "@fortawesome/free-solid-svg-icons"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
      <FontAwesomeIcon icon={faLaptop} /> Welcome to Gatsbyjs + Bootstrap 4{" "}
    </h1>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quod vel
      ullam tenetur sint quae, officiis id. At excepturi dolores ad tenetur et
      in perspiciatis! Aliquam vero magnam tempore. Tenetur!
    </p>

    <p>
      Lorem, Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
      repudiandae obcaecati esse fugit dignissimos fuga, aliquid veniam
      doloribus ex voluptatum, facere dolorem harum accusamus nobis repellendus
      debitis? Possimus, libero labore.lorem ipsum dolor sit amet consectetur
      adipisicing elit. Expedita consequuntur inventore porro eligendi quia eius
      sequi, consectetur, rerum aliquid, libero architecto! Molestiae suscipit
      iure ut, eum aliquid ratione laudantium veniam.
    </p>
  </Layout>
)

export default IndexPage
