import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "react-bootstrap/Image"
import Container from "react-bootstrap/Container"
import Img from "gatsby-image"

const SectionHeader = ({ imageSource, altText }) => (
  <header>
    <Container>
      <div>
        <Img fluid={imageSource} alt={altText} className="img-responsive" />
      </div>
    </Container>
  </header>
)

export default SectionHeader
