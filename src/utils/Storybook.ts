import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"
import { FluidObject } from "gatsby-image"

const styleOverrides = {
  border: "1px solid #888",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)",
  transition: "none",
}

const viewportsWithOverrides = Object.keys(INITIAL_VIEWPORTS).map((k) => ({
  ...INITIAL_VIEWPORTS[k],
  styles: {
    ...INITIAL_VIEWPORTS[k].styles,
    ...styleOverrides,
  },
}))

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

export const viewportParams = {
  viewport: {
    viewports: updatedViewports,
  },
}

// Waiting on: https://github.com/storybookjs/storybook/pull/11627
export const mobileViewportParams = {
  viewport: {
    viewports: updatedViewports,
    defaultViewport: "iphonex",
  },
}

export const gatsbyFluidImage = (
  url: string,
  aspectRatio?: number
): FluidObject => ({
  src: url,
  aspectRatio: aspectRatio || 1,
  media: "image/png",
  sizes: "",
  srcSet: "",
})
