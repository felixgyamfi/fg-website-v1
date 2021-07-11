import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"

import Project from "../components/Project"
import Seo from "../components/seo"

const Home = styled(Project)`
`;

const Project1 = styled(Project)`
`;
const Project2 = styled(Project)`
`;

const IndexPage = () => (
  <>
  <Home backgroundColor="lightblue" top="1000" left="2000">
    <Seo title="Homer" />
    <h1>Landing Page</h1>
    <p>Paragraph</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </p>
  </Home>
  <Project1 backgroundColor="lightpink">
    <Seo title="P1" />
    <h1>Project 1</h1>
    <p>Paragraph</p>
  </Project1>
  <Project2 backgroundColor="lightgreen" top="2000" left="6000">
    <Seo title="P1" />
    <h1>Project 2</h1>
    <p>Paragraph</p>
  </Project2>
  </>
)

export default IndexPage
