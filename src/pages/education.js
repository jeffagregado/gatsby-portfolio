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

const SectionEdc = styled(Section)`
  .edc {
    margin: 10px 0;
    text-transform: uppercase;
  }
  .school {
    font-size: 2rem;
    font-weight: 700;
    color: #343a40;
  }

  .edc-date {
    font-size: 1.3rem;
    color: #bd5d38;
    float: right;

    @media (max-width: 605px) {
      float: none;
    }
  }

  .course {
    font-size: 1.5rem;
    font-weight: 500;
  }
`

function Education() {
  return (
    <div id="education">
      {/* <Layout> */}
      <SEO title={"Education"} />
      <SectionEdc>
        <TitleName>Education</TitleName>
        <div className="edc">
          <h2 className="school">
            AMA Computer University
            <div className="edc-date">Year 2007 - 2013</div>
          </h2>
          <h3 className="course">
            BACHELOR OF SCIENCE IN COMPUTER ENGINEERING
          </h3>
        </div>
        <div className="edc">
          <h2 className="school">
            Villagers Montessori College
            <div className="edc-date">Year 2005 - 2007</div>
          </h2>
          <h3 className="course">Highschool</h3>
        </div>
        <div className="edc">
          <h2 className="school">
            Nyongani School INC.
            <div className="edc-date">Year 2003 - 2005</div>
          </h2>
          <h3 className="course">Highschool</h3>
        </div>
      </SectionEdc>
      {/* </Layout> */}
    </div>
  )
}

export default Education
