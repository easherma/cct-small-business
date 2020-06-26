import React from "react"
import Card from "react-bootstrap/Card"
import ReactMarkdown from "react-markdown"
import Linkify from "react-linkify"
import Container from "react-bootstrap/Container"
import Img from "gatsby-image"

// some of our fields will need to be markdown and parsed,
// in a good project we'd define and validate these datatypes,
// but we might not have time for that

const Project = ({

  image,
  title,
  primaryPartner,
  otherPartners,
  description,
  additionalDescription,
  callToAction,
}) => (
    <Container className="partners">
      <Card className="partners-card">
        <Img fluid={image} alt="" className="partners-image" />
        <Card.Title className="partners-title">{title}</Card.Title>
        <Card.Body>
          <Card.Text className="partners-primary">{primaryPartner}</Card.Text>
          <Card.Text className="partners-other">{otherPartners}</Card.Text>
          <Card.Text className="partners-description">{description}</Card.Text>
          <Card.Text>
            <ReactMarkdown source={additionalDescription} />
          </Card.Text>
          <Card.Text>
            <Linkify>{callToAction}</Linkify>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
export default Project
