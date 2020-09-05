import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faSass,
  faNpm,
  //faNodeJs,
} from "@fortawesome/free-brands-svg-icons"
/* import { Icon, InlineIcon } from "@iconify/react"
import gatsbyIcon from "@iconify/icons-simple-icons/gatsby" */
import SEO from "../components/seo"
import Section from "../styled-components/Section"
import { Fade } from "react-reveal"

const TitleName = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #232946;
  line-height: 1.5;
  text-transform: ${props => (props.primary ? "lowercase" : "uppercase")};
`

const SectionSkills = styled(Section)`
  .tools {
    margin: 10px 0;
    text-transform: uppercase;
  }
  .sub-skills {
    font-size: 1.5rem;
    font-weight: 500;
  }

  .edc-date {
    font-size: 1.3rem;
    color: #bd5d38;
    float: right;
  }

  .dev-icons {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin: 1rem 0;

    li {
      text-align: center;
    }

    @media (max-width: 415px) {
      display: flex;
      flex-direction: column;
      gap: 0;

      li {
        margin-bottom: 1rem;
      }
    }
  }
`

function Skills() {
  return (
    <>
      <SEO title={"Skills"} />
      <SectionSkills id="skills">
        <Fade left cascade>
          <TitleName>Skills</TitleName>
          <div className="tools">
            <h3 className="sub-skills">PROGRAMMING LANGUAGES & TOOLS</h3>
            <ul className="dev-icons">
              <li>
                <FontAwesomeIcon icon={faHtml5} size="4x" />
                <div>HTML5</div>
              </li>
              <li>
                <FontAwesomeIcon icon={faCss3Alt} size="4x" />
                <div>CSS3</div>
              </li>
              <li>
                <FontAwesomeIcon icon={faSass} size="4x" />
                <div>SASS/SCSS</div>
              </li>
              <li>
                <FontAwesomeIcon icon={faJsSquare} size="4x" />
                <div>Javascript</div>
              </li>
              <li>
                <FontAwesomeIcon icon={faReact} size="4x" />
                <div>React Js</div>
              </li>
              <li>
                <FontAwesomeIcon icon={faNpm} size="4x" />
                <div>NPM</div>
              </li>
            </ul>
          </div>
        </Fade>
      </SectionSkills>
    </>
  )
}

export default Skills
