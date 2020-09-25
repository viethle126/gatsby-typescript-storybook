import "sanitize.css"
import "./src/styles/global.css"
import "./src/assets/fonts/stylesheet.css"
import NProgress from "nprogress"
import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "./src/styles/Theme"

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  /* eslint-disable */
  if (typeof window.IntersectionObserver === "undefined") {
    import("intersection-observer")
    console.log("IntersectionObserver polyfilled")
  }
  /* eslint-enable */

  const options = {
    showSpinner: false,
    trickleSpeed: 50,
    color: "#EC1C23", // primary
  }
  const styles = `
    #nprogress {
     pointer-events: none;
    }
    #nprogress .bar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: ${options.color};
      z-index: 9000;
    }
    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
      transform: rotate(3deg) translate(0px, -4px);
      box-shadow: 0 0 10px ${options.color}, 0 0 5px ${options.color};
      opacity: 1.0;
    }
  `

  const styleNode = document.createElement(`style`)
  styleNode.id = `nprogress-styles`
  styleNode.innerHTML = styles
  document.head.appendChild(styleNode)

  NProgress.configure(options)
}

export const onRouteUpdateDelayed = () => {
  NProgress.start()
}

export const onRouteUpdate = () => {
  NProgress.done()
}

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}
