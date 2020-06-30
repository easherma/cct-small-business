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
  bigText = false,
}) => (
    <section>
      <Container className={bigText ? "story-block-text story-block-big-text" : "story-block-text"} >
        <Row>
          <Col className="align-middle" sm={{ span: '6', order: `${imageRight ? 'last' : 'first'} ` }}>
            <Img fluid={imageSource} alt={altText} />
          </Col>
          <Col className="align-self-center" sm={6}>
            <div >
              {description}
              <ReactMarkdown source={fullText} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )

export default StoryBlock
