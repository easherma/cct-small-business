import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Card from 'react-bootstrap/Card'
import StoryBlock from './story-block'

const StoryBlocks = () => {
  const storysQuery = useStaticQuery(graphql`
    {
      contentJson {
        id
        stories {
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
  const storyData = storysQuery.contentJson.stories
  return (
    <div>
      {storyData.map((node, index) => (
        <StoryBlock
          imageSource={node.image.childImageSharp.fluid}
          altText={node.altText && node.altText}
          description={node.description && node.description}
          imageRight={index % 2}
        />
      ))}
    </div>
  )
}

export default StoryBlocks
