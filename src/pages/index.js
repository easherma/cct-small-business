import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import SectionHeader from "../components/section-header"

import ourVision from "../content/images/our-vision.png"
import explorePartnerships from "../content/images/explore-the-partnership-white.png"
import barriers from "../content/images/barriers.png"
import smallBusinessOfColor from "../content/images/small-businesses-of-color.png"
import chicagosSmallBusinesses from "../content/images/chicagos-small-businesses.png"
import open from "../content/images/open.png"
import averageOwned from "../content/images/average-owned.png"
import buenaPark from "../content/images/buena-park-and-englewood.png"
import businessPlan from "../content/images/business-plan.png"
import mapLoop from "../content/images/map-loop.png"

import ProjectsData from "../components/projects"
import StoryBlock from "../components/story-block"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SectionHeader imageSource={smallBusinessOfColor} altText="Small Businesses of Color" />

    <StoryBlock imageSource={chicagosSmallBusinesses} altText="Chicagos Small Businesses"
      description="Chicago's small businesses drive economic 
      empowerment providing 58% of all jobs in the city,
      and 70% of the jobs in underinvested neighborhoods."/>

    <StoryBlock imageSource={barriers} altText="Barriers" imageAlign="right"
      description="Despite theri vision, tenacity and commitment 
        entrepreneurs of color face sigificant barriers to success"/>

    <StoryBlock imageSource={open} altText="Open"
      description="Black and Latinx-owned business comprose just 
        8% of the total number of small businesses combined"/>

    <StoryBlock imageSource={averageOwned} altText="Average Owned" imageAlign="right"
      description="The average white-owned business is valued at 
        more than 12x the value of the average black-owned business"/>

    <StoryBlock imageSource={buenaPark} altText="Buena Park"
      description="Small businesses in Englewood (94% Black) are 
      operating with less than a week of cash reserves in their 
      deposit accounts, compared to 17 days for small business 
      in Buens Park (Uptown, 54% White)-three time the cash liquidity"/>

    <SectionHeader imageSource={ourVision} altText="Our Vision" />

    <StoryBlock imageSource={businessPlan} altText="Business Plan" imageAlign="right"
      description="How can we address these systemic inequities?

       In 2018 Next Street conducted research on Chicago’s small 
       business landscape which revealed the following needs of 
       businesses owned by women and people of color: 
       
       •Improved business service delivery 
       •Enhanced service options 
       •Coordination among business service providers 
       •Expanded access to business networks and capital
       
       We believe effective partnerships between business support 
       organizations are central to addressing these needs. 
       The fund’s vision is to shape an equitable and coordinated 
       marketplace of services for Entrepreneurs of Color throughout Chicago."/>

    <StoryBlock imageSource={mapLoop} altText="Map Loop"
      description="We awarded grants to 12 partnerships to expand 
      their offerings to small businesses on the South and West 
      sides. These grant recipients will work together in a learning 
      cohort model to begin to transform the small business 
      ecosystem in Chicago.
      
      The partnerships in the fund can be summed up in 4 types: 

      New Business Models: 
      Partnerships innovating and replicating new business models.

      New Markets: 
      Partnerships that are cultivating growth in new business markets. 

      Curriculum Expansion: 
      Partnerships that are expanding business education 
      into new locations with local partners.

      Place-Based: 
      Partnerships that are aimed at hyper-local business development." />

    <SectionHeader imageSource={explorePartnerships} altText="Explore The Partnerships" />
    <ProjectsData />
  </Layout>
)

export default IndexPage
