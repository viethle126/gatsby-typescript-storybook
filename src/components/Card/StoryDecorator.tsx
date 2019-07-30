import React from "react"
import styled from "styled-components"
import colors from "../../constants/colors"
import breakpoints from "../../constants/breakpoints"

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${colors.black};
`

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 44px 22px;
  justify-content: space-between;

  @media ${breakpoints.desktop} {
    padding: 204px 0;
    max-width: 1440px;
    margin: 0 auto;
  }
`

const StoryDecorator: React.FC = props => {
  return (
    <Container>
      <Wrapper>{props.children}</Wrapper>
    </Container>
  )
}

export default StoryDecorator
