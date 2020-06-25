import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import SectionHeader from "../components/section-header"
import FourColumnBlock from '../components/four-column-block'

import ourVision from "../content/images/our-vision.png"
import explorePartnerships from "../content/images/explore-the-partnership-white.png"

import ProjectsData from "../components/projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SectionHeader imageSource={ourVision} altText="Our Vision" />
    <SectionHeader
      imageSource={explorePartnerships}
      altText="Explore The Partnerships"
    />
      <FourColumnBlock />
    <ProjectsData />
  </Layout>
)

export default IndexPage
