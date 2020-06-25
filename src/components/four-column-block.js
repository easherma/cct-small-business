import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import arrow1 from '../images/arrow1.png'
import arrow2 from '../images/arrow2.png'
import arrow3 from '../images/arrow3.png'
import arrow4 from '../images/arrow4.png'

const FourColumnBlock = () => (
  <Container>
    <p className="lead text-center font-weight-bold">
      As a result of this program, we anticipate an increase in:
    </p>

    <Row>
      <Col sm={3}>
        <Card>
          <Card.Img variant="top" src={arrow1} />
          <Card.Body>
            <Card.Text className="font-weight-bold">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col sm={3}>
        <Card>
          <Card.Img variant="top" src={arrow2} />
          <Card.Body>
            <Card.Text className="font-weight-bold">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col sm={3}>
        <Card>
          <Card.Img variant="top" src={arrow3} />
          <Card.Body>
            <Card.Text className="font-weight-bold">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col sm={3}>
        <Card>
          <Card.Img variant="top" src={arrow4} />
          <Card.Body>
            <Card.Text className="font-weight-bold">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <p className="text-center">
      We invite you to join us in supporting the partnership. To learn how to do
      so, contact Shandra Richardson, Program Manager, The Chicago Community
      Trust, at srichardson@cct.org.
    </p>
  </Container>
)

export default FourColumnBlock
