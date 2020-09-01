import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../styled-components/Section"
import styled from "styled-components"
import Typography from "../styled-components/Typography"

const TitleName = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #343a40;
  line-height: 1.5;
  text-transform: ${props => (props.primary ? "lowercase" : "uppercase")};
`

const SubTitle = styled(TitleName)`
  font-size: 1.3rem;
  font-weight: 500;
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
      <Section>
        <TitleName>{data.site.siteMetadata.author}</TitleName>
        <SubTitle>{data.site.siteMetadata.address}</SubTitle>
        <SubTitle primary>
          {data.site.siteMetadata.contact} |{" "}
          <span style={{ color: "#bd5d38" }}>
            {data.site.siteMetadata.email}
          </span>
        </SubTitle>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
          voluptate recusandae cumque alias asperiores voluptas, nostrum
          veritatis consequatur dolor quasi facere, odit fugiat iste numquam!
          Quaerat dicta cupiditate totam vero voluptate ex. Officiis facere
          quaerat, quisquam veritatis, vel ipsa at provident corporis
          reprehenderit, tempora voluptatum numquam perspiciatis quia obcaecati
          architecto!
        </Typography>
      </Section>
    </Layout>
  )
}

export default IndexPage
