import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import { mobileViewportParams } from "../../utils/Storybook"
import Footer from "./index"

export default {
  title: "Layout/Footer",
  component: Footer,
} as Meta

export const Default = () => <Footer />
export const Mobile = () => <Footer />
Mobile.parameters = mobileViewportParams
