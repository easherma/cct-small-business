import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Card from 'react-bootstrap/Card'
import Project from './project'
import { useIntl } from 'gatsby-plugin-intl'

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
  const intl = useIntl()
  const projectsData = projectsQuery.contentJson.projects

  return (
    <div className="partners-container">
      {projectsData.map((node, index) => (
        <Project
          image={node.image.childImageSharp.fluid}
          title={intl.formatMessage({
            id: `projects.${index}.title`
          })}
          primaryPartner={intl.formatMessage({
            id: `projects.${index}.primary-partner`,
          })}
          otherPartners={intl.formatMessage({
            id: `projects.${index}.other-partners`,
          })}
          description={intl.formatMessage({
            id: `projects.${index}.description`,
          })}
          additionalDescription={intl.formatMessage({
            id: `projects.${index}.additional-description`,
          })}
          callToAction={intl.formatMessage({
            id: `projects.${index}.call-to-action`,
          })}
          key={index}
        />
      ))}
    </div>
  )
}

export default Projects
