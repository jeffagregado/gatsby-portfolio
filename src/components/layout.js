/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

// import Header from "./header"
import SideBar from "./SideBar"
import "../global.scss"
import Container from "../styled-components/Container"

const Layout = ({ children }) => {
  return (
    <>
      <SideBar />
      <Container>
        <main>{children}</main>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
