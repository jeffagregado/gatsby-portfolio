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

const TitleName = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  color: #343a40;
  line-height: 1;
  text-transform: uppercase;
`

const SubTitle = styled.span`
  font-family: "Saira Extra Condensed", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1.5rem;
  font-weight: 500;
  color: #6c757d;
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
          I am experienced in leveraging agile frameworks to provide a robust
          synopsis for high level overviews. Iterative approaches to corporate
          strategy foster collaborative thinking to further the overall value
          proposition.
        </Typography>
        <div className="social-icons">
          <FontAwesomeIcon
            className="social-icon"
            icon={faLinkedin}
            size="5x"
          />
          <FontAwesomeIcon className="social-icon" icon={faGithub} size="5x" />
          <FontAwesomeIcon className="social-icon" icon={faTwitter} size="5x" />
          <FontAwesomeIcon
            className="social-icon"
            icon={faFacebook}
            size="5x"
          />
        </div>
      </Section>
      <hr />
      <Experience />
      <hr />
      <Education />
    </Layout>
  )
}

export default IndexPage
