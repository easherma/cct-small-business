import React from 'react'
import Media from 'react-bootstrap/Media'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Img from 'gatsby-image'

const StoryBlock = ({
  imageSource,
  altText,
  description,
  imageRight = false,
}) => (
  <section>
    <Container>
      <Row>
        <Col sm={{ span: '6', order: `${imageRight ? 'last' : 'first'} ` }}>
          <Img fluid={imageSource} alt={altText} />
        </Col>
        <Col sm={6}>
          <p>{description}</p>
        </Col>
      </Row>
    </Container>
  </section>
)

export default StoryBlock
