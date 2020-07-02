import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script
          type="module"
          dangerouslySetInnerHTML={{
            __html: `
          window.addEventListener('load', function (event) {
            // Get a reference to the <path>
            var path = document.querySelector('#line-path')
          
            // Get length of path... ~577px in this case
            var pathLength = path.getTotalLength()
          
            // Make very long dashes (the length of the path itself)
            path.style.strokeDasharray = pathLength + ' ' + pathLength
          
            // Offset the dashes so the it appears hidden entirely
            path.style.strokeDashoffset = pathLength
          
            // Jake Archibald says so
            // https://jakearchibald.com/2013/animated-line-drawing-svg/
            path.getBoundingClientRect()
          
            // When the page scrolls...
            window.addEventListener('scroll', function (e) {
              // What % down is it?
              // https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript/2387222#2387222
              // Had to try three or four differnet methods here. Kind of a cross-browser nightmare.
              var scrollPercentage =
                (document.documentElement.scrollTop + document.body.scrollTop) /
                (document.documentElement.scrollHeight -
                  document.documentElement.clientHeight)
          
              // Length to offset the dashes
              var drawLength = pathLength * scrollPercentage
          
              // Draw in reverse
              path.style.strokeDashoffset = pathLength - drawLength
          
              // When complete, remove the dash array, otherwise shape isn't quite sharp
              // Accounts for fuzzy math
              if (scrollPercentage >= 0.99) {
                path.style.strokeDasharray = 'none'
              } else {
                path.style.strokeDasharray = pathLength + ' ' + pathLength
              }
            })
          });
          
        `,
          }}
        />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
