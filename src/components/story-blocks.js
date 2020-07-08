import React from 'react'
import StoryBlock from './story-block'
import { useIntl } from 'gatsby-plugin-intl'

const StoryBlocks = ({ data }) => {
  const intl = useIntl()
  const storyData = data
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
