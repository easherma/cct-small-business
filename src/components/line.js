import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'

const LineSvg = () => {
  // textInput must be declared here so the ref can refer to it
  const linePath = useRef(null)
  useLayoutEffect(() => {
    const topPosition = linePath.current.getBoundingClientRect().top
    const path = linePath.current
    const pathLength = path.getTotalLength()
    path.style.strokeDasharray = pathLength + ' ' + pathLength
    path.style.strokeDashoffset = pathLength
    const onScroll = () => {
      // What % down is it?
      let scrollPercentage =
        (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight)

      // Length to offset the dashes
      let drawLength = pathLength * scrollPercentage + 110

      // Draw in reverse
      path.style.strokeDashoffset = pathLength - drawLength
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
    /* 
       remove the event listener in the cleanup function 
       to prevent memory leaks
    */
  }, [])
  return (
    <svg
      id="svg"
      viewBox="0 0 261 464"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M244.82 189C250.414 198.94 259 208.172 259 243.973C259 273.405 250.175 300.202 229.015 305.572C207.855 310.943 183.285 303.572 174.059 301.255C164.833 298.939 144.43 289.567 124.017 289.567C95.135 289.567 80.0591 302.241 79.1898 311.89C78.4878 319.682 88 327.5 88 327.5C88 327.5 103.286 335 112.5 337C127.5 340.256 137 352.5 132.5 368.5C128 384.5 101 403 54.5 407.5C8 412 2 457 1.5 463"
        stroke="#D8FE4F"
        strokeWidth={3}
      />
      <path
        d="M199.754 1C197.037 11.4345 196.162 32.3035 170.183 42.8809C152.433 50.1083 124.168 45.5967 96.532 42.8809C68.8955 40.1651 41.3971 42.3091 25.5061 68.1809C14.9631 85.3458 17.7679 106.345 30.0662 124.213C42.3644 142.08 64.3355 158.089 113.39 153.801C161.358 149.608 184.001 148.083 214.125 162.806C229.464 170.302 240.011 180.559 243 186"
        stroke="#D8FE4F"
        strokeWidth={3}
        ref={linePath}
      />
    </svg>
  )
}

export default LineSvg
