import React from 'react'
import Media from 'react-bootstrap/Media'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
          <img
            width={600}
            height={450}
            className={`mr-3 ${imageRight ? 'order-2' : ''}`}
            src={imageSource}
            alt={altText}
          />
        </Col>
        <Col sm={6}>
          <p>{description}</p>
        </Col>
      </Row>
    </Container>
  </section>
)

export default StoryBlock
