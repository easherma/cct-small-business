import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import SectionHeader from '../components/section-header'

import FourColumnBlock from '../components/four-column-block'

import Projects from '../components/projects'
import StoryBlock from '../components/story-block'
import StoryBlocks from '../components/story-blocks'
import OurVisionStoryBlocks from '../components/our-vision-story-blocks'

const IndexPage = () => {
  // just the images for section headers need to be here
  const images = useStaticQuery(graphql`
    {
      smallBusinessesOfColor: file(
        relativePath: { eq: "images/small-businesses-of-color.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      vision: file(relativePath: { eq: "images/our-vision.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      partnerships: file(
        relativePath: { eq: "images/explore-the-partnership-white.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <SectionHeader
        imageSource={images.smallBusinessesOfColor.childImageSharp.fluid}
        altText="Small Businesses of Color"
      />
      <StoryBlocks />
      <SectionHeader
        imageSource={images.vision.childImageSharp.fluid}
        altText="Our Vision"
      />
      <OurVisionStoryBlocks />
      <FourColumnBlock />
      <div className="partners-section-header">
        <SectionHeader
          imageSource={images.partnerships.childImageSharp.fluid}
          altText="Explore The Partnerships"
        />
      </div>
      <Projects />
    </Layout>
  )
}

export default IndexPage
