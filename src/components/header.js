import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import titleImage from "../images/illustrations/title-homepage-eng.png"

const Header = () => (
  <header>
    <div>
        <img src={titleImage} />
        <h1>Creating a marketplace of services for entrepreneurs of color to close the racial wealth gap and build a more just, equitable and resilient society.</h1>
        <h2>A collaboration between The Chicago Community Trust,  The Coleman Foundation, JPMorgan Chase Foundation, Robert R. McCormick Foundation, Leslie Bluhm and David Helfand, Peter and Lucy Ascoli Family Fund, and the Liz and Don Thompson Family Fund.</h2>  
    </div>
  </header>
)

export default Header
