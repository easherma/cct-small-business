import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';

const SectionHeader = ({ imageSource, altText }) => (
    <header>
        <Container>
            <div>
                <Image src={imageSource} alt={altText} className="img-responsive" fluid />
            </div>
        </Container>

    </header>
)

export default SectionHeader
