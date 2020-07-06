import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Card from 'react-bootstrap/Card'
import StoryBlock from './story-block'
import { useIntl } from 'gatsby-plugin-intl'

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
  const intl = useIntl()
  const storyData = storysQuery.contentJson.stories
  return (
    <div className="last-child-margin">
      {storyData.map((node, index) => (
        <StoryBlock
          bigText={true}
          imageSource={node.image.childImageSharp.fluid}
          altText={node.altText && node.altText}
          description={intl.formatMessage({
            id: `stories.${index}.description`,
          })}
          imageRight={index % 2 ? true : false}
          lastElement={storyData[index + 1] === undefined ? true : false}
          key={index}
        />
      ))}
    </div>
  )
}

export default StoryBlocks
