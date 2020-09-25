import React from "react"
import styled from "styled-components"
import { up } from "styled-breakpoints"
import { h1 } from "../constants/typography"
import Layout from "../components/Layout"
import Helmet from "../components/Helmet"

const Container = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  height: calc(100vh - 60px - 84px);
  padding: 0 20px;

  ${up("laptop")} {
    height: calc(100vh - 72px - 148px);
    padding: 0;
  }
`

const H1 = styled.h1`
  ${h1}
`

const NotFoundPage = () => (
  <Layout>
    <Helmet title="404: Not found" />
    <Container>
      <H1>NOT FOUND</H1>
    </Container>
  </Layout>
)

export default NotFoundPage
