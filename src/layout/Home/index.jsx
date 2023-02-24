import React from "react";
import TypewriterComponent from "typewriter-effect";
import Colored from "components/Colored";
import { ReactComponent as LinkedIn } from "assets/svg/linkedin.svg";
import { ReactComponent as Github } from "assets/svg/github.svg";
import { ReactComponent as Telegram } from "assets/svg/telegram.svg";
import {
  Header,
  SocialMediaLink,
  SocialMediaLinks,
  StyledHome,
  TypewriterWrapper,
} from "./style";

const Home = (Home) => {
  return (
    <StyledHome>
      <SocialMediaLinks>
        <SocialMediaLink href="https://github.com/nimaaskarian">
          <Github />
        </SocialMediaLink>
        <SocialMediaLink href="https://t.me/nimaaskarian">
          <Telegram />
        </SocialMediaLink>
        <SocialMediaLink href="https://www.linkedin.com/in/nima-askarian-36a934233/">
          <LinkedIn />
        </SocialMediaLink>
        {/*
        <SocialMediaLink href="https://instagram.com">
          <Instagram />
        </SocialMediaLink>
        <SocialMediaLink href="https://facebook.com">
          <Facebook />
        </SocialMediaLink>
        <SocialMediaLink href="https://twitter.com">
          <Twitter />
        </SocialMediaLink>
*/}
      </SocialMediaLinks>
      <div>
        <Header>
          Nima Askarian
        </Header>
        <TypewriterWrapper>
          {"I'm a "}
          <Colored>
            <TypewriterComponent
              options={{
                skipAddStyles: true,
                strings: [
                  "Developer.",
                  "Designer.",
                  "Programmer.",
                  "Freelancer.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </Colored>
        </TypewriterWrapper>
      </div>
    </StyledHome>
  );
};

export default Home;
