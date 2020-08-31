import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import MenuIcon from "@material-ui/icons/Menu"

import NavList from "../styled-components/NavList"
import NavItem from "../styled-components/NavItem"
import Image from "./image"

// Styled Component
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
  font-size: 1.5rem;
  letter-spacing: .4rem;
  @media (min-width: 992px) {
    display: none;
  }
`
// === Fixed NavBar ==============================
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
  // === End Fixed NavBar ==============================

  // === Menu Button ==============================
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const [menuAppear, setMenuAppear] = useState(false)

  console.log(menuAppear)

  useEffect(() => {
    const windowSize = e => {
      const winSize = window.innerWidth < 995
      winSize !== true
        ? setMenuAppear(preveMenuAppear => (preveMenuAppear = false))
        : setMenuAppear(preveMenuAppear => (preveMenuAppear = true))
    }
    window.addEventListener("resize", windowSize)

    return () => {
      window.removeEventListener("resize", windowSize)
    }
  }, [])
  // === End Menu Button ==============================

  return (
    <SideNav position={scroll ? "fixed" : "relative"}>
      <Logo>Jeffrey Agregado</Logo>
      <Profile id="profile">
        <Link to="/">
          <Image />
        </Link>
      </Profile>
      {menuAppear ? (
        <div>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon style={{ color: "white" }} />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link to="/">
              <MenuItem onClick={handleClose}>About</MenuItem>
            </Link>
            <Link to="/experience">
              <MenuItem onClick={handleClose}>My Experience</MenuItem>
            </Link>
            <Link to="/education">
              <MenuItem onClick={handleClose}>Education</MenuItem>
            </Link>
            <Link to="/skills">
              <MenuItem onClick={handleClose}>Skills</MenuItem>
            </Link>
          </Menu>
        </div>
      ) : null}

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
