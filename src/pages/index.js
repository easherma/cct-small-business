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
      smallBusinessesOfColor: file(
        relativePath: { eq: "images/small-businesses-of-color.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      chiSmallBusiness: file(
        relativePath: { eq: "images/chi-sml-bus.png" }
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
      open: file(relativePath: { eq: "images/blk-ltx-own.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blackAndWhiteOwned: file(relativePath: { eq: "images/blk-wht-own.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      buenaEnglewood: file(relativePath: { eq: "images/buena-park-and-englewood.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vision: file(relativePath: { eq: "images/our-vision.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      businessPlan: file(relativePath: { eq: "images/notepad.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      awardedPartnerships: file(relativePath: { eq: "images/map-2.png" }) {
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
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <SectionHeader
        imageSource={images.smallBusinessesOfColor.childImageSharp.fluid}
        altText="Small Businesses of Color"
      />
      <StoryBlock
        imageSource={images.chiSmallBusiness.childImageSharp.fluid}
        altText="Chicago Small Businesse"
        description="Hellow word!"
        imageRight
      />
      <StoryBlock
        imageSource={images.barriers.childImageSharp.fluid}
        altText="Barriers"
        description="Hellow word!"
      />
      <StoryBlock
        imageSource={images.open.childImageSharp.fluid}
        altText="Black and Latinx-Owned Businesses"
        description="Hellow word!"
      />
      <StoryBlock
        imageSource={images.blackAndWhiteOwned.childImageSharp.fluid}
        altText="Black and White-Owned Businesses"
        description="Hellow word!"
      />
      <StoryBlock
        imageSource={images.buenaEnglewood.childImageSharp.fluid}
        altText="Buena Park and Englewood"
        description="Hellow word!"
      />
      <SectionHeader
        imageSource={images.vision.childImageSharp.fluid}
        altText="Our Vision"
      />
      <OurVisionStoryBlocks imageSource={images.businessPlan.childImageSharp.fluid}
        altText="Business Plans"
        description="Hellow word!"
      />
      <OurVisionStoryBlocks imageSource={images.awardedPartnerships.childImageSharp.fluid}
        altText="Explore The Partnerships"
        description="Hellow word!"
      />
      <FourColumnBlock />
      <SectionHeader
        imageSource={images.partnerships.childImageSharp.fluid}
        altText="Explore The Partnerships"
      />
      <Projects />
    </Layout>
  )
}

export default IndexPage
