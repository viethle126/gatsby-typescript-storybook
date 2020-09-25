import React from "react"
import styled from "styled-components"
import { up } from "styled-breakpoints"
import colors from "../../constants/colors"
import { bodyBold } from "../../constants/typography"

const Container = styled.footer`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  padding: 32px;
  background-color: ${colors.obsidian};

  ${up("laptop")} {
    padding: 64px;
  }
`

const Text = styled.div`
  ${bodyBold}
  color: ${colors.slateLight};
`

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <Container>
      <Text>Footer</Text>
    </Container>
  )
}

export default Footer
