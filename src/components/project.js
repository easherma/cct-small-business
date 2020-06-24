import React from "react"
import Card from "react-bootstrap/Card"
import ReactMarkdown from "react-markdown"

const Project = ({
  image,
  title,
  primaryPartner,
  otherPartners,
  description,
  additionalDescription,
  callToAction,
}) => (
  <Card>
    <Card.Img variant="top" src={image} />
    <Card.Title>{title}</Card.Title>
    <Card.Body>
      <Card.Text>{primaryPartner}</Card.Text>
      <Card.Text>{otherPartners}</Card.Text>
      <Card.Text>{description}</Card.Text>
      <Card.Text>
        <ReactMarkdown source={additionalDescription} />
      </Card.Text>
      <Card.Text>{callToAction}</Card.Text>
    </Card.Body>
  </Card>
)

export default Project
