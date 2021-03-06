import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import SectionHeader from '../components/section-header'

import FourColumnBlock from '../components/four-column-block'

import Projects from '../components/projects'

import StoryBlocks from '../components/story-blocks'
import OurVisionStoryBlocks from '../components/our-vision-story-blocks'
import Header from '../components/header'
import Language from '../components/language'

import LineSvg from '../components/line'

const IndexPage = ({ data, pageContext }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Language />
      <Header image={data.contentJson.site_title_image.childImageSharp.fluid} />
      <LineSvg />
      <SectionHeader
        imageSource={
          data.contentJson.section_headers.section_title_1.childImageSharp.fluid
        }
        altText="Small Businesses of Color"
      />
      <StoryBlocks data={data.contentJson.stories} />
      <SectionHeader
        imageSource={
          data.contentJson.section_headers.section_title_2.childImageSharp.fluid
        }
        altText="Our Vision"
      />
      <OurVisionStoryBlocks />
      <FourColumnBlock />

      <div className="partners-section-header">
        <SectionHeader
          imageSource={
            data.contentJson.section_headers.section_title_3.childImageSharp
              .fluid
          }
          altText="Explore The Partnerships"
        />
      </div>
      <div className="partners-section">
        <Projects />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query siteData($language: String) {
    contentJson(language: { eq: $language }) {
      site_title_image {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      section_headers {
        section_title_1 {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        section_title_2 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        section_title_3 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
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
`

export default IndexPage
