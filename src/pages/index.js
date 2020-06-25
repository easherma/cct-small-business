import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/layout"
import SectionHeader from "../components/section-header"
import FourColumnBlock from '../components/four-column-block'

import ourVision from "../content/images/our-vision.png"
import explorePartnerships from "../content/images/explore-the-partnership-white.png"

import ProjectsData from "../components/projects"

const IndexPage = () => {
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
      <FourColumnBlock />
      <ProjectsData />
    </Layout>
  )
}

export default IndexPage
