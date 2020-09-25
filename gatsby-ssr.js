import "sanitize.css"
import "./src/assets/fonts/stylesheet.css"
import React from "react"
import { ThemeProvider } from "styled-components"
import Theme from "./src/styles/Theme"
import GlobalStyle from "./src/styles/GlobalStyle"

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  )
}
