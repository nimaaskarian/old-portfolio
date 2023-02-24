import { Article } from "components/Article";
import Url from "components/Url";
import Container from "components/Container";
import { Header, MainHeaderWrapper } from "components/Header";
import NitabScreenShot from "assets/image/nitab-scrsht.png";
import EnigmaJsScreenShot from "assets/image/enigma-js-scrsht.png";
import React from "react";
import StyledImage from "components/Image";
import { WorksWrapper } from "./style";
import Colored from "components/Colored";

const Portfolio = () => {
  return (
    <Container>
      <MainHeaderWrapper>
        <Colored>
          <h1>
            Portfolio
          </h1>
        </Colored>
        My Work
      </MainHeaderWrapper>
      <WorksWrapper>
        <div>
            <Header>Nitab</Header>
            <StyledImage src={NitabScreenShot} />
          <Article>
            <Url href="https://github.com/nimaaskarian/nitab" target="about:blank"
            >Nitab</Url> is a fully customizable{" "}
            and advanced start page and new tab extension for all browsers,
            powered by React, 
            styled-components, 
            JavaScript and couple of third party APIs
            .
          </Article>
        </div>
        <div>
          <a
          >
            <Header>Enigma-JS</Header>
            <StyledImage src={EnigmaJsScreenShot} />
          </a>
          <Article>
            <Url href="https://nimaaskarian.github.io/enigma-js/" target="about:blank"
            >Enigma-JS</Url> is a minimal web application that has the logic of
            1930s
             Enigma with a minimal and modern look and feel.
            it's written in pure JavaScript, 
            HTML and CSS.
          </Article>
        </div>
      </WorksWrapper>
    </Container>
  );
};

export default Portfolio;
