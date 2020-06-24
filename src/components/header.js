import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import titleImage from "../images/title-homepage-eng.png"
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';

const Header = () => (
  <header>
    <Container>
    <div>
        <Image src={titleImage} alt="The Fund for Equitable Business Growth" className="img-responsive" fluid />
        <h1 className="lead">Creating a marketplace of services for entrepreneurs of color to close the racial wealth gap and build a more just, equitable and resilient society.</h1>
        
        <p>A collaboration between The Chicago Community Trust,  The Coleman Foundation, JPMorgan Chase Foundation, Robert R. McCormick Foundation, Leslie Bluhm and David Helfand, Peter and Lucy Ascoli Family Fund, and the Liz and Don Thompson Family Fund.</p>  
    </div>
    </Container>

  </header>
)

export default Header
