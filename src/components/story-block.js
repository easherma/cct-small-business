import React from 'react'
import Media from 'react-bootstrap/Media'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Img from 'gatsby-image'
import ReactMarkdown from 'react-markdown'

const StoryBlock = ({
  imageSource,
  altText,
  description,
  fullText,
  imageRight = false,
}) => (
  <section>
    <Container className="my-1">
      <Row>
        <Col sm={{ span: '6', order: `${imageRight ? 'last' : 'first'} ` }}>
          <Img fluid={imageSource} alt={altText} />
        </Col>
        <Col sm={6}>
          <p className="font-weight-bold">{description}</p>
          <div className="pb-5">
            <ReactMarkdown source={fullText} />
          </div>
        </Col>
      </Row>
    </Container>
  </section>
)

export default StoryBlock
