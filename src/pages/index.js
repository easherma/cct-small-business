import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import SectionHeader from '../components/section-header'

import FourColumnBlock from '../components/four-column-block'

import ProjectsData from '../components/projects'
import StoryBlock from '../components/story-block'

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
        imageSource={images.vision.childImageSharp.fluid}
        altText="Our Vision"
      />
      <SectionHeader
        imageSource={images.partnerships.childImageSharp.fluid}
        altText="Explore The Partnerships"
      />
      <StoryBlock
        imageSource={images.barriers.childImageSharp.fluid}
        altText="Barriers"
        description="Hellow word!"
      />
      <StoryBlock
        imageSource={images.barriers.childImageSharp.fluid}
        altText="Barriers"
        description="Hellow word!"
        imageRight
      />
      <FourColumnBlock />
      <ProjectsData />
    </Layout>
  )
}

export default IndexPage
