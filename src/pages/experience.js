import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../styled-components/Section"

const TitleName = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #343a40;
  line-height: 1.5;
  text-transform: ${props => (props.primary ? "lowercase" : "uppercase")};
`

const SectionExp = styled(Section)`
  &.secExp {
    padding-top: 5rem;
  }
`

function Experience() {
  return (
    <Layout>
      <SEO title="Experience" />
      <SectionExp className="secExp">
        <TitleName>Experience</TitleName>
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab,
            delectus consectetur minima temporibus quae consequatur ducimus quo,
            reprehenderit quas cumque ipsum pariatur quis dolorum nisi autem
            suscipit provident nemo numquam. Accusantium asperiores laudantium
            quis minima, quidem veniam eligendi obcaecati odit commodi ipsa
            accusamus adipisci temporibus odio explicabo sunt numquam fugit
            dolorem animi eveniet velit dignissimos possimus laborum distinctio.
          </p>
        </div>
      </SectionExp>
    </Layout>
  )
}

export default Experience
