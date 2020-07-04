import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

import Vector from '../content/images/Vector.png'

const LinePng = () => {
  return (
    <Container className="bg">
      <Image className="bgimg object-fit-cover" src={Vector} />
    </Container>
  )
}

export default LinePng
