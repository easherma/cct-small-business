import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Card from "react-bootstrap/Card"

const ProjectsData = () => {
  const projectsData = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            id
            image
            title
            primary_partner
            other_partners
            description
            additional_description
            call_to_action
          }
        }
      }
    }
  `)
  return (
    <div>
      {projectsData.allProjectsJson["edges"].map(({ node }) => (
        <Card>
          <Card.Img variant="top" src={node.image} />
          <Card.Title>{node.title}</Card.Title>
          <Card.Body>
            <Card.Text>{node.primary_partner}</Card.Text>
            <Card.Text>{node.other_partners}</Card.Text>
            <Card.Text>{node.description}</Card.Text>
            <Card.Text>{node.additional_description}</Card.Text>
            <Card.Text>{node.call_to_action}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}

export default ProjectsData
