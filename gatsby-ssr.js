import "sanitize.css"
import "./src/styles/global.css"
import "./src/assets/fonts/stylesheet.css"
import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "./src/styles/Theme"

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}
