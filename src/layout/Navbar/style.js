import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
padding: 20px 0;
display: flex;
gap: 12px;
justify-content: end;
position: sticky;
align-items: center;
top: 0px;
z-index: 1000;
background-color: ${(props)=>props.theme.bgSecondary};
`

export const StyledMenu = styled.nav`
  transition: height ease 0.5s, background-color ease .4s;
  overflow: hidden;
  & > *{
    text-align: center;
  }
  gap: 20px;
  height: 0;
  height: ${(props)=>props.enabled && "calc(100vh - 70px)"};
  display: flex;
  flex-direction: column;
  position: absolute;
  width:100%;
  top: 100%;
  z-index: 1000;
  background-color: ${(props)=>props.theme.bgSecondary};
  @media only screen and (min-width: 769px) {
    & {
      display: none;
    }
  }
`

export const DarkModeButton = styled.a`
cursor: pointer;
& > svg{
  fill: ${(props)=>props.theme.primary};
  transition: opacity 0.6s ease;
  opacity: .55;
  display: block;
  height: 30px;
  &:hover {
    opacity: 1;
  }
}`

export const StyledNavigationButton = styled(Link)`
  display: flex;
  justify-content: center;
  font-family: raleway;
  opacity: ${(props) => (props.enabled ? "1" : "0.55")};
  transition: opacity 0.6s ease;
  font-size: 1.5em;
  &:hover {
    opacity: 1;
  }
  @media only screen and (max-width: 768px) {
    & {
      display: ${(props)=>!props.isHome&&"none"};
    }

  }`
export const HomeWrapper = styled.span`
display: flex;
align-items: center;
gap: 8px;
margin-right:auto;
`
