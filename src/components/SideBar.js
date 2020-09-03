import React /* useEffect, useState*/ from "react"
import styled, { keyframes } from "styled-components"
import Scrollspy from "react-scrollspy"
import { pulse } from "react-animations"
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
  padding: 0.5rem 2rem;
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

  @media (max-width: 501px) {
    justify-content: center;
  }
`

const Profile = styled.div`
  @media (min-width: 992px) {
    display: block;
    margin: 30px 0;

    &:hover {
      animation: 1s ${keyframes`${pulse}`} infinite;
    }
  }
`
const Logo = styled.div`
  display: block;
  color: white;
  font-size: 1.5rem;
  letter-spacing: 0.4rem;
  @media (min-width: 992px) {
    display: none;
  }

  @media (max-width: 501px) {
    font-size: 1rem;
  }
`
const ButtonMenu = styled.div`
  display: none;
  @media (max-width: 992px) {
    display: block;
  }
`

function SideBar() {
  // === Fixed NavBar ==============================
  /*   const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const onScrollMove = e => {
      const navFix = window.scrollY < 110
      navFix !== true
        ? setScroll(prevScroll => (prevScroll = true))
        : setScroll(prevScroll => (prevScroll = false))
    }
    window.addEventListener("scroll", onScrollMove)

    return () => {
      window.removeEventListener("scroll", onScrollMove)
    }
  }, []) */
  // === End Fixed NavBar ==============================

  // === Menu Button ==============================
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  /*   const [menuAppear, setMenuAppear] = useState(false)

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
  }, []) */
  // === End Menu Button ==============================

  // onScroll
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]', {
      speed: 1000,
      speedAsDuration: true,
      easing: "easeInOutCubic",
    })
  }

  return (
    <SideNav position={"fixed"}>
      <Link to="/">
        <Logo>Agregado</Logo>
      </Link>
      <Profile>
        <Link className="animate" to="/">
          <Image />
        </Link>
      </Profile>
      <ButtonMenu>
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
          <Link to="/#about">
            <MenuItem onClick={handleClose}>About</MenuItem>
          </Link>
          <Link to="/#experience">
            <MenuItem onClick={handleClose}>My Experience</MenuItem>
          </Link>
          <Link to="/#education">
            <MenuItem onClick={handleClose}>Education</MenuItem>
          </Link>
          <Link to="/#skills">
            <MenuItem onClick={handleClose}>Skills</MenuItem>
          </Link>
        </Menu>
      </ButtonMenu>
      <Scrollspy
        componentTag={NavList}
        items={["about", "experience", "education", "skills"]}
        currentClassName="is-current"
      >
        <NavItem>
          <Link
            className="nav-link"
            to="/#about"
            activeStyle={{ color: "white" }}
          >
            About
          </Link>
        </NavItem>
        <NavItem>
          <Link
            className="nav-link"
            to="/#experience"
            activeStyle={{ color: "white" }}
          >
            Experience
          </Link>
        </NavItem>
        <NavItem>
          <Link
            className="nav-link"
            to="/#education"
            activeStyle={{ color: "white" }}
          >
            Education
          </Link>
        </NavItem>
        <NavItem>
          <Link
            className="nav-link"
            to="/#skills"
            activeStyle={{ color: "white" }}
          >
            Skills
          </Link>
        </NavItem>
      </Scrollspy>
    </SideNav>
  )
}

export default SideBar
