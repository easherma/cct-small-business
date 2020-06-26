import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Img from 'gatsby-image'

import titleImage from '../content/images/title-homepage-eng.png'

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      contentJson {
        site_description
        site_additional_description
        site_title_image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  return (
    <header>
      <Container>
        <div>
          <Img
            fluid={data.contentJson.site_title_image.childImageSharp.fluid}
            className="img-responsive"
            alt="The Fund for Equitable Business Growth"
          />
          <h1 className="lead">{data.contentJson.site_description}</h1>
          <p>{data.contentJson.site_additional_description}</p>
        </div>
      </Container>
    </header>
  )
}

export default Header
