import React from "react"
import { storiesOf } from "@storybook/react"
import StoryDecorator from "./StoryDecorator"
import Card from "./index"

const cardProps = {
  tag: "Development",
  header: "Embedded Systems",
  body:
    "In embedded systems, our core competencies are Linux-based systems. We have a particularly extensive experience in software for measuring and medical devices.",
}

const DemoComponentMobile = () => <Card {...cardProps} />

const DemoComponentDesktop = () => (
  <>
    <Card {...cardProps} />
    <Card {...cardProps} />
    <Card {...cardProps} />
    <Card {...cardProps} />
  </>
)

storiesOf("Card", module)
  .addDecorator(story => <StoryDecorator>{story()}</StoryDecorator>)
  .addParameters({ viewport: { defaultViewport: "widescreen" } })
  .add("Default", DemoComponentDesktop)
  .addParameters({ viewport: { defaultViewport: "iphone6p" } })
  .add("Mobile", DemoComponentMobile)
