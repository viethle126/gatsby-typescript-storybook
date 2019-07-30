import "sanitize.css"
import "../src/styles/global.css"
import "../src/assets/fonts/stylesheet.css"
import { configure, action, addParameters } from "@storybook/react"
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"
import * as R from "ramda"

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /.stories.tsx$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}

// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ""

// This is to utilized to override the window.___navigate method Gatsby defines
// and uses to report what path a Link would be taking us to if it wasn't inside
// a storybook
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}

const styleOverrides = {
  border: "1px solid #888",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)",
  transition: "none",
}

const viewportsWithOverrides = R.map(viewport => ({
  ...viewport,
  styles: {
    ...viewport.styles,
    ...styleOverrides,
  },
}))(INITIAL_VIEWPORTS)

const updatedViewports = {
  responsive: {
    name: "Responsive",
    styles: {
      width: "100%",
      height: "100%",
      border: "none",
      boxShadow: "none",
      transition: "none",
    },
  },
  ...viewportsWithOverrides,
}

addParameters({
  viewport: {
    viewports: updatedViewports,
  },
})

configure(loadStories, module)
