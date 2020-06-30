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
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  `)
  const storyData = storysQuery.contentJson.stories
  return (
    <div className="last-child-margin">
      {storyData.map((node, index) => (
        <StoryBlock
          bigText={true}
          imageSource={node.image.childImageSharp.fluid}
          altText={node.altText && node.altText}
          description={node.description && node.description}
          imageRight={index % 2 ? true : false}
          key={index}
        />
      ))}
    </div>
  )
}

export default StoryBlocks
