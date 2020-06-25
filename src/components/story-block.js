import React from "react"
import Media from 'react-bootstrap/Media';
import Container from "react-bootstrap/Container";
const StoryBlock = ({ imageSource, altText, description, imageAlign = "left" }) => (
    <section>
        <Container>
            <Media> {imageAlign === "left" ? (
                <> <img
                    width={600}
                    height={450}
                    className="mr-3"
                    src={imageSource}
                    alt={altText}
                />
                    <Media.Body className="align-self-center">
                        <p>
                            {description}
                        </p>
                    </Media.Body></>
            ) : (<>
                <Media.Body className="align-self-center">
                    <p>
                        {description}
                    </p>

                </Media.Body><img
                    width={600}
                    height={450}
                    className="mr-3"
                    src={imageSource}
                    alt={altText}
                /></>
                )}
            </Media>
        </Container>
    </section>
)

export default StoryBlock
