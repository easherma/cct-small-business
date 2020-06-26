import React from "react"
import Card from "react-bootstrap/Card"
import ReactMarkdown from "react-markdown"
import Linkify from "react-linkify"
import Container from "react-bootstrap/Container"

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
        <Card.Img variant="top" src={image} className="partners-image" />
        <Card.Title className="partners-title">{title}</Card.Title>
        <Card.Body>
          <Card.Text>{primaryPartner}</Card.Text>
          <Card.Text>{otherPartners}</Card.Text>
          <Card.Text>{description}</Card.Text>
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
