import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Card from 'react-bootstrap/Card'
import StoryBlock from './story-block'
import Container from 'react-bootstrap/Container'
import { useIntl } from 'gatsby-plugin-intl'

const OurVisionStoryBlocks = () => {
  const storysQuery = useStaticQuery(graphql`
    {
      contentJson {
        id
        expanded_stories {
          full_text
          description
          alt_text
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const intl = useIntl()
  const storyData = storysQuery.contentJson.expanded_stories
  return (
    <div className="our-vision-text">
      {storyData.map((node, index) => (
        <StoryBlock
          imageSource={node.image.childImageSharp.fluid}
          altText={node.altText && node.altText}
          description={intl.formatMessage({
            id: `expanded-stories.${index}.description`,
          })}
          fullText={intl.formatMessage({
            id: `expanded-stories.${index}.full-text`,
          })}
          imageRight={index % 2 ? false : true}
          key={index}
        />
      ))
      }
    </div >
  )
}

export default OurVisionStoryBlocks
