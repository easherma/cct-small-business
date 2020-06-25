import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "react-bootstrap/Image"
import Container from "react-bootstrap/Container"
import Img from "gatsby-image"

import titleImage from "../content/images/title-homepage-eng.png"

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      file(absolutePath: { regex: "/site-header/" }) {
        id
        name
        childContentJson {
          id
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description
          additional_description
        }
      }
    }
  `)
  return (
    <header>
      <Container>
        <div>
          <Img
            fluid={data.file.childContentJson.image.childImageSharp.fluid}
            className="img-responsive"
            alt="The Fund for Equitable Business Growth"
          />
          <h1 className="lead">{data.file.childContentJson.description}</h1>
          <p>{data.file.childContentJson.additional_description}</p>
        </div>
      </Container>
    </header>
  )
}

export default Header
