import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"



const Projects = () => {
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
  {/*<div >
    {projectsData
      .map(({node}) => (
        <Project
          image={node.image}
          title={node.title}
          primaryPartner={node.primary_partner}
          otherPartners={node.other_partners}
          desription={node.description}
          additionalDescription={node.additional_description}
          callToAction={node.call_to_action}/>
      ))}
      </div> */}
      <pre>{JSON.stringify(projectsData, null, 4)}</pre>
)

}


export default Projects

