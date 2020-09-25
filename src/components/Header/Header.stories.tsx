import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import { mobileViewportParams } from "../../utils/Storybook"
import Header from "./index"

export default {
  title: "Layout/Header",
  component: Header,
} as Meta

export const Default = () => <Header title="Storybook" />
export const Mobile = () => <Header title="Storybook" />
Mobile.parameters = mobileViewportParams
