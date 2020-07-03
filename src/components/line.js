import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'
import Container from 'react-bootstrap/Container'

const LineSvg = () => {
  // textInput must be declared here so the ref can refer to it
  const linePath = useRef(null)
  useLayoutEffect(() => {
    const topPosition = linePath.current.getBoundingClientRect().top
    const path = linePath.current
    const pathLength = path.getTotalLength()
    path.style.strokeDasharray = pathLength
    // path.style.strokeDashoffset = pathLength
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
    <Container>
      {' '}
      <svg
        id="svg"
        viewBox="0 0 270 1189"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.2323 494C10.7844 497.404 10.1573 503.885 18.0851 510.621C32.4501 522.824 61.3519 526.698 83.9258 521.484C98.7651 518.056 181.638 490.119 224.207 503.885C249.737 512.141 269.758 526.698 267.877 560.482C266.372 587.51 237.241 602.848 199.349 602.848C135.499 602.848 139.999 652 139.999 667C139.999 682 148.999 707.5 177.499 722.5C183.999 726.5 196.499 736.8 194.499 746C191.999 757.5 191.499 766.5 158.499 773.5C125.499 780.5 64.4992 781 40.4992 809.5C8.77924 847.168 14.9994 886.667 40.4992 906.5C71.9992 931 84.9992 930 124.999 937C145.666 938.833 177.337 940 200.499 940C226.499 940 243.178 945.7 254.499 966C270.499 994.69 263.922 1030.75 226.499 1054.5C200.499 1071 161.999 1067.5 124.999 1060.5C87.9992 1053.5 59 1047.5 33.9993 1060.5C7.90525 1074.07 -7.00011 1106.5 7.49975 1144C16.5608 1167.43 39.9996 1181 62.9994 1185.5C111.64 1195.02 177.499 1159 195.999 1165.5M250.82 189C256.414 198.94 265 208.172 265 243.973C265 273.405 256.175 300.202 235.015 305.572C213.855 310.943 189.285 303.572 180.059 301.255C170.833 298.939 150.43 289.567 130.017 289.567C101.135 289.567 86.0591 302.241 85.1898 311.89C84.4878 319.682 94 327.5 94 327.5C94 327.5 109.286 335 118.5 337C133.5 340.256 143 352.5 138.5 368.5C134 384.5 107 403 60.5 407.5C14 412 8 457 7.5 463M205.754 1C203.037 11.4345 202.162 32.3035 176.183 42.8809C158.433 50.1083 130.168 45.5967 102.532 42.8809C74.8955 40.1651 47.3971 42.3091 31.5061 68.1809C20.9631 85.3458 23.7679 106.345 36.0662 124.213C48.3644 142.08 70.3355 158.089 119.39 153.801C167.358 149.608 190.001 148.083 220.125 162.806C235.464 170.302 246.011 180.559 249 186"
          className="line"
          stroke="#D8FE4F"
          stroke-width="2"
        />
        <path
          ref={linePath}
          className="lineDraw"
          d="M11.2323 494C10.7844 497.404 10.1573 503.885 18.0851 510.621C32.4501 522.824 61.3519 526.698 83.9258 521.484C98.7651 518.056 181.638 490.119 224.207 503.885C249.737 512.141 269.758 526.698 267.877 560.482C266.372 587.51 237.241 602.848 199.349 602.848C135.499 602.848 139.999 652 139.999 667C139.999 682 148.999 707.5 177.499 722.5C183.999 726.5 196.499 736.8 194.499 746C191.999 757.5 191.499 766.5 158.499 773.5C125.499 780.5 64.4992 781 40.4992 809.5C8.77924 847.168 14.9994 886.667 40.4992 906.5C71.9992 931 84.9992 930 124.999 937C145.666 938.833 177.337 940 200.499 940C226.499 940 243.178 945.7 254.499 966C270.499 994.69 263.922 1030.75 226.499 1054.5C200.499 1071 161.999 1067.5 124.999 1060.5C87.9992 1053.5 59 1047.5 33.9993 1060.5C7.90525 1074.07 -7.00011 1106.5 7.49975 1144C16.5608 1167.43 39.9996 1181 62.9994 1185.5C111.64 1195.02 177.499 1159 195.999 1165.5M250.82 189C256.414 198.94 265 208.172 265 243.973C265 273.405 256.175 300.202 235.015 305.572C213.855 310.943 189.285 303.572 180.059 301.255C170.833 298.939 150.43 289.567 130.017 289.567C101.135 289.567 86.0591 302.241 85.1898 311.89C84.4878 319.682 94 327.5 94 327.5C94 327.5 109.286 335 118.5 337C133.5 340.256 143 352.5 138.5 368.5C134 384.5 107 403 60.5 407.5C14 412 8 457 7.5 463M205.754 1C203.037 11.4345 202.162 32.3035 176.183 42.8809C158.433 50.1083 130.168 45.5967 102.532 42.8809C74.8955 40.1651 47.3971 42.3091 31.5061 68.1809C20.9631 85.3458 23.7679 106.345 36.0662 124.213C48.3644 142.08 70.3355 158.089 119.39 153.801C167.358 149.608 190.001 148.083 220.125 162.806C235.464 170.302 246.011 180.559 249 186"
          stroke="#2cd0af"
          stroke-width="0.5"
        />
      </svg>
    </Container>
  )
}

export default LineSvg
