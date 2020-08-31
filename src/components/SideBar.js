import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import NavList from "../styled-components/NavList"
import NavItem from "../styled-components/NavItem"
import Image from "./image"

const SideNav = styled.nav`
  position: ${props => props.position};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: #bd5d38;
  padding: 0.5rem 1rem;
  margin-bottom: 3rem;
  width: 100%;
  height: 7vh;

  @media (min-width: 992px) {
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    flex-direction: column;
    width: 17rem;
    height: 100vh;
    justify-content: center;
    align-items: center;
    padding-bottom: calc(10rem);
  }
`

const Profile = styled.div`
  @media (min-width: 992px) {
    display: block;
    margin: 30px 0;
  }
`
const Logo = styled.div`
  display: block;
  color: white;
  @media (min-width: 992px) {
    display: none;
  }
`

function SideBar() {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const onScrollMove = e => {
      const navFix = window.scrollY < 100
      navFix !== true
        ? setScroll(prevScroll => (prevScroll = true))
        : setScroll(prevScroll => (prevScroll = false))
    }
    window.addEventListener("scroll", onScrollMove)

    return () => {
      window.removeEventListener("scroll", onScrollMove)
    }
  }, [])

  return (
    <SideNav position={scroll ? "fixed" : "relative"}>
      <Logo>Logo</Logo>
      <Profile id="profile">
        <Link to="/">
          <Image />
        </Link>
      </Profile>
      <NavList primary>
        <NavItem>
          <Link className="nav-link" to="/" activeStyle={{ color: "white" }}>
            About
          </Link>
        </NavItem>
        <NavItem>
          <Link
            className="nav-link"
            to="/experience"
            activeStyle={{ color: "white" }}
          >
            Experience
          </Link>
        </NavItem>
        <NavItem>
          <Link
            className="nav-link"
            to="/education"
            activeStyle={{ color: "white" }}
          >
            Education
          </Link>
        </NavItem>
        <NavItem>
          <Link
            className="nav-link"
            to="/skills"
            activeStyle={{ color: "white" }}
          >
            Skills
          </Link>
        </NavItem>
      </NavList>
    </SideNav>
  )
}

export default SideBar
