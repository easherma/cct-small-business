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
  // this is where we import stuff to use in the page
  // expect this to grow until we have all the content
  // at some point we might refactor it, esp when we implement spanish
  const images = useStaticQuery(graphql`
    {
      vision: file(relativePath: { eq: "images/our-vision.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      partnerships: file(
        relativePath: { eq: "images/explore-the-partnership-white.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      barriers: file(relativePath: { eq: "images/barriers.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />

      <SectionHeader
        imageSource={images.partnerships.childImageSharp.fluid}
        altText="Explore The Partnerships"
      />
      <StoryBlocks />
      <SectionHeader
        imageSource={images.vision.childImageSharp.fluid}
        altText="Our Vision"
      />
      <OurVisionStoryBlocks />
      <FourColumnBlock />
      <Projects />
    </Layout>
  )
}

export default IndexPage
