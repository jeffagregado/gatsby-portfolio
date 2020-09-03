import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faLinkedin,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../styled-components/Section"
import styled from "styled-components"
import Typography from "../styled-components/Typography"
import Experience from "./experience"
import Education from "./education"
import Skills from "./skills"
import { Link } from "gatsby"

const TitleName = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  color: #232946;
  line-height: 1;
  text-transform: uppercase;
`

const SubTitle = styled.span`
  font-family: "Saira Extra Condensed", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1.5rem;
  font-weight: 500;
  color: #232946;
  text-transform: ${props => (props.primary ? "lowercase" : "uppercase")};
`

const IndexPage = props => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            address
            contact
            email
          }
        }
      }
    `
  )
  return (
    <Layout>
      <SEO title="Home" />
      <Section id="about">
        <TitleName>{data.site.siteMetadata.author}</TitleName>
        <SubTitle>
          {data.site.siteMetadata.address} |{" "}
          <SubTitle primary>
            {data.site.siteMetadata.contact} |{" "}
            <span style={{ color: "#bd5d38" }}>
              {data.site.siteMetadata.email}
            </span>
          </SubTitle>
        </SubTitle>
        <Typography>
          Currently focusing in self-study and improving my skills in order to
          reach my dream to become a web developer. I'm a type of person who
          searched a lot in GOOGLE either if I'm curious, wants to learn, or
          something piqued my interest.
        </Typography>
        <div className="social-icons">
          <Link
            to="https://www.linkedin.com/in/jeffrey-andrew-agregado-77311760/"
            target="_blank"
          >
            <FontAwesomeIcon
              className="social-icon"
              icon={faLinkedin}
              size="5x"
            />
          </Link>
          <Link
            to="https://github.com/jeffagregado/gatsby-portfolio"
            target="_blank"
          >
            <FontAwesomeIcon
              className="social-icon"
              icon={faGithub}
              size="5x"
            />
          </Link>
          <Link to="https://twitter.com/drag00n3333" target="_blank">
            <FontAwesomeIcon
              className="social-icon"
              icon={faTwitter}
              size="5x"
            />
          </Link>
          <Link to="https://www.facebook.com/drag00n3333/" target="_blank">
            <FontAwesomeIcon
              className="social-icon"
              icon={faFacebook}
              size="5x"
            />
          </Link>
        </div>
      </Section>
      <hr />
      <Experience />
      <hr />
      <Education />
      <hr />
      <Skills />
    </Layout>
  )
}

export default IndexPage
