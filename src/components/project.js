import React from "react"
import Card from "react-bootstrap/Card"
import ReactMarkdown from "react-markdown"
import Linkify from "react-linkify"
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
  <Card>
    <Img fluid={image} alt="" />
    <Card.Title>{title}</Card.Title>
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
)

export default Project
