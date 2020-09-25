import "sanitize.css"
import "../src/styles/global.css"
import "../src/assets/fonts/stylesheet.css"
import { viewportParams } from "../src/utils/Storybook"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  ...viewportParams,
}
