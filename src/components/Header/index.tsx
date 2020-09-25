import React from "react"
import styled from "styled-components"
import { up } from "styled-breakpoints"
import colors from "../../constants/colors"
import { bodyBold } from "../../constants/typography"

const Container = styled.header`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid ${colors.divider};
  background-color: ${colors.white};

  ${up("laptop")} {
    height: 72px;
    border-bottom: none;
    box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.1);
  }
`

const Text = styled.div`
  ${bodyBold}
  color: ${colors.primary};
`

export interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  )
}

export default Header
