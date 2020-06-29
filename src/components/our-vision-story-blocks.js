import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Card from 'react-bootstrap/Card'
import StoryBlock from './story-block'

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
  const storyData = storysQuery.contentJson.expanded_stories
  return (
    <div>
      {storyData.map((node, index) => (
        <StoryBlock
          imageSource={node.image.childImageSharp.fluid}
          altText={node.altText && node.altText}
          fullText={node.full_text && node.full_text}
          imageRight={index % 2}
        />
      ))}
    </div>
  )
}

export default OurVisionStoryBlocks
