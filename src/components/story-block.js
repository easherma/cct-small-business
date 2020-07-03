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
      <Container
        className={
          bigText
            ? 'story-block-text story-block-big-text my-1'
            : 'story-block-text mb-5 mt-2'
        }
      >
        <Row>
          <Col
            className="align-middle"
            sm={{ span: '6', order: `${imageRight ? 'last' : 'first'} ` }}
          >
            <Img fluid={imageSource} alt={altText} />
          </Col>
          <Col className="align-self-center" sm={6}>
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
