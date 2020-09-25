import "sanitize.css"
import "../src/assets/fonts/stylesheet.css"
import React from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../src/styles/GlobalStyle"
import Theme from "../src/styles/Theme"
import { viewportParams } from "../src/utils/Storybook"

const PageDecorator = (Story) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Story />
  </ThemeProvider>
)

export const decorators = [PageDecorator]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  ...viewportParams,
}
