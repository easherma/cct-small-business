import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Img from 'gatsby-image'
import { useIntl } from 'gatsby-plugin-intl'

import { useStaticQuery, graphql } from 'gatsby'

const FourColumnBlock = () => {
  const data = useStaticQuery(graphql`
    {
      contentJson {
        four_column_block {
          title
          image1 {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image2 {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image3 {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image4 {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description1
          description2
          description3
          description4
          call_to_action
        }
      }
    }
  `)
  const intl = useIntl()
  const blockData = data.contentJson.four_column_block

  return (
    <Container>
      <p className="lead text-center font-weight-bold">{blockData.title}</p>

      <Row>
        <Col sm={3}>
          <Card>
            <Img fluid={blockData.image1.childImageSharp.fluid} alt="arrow1" />
            <Card.Body>
              <Card.Text className="font-weight-bold">
                {intl.formatMessage({ id: `four-column-block.description1`, })}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={3}>
          <Card>
            <Img fluid={blockData.image2.childImageSharp.fluid} alt="arrow2" />
            <Card.Body>
              <Card.Text className="font-weight-bold">
                {intl.formatMessage({ id: `four-column-block.description2`, })}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={3}>
          <Card>
            <Img fluid={blockData.image3.childImageSharp.fluid} alt="arrow3" />
            <Card.Body>
              <Card.Text className="font-weight-bold">
                {intl.formatMessage({ id: `four-column-block.description3`, })}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={3}>
          <Card>
            <Img fluid={blockData.image4.childImageSharp.fluid} alt="arrow4" />
            <Card.Body>
              <Card.Text className="font-weight-bold">
                {intl.formatMessage({ id: `four-column-block.description4`, })}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <p className="text-center">{blockData.call_to_action}</p>
    </Container>
  )
}

export default FourColumnBlock
