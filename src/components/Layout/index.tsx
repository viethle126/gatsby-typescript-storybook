import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../Header"
import Footer from "../Footer"

const Container = styled.main`
  display: flex;
  flex-direction: column;
`

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container>
      <Header title={data.site.siteMetadata.title} />
      {children}
      <Footer />
    </Container>
  )
}

export default Layout
