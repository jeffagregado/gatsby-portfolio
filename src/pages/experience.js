import React from "react"
import styled from "styled-components"
//import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../styled-components/Section"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { graphql, useStaticQuery } from "gatsby"

const TitleName = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #343a40;
  line-height: 1.5;
  text-transform: ${props => (props.primary ? "lowercase" : "uppercase")};
`

const SectionExp = styled(Section)`
  .secExp {
    padding-top: 5rem;
  }

  .exp-post {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
  }

  .job-title {
    font-size: 2rem;
    font-weight: 700;
    color: #343a40;
  }

  .job-comp {
    font-size: 1.5rem;
    font-weight: 500;
  }

  .job-date {
    font-size: 1.3rem;
    color: #bd5d38;
    float: right;

    @media (max-width: 675px) {
      float: none;
    }
  }

  .job-desc {
    padding: 1rem;
  }

  .job-desc ul {
    list-style: disc;
  }

  @media (max-width: 992px) {
    &.secExp {
      padding-top: 3rem;
    }
  }

  footer {
    font-size: 0.7rem;
    margin-top: 2rem;
    float: right;
  }
`

function Experience() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulGatsbyPortfolio(sort: { fields: jobStart, order: DESC }) {
        edges {
          node {
            jobTitle
            company
            jobStart(formatString: "MMM Do, YYYY")
            jobEnd(formatString: "MMM Do, YYYY")
            jobDesc {
              json
            }
          }
        }
      }
    }
  `)

  return (
    <div id="experience">
      {/* <Layout> */}
      <SEO title="Experience" />
      <SectionExp className="secExp">
        <TitleName>Experience</TitleName>
        <div>
          {data.allContentfulGatsbyPortfolio.edges.map(edge => {
            return (
              <div className="exp-post">
                <h2 className="job-title">
                  {edge.node.jobTitle}
                  <div className="job-date">
                    {edge.node.jobStart} - {edge.node.jobEnd}
                  </div>
                </h2>
                <h3 className="job-comp">{edge.node.company}</h3>
                <div className="job-desc">
                  {documentToReactComponents(edge.node.jobDesc.json)}
                </div>
              </div>
            )
          })}
        </div>

        <footer>
          Powered by: <strong>CONTENTFUL</strong>
        </footer>
      </SectionExp>
      {/* </Layout> */}
    </div>
  )
}

export default Experience
