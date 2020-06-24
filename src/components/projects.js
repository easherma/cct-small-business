import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Project from "./project"

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
        <Project
          image={node.image}
          title={node.title}
          primaryPartner={node.primary_partner}
          otherPartners={node.other_partners}
          description={node.description}
          additionalDescription={node.additional_description}
          callToAction={node.call_to_action}
        />
      ))}
    </div>
  )
}

export default ProjectsData