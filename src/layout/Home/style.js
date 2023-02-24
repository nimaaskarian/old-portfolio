import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHome = styled.div`
position: relative;
  flex:1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.h1`
  font-family: poppins;
  font-size: 3.5em;
  margin: 0;
  font-weight: 700;
  text-align: center;
`;

export const TypewriterWrapper = styled.h3`
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 1.5em;
  font-family: raleway;
  & > * {
    display: inline-block;
  }
  margin-top: 20px;
`;

export const SocialMediaLink = styled.a`
  opacity: 0.55;
  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
  transition: all 0.4s ease;
  & > svg {
    width: 21px;
    fill: ${(props) => props.theme.primary};
  }
`;

export const SocialMediaLinks = styled.div`
  position: absolute;
  left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  @media only screen and (max-width: 1025px) {
    & {
      flex-direction: row;
      bottom: 0;
      height: initial;
      width: 100%;
    }
  }
`;
