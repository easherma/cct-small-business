import React from "react"
import Media from "react-bootstrap/Media"
import Container from "react-bootstrap/Container"
const StoryBlock = ({
  imageSource,
  altText,
  description,
  imageRight = false,
}) => (
  <section>
    <Container>
      <Media>
        <img
          width={600}
          height={450}
          className={`mr-3 ${imageRight ? "order-2" : ""}`}
          src={imageSource}
          alt={altText}
        />
        <Media.Body className="align-self-center order-1">
          <p>{description}</p>
        </Media.Body>
      </Media>
    </Container>
  </section>
)

export default StoryBlock
