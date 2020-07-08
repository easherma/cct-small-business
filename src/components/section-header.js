import React from 'react'

import Container from 'react-bootstrap/Container'
import Img from 'gatsby-image'

const SectionHeader = ({ imageSource, altText }) => (
  <header
    data-sal="fade"
    data-sal-delay="300"
    data-sal-duration="800"
    data-sal-easing="ease"
  >
    <Container>
      <div>
        <Img fluid={imageSource} alt={altText} className="img-responsive" />
      </div>
    </Container>
  </header>
)

export default SectionHeader
