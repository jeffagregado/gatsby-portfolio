import React from "react"
//import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Section from "../styled-components/Section"

const TitleName = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #343a40;
  line-height: 1.5;
  text-transform: ${props => (props.primary ? "lowercase" : "uppercase")};
`

function Education() {
  return (
    <div id="education">
      {/* <Layout> */}
      <SEO title={"Education"} />
      <Section>
        <TitleName>Education</TitleName>
      </Section>
      {/* </Layout> */}
    </div>
  )
}

export default Education
