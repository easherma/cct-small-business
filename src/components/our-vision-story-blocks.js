import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Card from 'react-bootstrap/Card'
import StoryBlock from './story-block'
import Container from 'react-bootstrap/Container'

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
    <div className="our-vision-text">
      {storyData.map((node, index) => (
        <StoryBlock
          imageSource={node.image.childImageSharp.fluid}
          altText={node.altText && node.altText}
          description={node.description && node.description}
          fullText={node.full_text && node.full_text}
          imageRight={index % 2 ? false : true}
          key={index}
        />
      ))
      }
    </div >
  )
}

export default OurVisionStoryBlocks
