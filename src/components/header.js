import { useStaticQuery, graphql } from 'gatsby'

import React from 'react'

import Container from 'react-bootstrap/Container'
import Img from 'gatsby-image'
import { useIntl } from 'gatsby-plugin-intl'

const Header = ({ image }) => {
  const intl = useIntl()
  const data = useStaticQuery(graphql`
    {
      contentJson {
        site_description
        site_additional_description
        site_title_image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
            fluid={image}
            className="img-responsive"
            alt="The Fund for Equitable Business Growth"
          />
          <h1 className="lead mr-5 ml-4">
            {intl.formatMessage({ id: 'site-description' })}
          </h1>

          <p className="mr-5 ml-4">
            {intl.formatMessage({ id: 'site-additional-description' })}
          </p>
        </div>
      </Container>
    </header>
  )
}

export default Header
