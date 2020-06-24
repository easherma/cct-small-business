import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import FourColumnBlock from '../components/four-column-block'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <FourColumnBlock />
  </Layout>
)

export default IndexPage
