import React from "react"
import SEO from "../components/seo"
import Section from "../styled-components/Section"
import styled from "styled-components"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typhography from "../styled-components/Typography"
import TodoImg from "../images/todolist.png"
import BeachImg from "../images/beach-resort.png"
import { Link } from "gatsby"

const TitleName = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #232946;
  line-height: 1.5;
  text-transform: ${props => (props.primary ? "lowercase" : "uppercase")};
`

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: "#232946",
    color: "white",
  },
})

const SectionProj = styled(Section)``

const TyphoProj = styled(Typhography)`
  margin: 0;
`

const ProjCard = styled.div`
  margin: 1rem;
  display: flex;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`

function Projects() {
  const classes = useStyles()

  return (
    <>
      <SEO title={"Projects"} />
      <SectionProj id="projects">
        <TitleName>Projects</TitleName>
        <ProjCard>
          <Link
            to="https://todo-app-cp-374bb.web.app/"
            target="_blank"
            style={{ margin: "1rem" }}
          >
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Todo List"
                  height="100"
                  image={TodoImg}
                  title="Todo List"
                  style={{ height: "200px" }}
                />
                <CardContent>
                  <TyphoProj style={{ color: "white" }}>Todo List</TyphoProj>
                  <TyphoProj style={{ color: "white" }}>
                    Used: Gatsby Js | Firebase
                  </TyphoProj>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>

          <Link
            to="https://react-beach-resort-jeffproject.netlify.app/"
            target="_blank"
            style={{ margin: "1rem" }}
          >
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Beach Resort"
                  height="100"
                  image={BeachImg}
                  title="Todo List"
                  style={{ height: "200px" }}
                />
                <CardContent>
                  <TyphoProj style={{ color: "white" }}>Beach Resort</TyphoProj>
                  <TyphoProj style={{ color: "white" }}>
                    Used: React Js | Contentful
                  </TyphoProj>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </ProjCard>
      </SectionProj>
    </>
  )
}

export default Projects
