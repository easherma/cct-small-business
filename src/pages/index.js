import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import SectionHeader from "../components/section-header"

import ourVision from "../content/images/our-vision.png"
import explorePartnerships from "../content/images/explore-the-partnership-white.png"
import barriers from "../content/images/barriers.png"

import ProjectsData from "../components/projects"
import StoryBlock from "../components/story-block"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SectionHeader imageSource={ourVision} altText="Our Vision" />
    <StoryBlock
      imageSource={barriers}
      altText="Barriers"
      description="Hellow word!"
    />
    <StoryBlock
      imageSource={barriers}
      altText="Barriers"
      description="Hellow word!"
      imageRight
    />

    <SectionHeader
      imageSource={explorePartnerships}
      altText="Explore The Partnerships"
    />
    <ProjectsData />
  </Layout>
)

export default IndexPage
