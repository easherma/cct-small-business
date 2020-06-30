import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Card from 'react-bootstrap/Card'
import Project from './project'

const Projects = () => {
  const projectsQuery = useStaticQuery(graphql`
    {
      contentJson {
        projects {
          title
          primary_partner
          other_partners
          description
          additional_description
          call_to_action
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  `)
  const projectsData = projectsQuery.contentJson.projects
  return (
    <div className="partners-container">
      {projectsData.map((node, index) => (
        <Project
          image={node.image.childImageSharp.fluid}
          title={node.title}
          primaryPartner={node.primary_partner}
          otherPartners={node.other_partners}
          description={node.description}
          additionalDescription={node.additional_description}
          callToAction={node.call_to_action}
          key={index}
        />
      ))}
    </div>
  )
}

export default Projects
