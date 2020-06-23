import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
 <section>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 order-lg-2">
        <div className="p-5">
          <img className=" img-fluid" src="assets/img/Barriers.png" />
        </div>
      </div>
      <div className="col-lg-6 order-lg-1">
        <div className="p-5">
          <p>
            Black and Latinx-owned businesses comprise just 8% of the total
            number of small businesses combined.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
