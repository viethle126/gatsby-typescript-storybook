import React from "react"
import styled from "styled-components"
import colors from "../../constants/colors"
import breakpoints from "../../constants/breakpoints"

const Container = styled.div`
  width: 100%;
  height: 504px;
  padding: 60px 40px;
  background-color: ${colors.white};
  border-radius: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.13);

  @media ${breakpoints.desktop} {
    width: 24%;
    height: 692px;
    padding: 70px 120px 42px 48px;
  }
`

const Tag = styled.h4`
  margin-bottom: 24px;
  font-family: "Roboto Bold";
  font-style: normal;
  font-weight: 800;
  font-size: 11px;
  line-height: 22px;
  letter-spacing: 1.83333px;
  text-transform: uppercase;
  color: ${colors.primary};

  @media ${breakpoints.desktop} {
    font-size: 13px;
    letter-spacing: 2.16667px;
  }
`

const Header = styled.h2`
  margin-bottom: 36px;
  font-family: "Roboto Bold";
  font-style: normal;
  font-weight: 800;
  font-size: 26px;
  line-height: 33px;
  color: ${colors.black};

  @media ${breakpoints.desktop} {
    margin-bottom: 92px;
  }
`

const Body = styled.p`
  font-family: "Roboto Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 27px;
  color: ${colors.black};

  @media ${breakpoints.desktop} {
    font-size: 18px;
    line-height: 33px;
  }
`

export interface CardProps {
  tag: string
  header: string
  body: string
}

const Card: React.FC<CardProps> = ({ tag, header, body }) => {
  return (
    <Container>
      <Tag>{tag}</Tag>
      <Header>{header}</Header>
      <Body>{body}</Body>
    </Container>
  )
}

export default Card
