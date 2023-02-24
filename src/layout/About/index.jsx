import { Article } from "components/Article";
import Url from "components/Url";
import Container from "components/Container";
import { Header, MainHeaderWrapper } from "components/Header";
import React from "react";
import ProgressBar from "./components/ProgressBar";
import { SkillsWrapper } from "./style";
import Colored from "components/Colored";

const About = () => {
  return (
    <Container>
      <div>
        <MainHeaderWrapper>
          <Colored>
            <h1>
              About Me
            </h1>
          </Colored>
          Who am I?
        </MainHeaderWrapper>
      </div>
      <Header>
        A young and creative Front-End
        Developer
      </Header>
      <Article first>
        I'm Nima Askarian. A 18 year old Front-End developer
        from Iran, Tehran. I started my programming journey about 6 years ago.
        I'm intersted in computers, algorithms, mathematics open-source and
        free software, and of course, Front-End Development.
      </Article>
      <Article>
        I'm always eager to learn new things. I love being challenged and in the process, 
        learning something new.
        I've been studying and working as a Front-End Developer for almost 4
        years. In this few years, I acquired some of the skills to design
        and build Front-End applications for modern web.
      </Article>
      <Article>
        I've come from a relatively long journey that taught me how to try to
        build a unique piece of software. I'm also trying my best to contribute to open-source community. Even the sources of this
        portfolio itself is available for you to see! You can check this portfolio and my other work out on <Url href="https://github.com">Github</Url> if you're interested.
        I will be glad to get a chance to build one for you.
      </Article>
      <Header>Skills</Header>
      <SkillsWrapper>
        <ProgressBar title="HTML5/CSS3" progressPercentage={95} />
        <ProgressBar title="JavaScript (ES5-ES8)" progressPercentage={90} />
        <ProgressBar title="React" progressPercentage={85} />
        <ProgressBar
          title="Styled-Components/emotion"
          progressPercentage={85}
        />
        <ProgressBar title="Adobe PS" progressPercentage={83} />
        <ProgressBar title="MUI" progressPercentage={75} />
        <ProgressBar title="Semantic UI" progressPercentage={68} />
        <ProgressBar title="Bootstrap 4/5" progressPercentage={68} />
        <ProgressBar title="jQuery" progressPercentage={65} />
      </SkillsWrapper>
    </Container>
  );
};

export default About;
