import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const StyledMenu = styled.nav`
display: flex;
gap: 12px;
justify-content: end;
position: sticky;
top: 0px;
z-index: 1000;
background-color: ${(props)=>props.theme.bgSecondary};
`

export const DarkModeButton = styled.a`
margin: 20px 0;
cursor: pointer;
& > svg{
  fill: ${(props)=>props.theme.primary};
  transition: opacity 0.6s ease;
  opacity: .55;
  display: block;
  height: 24px;
  &:hover {
    opacity: 1;
  }`

export const StyledNavigationButton = styled(Link)`
  margin: 20px 0;
  font-family: raleway;
  opacity: ${(props) => (props.enabled ? "1" : "0.55")};
  transition: opacity 0.6s ease;
  font-size: 1.5em;
  &:hover {
    opacity: 1;


  }`
export const HomeNav = styled(StyledNavigationButton)`
margin-right:auto;
`
