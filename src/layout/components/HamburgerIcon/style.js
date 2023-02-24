import styled from "styled-components";

export const StyledHamburgerButton = styled.a`
  cursor: pointer;
  position: fixed;
  z-index: 4;
  right: 60px;
  top: 60px;
  transition: all 0.5s ease;
  opacity: 0.55;
  &:hover{
    opacity: 1;
  }
  & > *:not(& > *:last-child) {
    margin-bottom: 5px;
  }
  &:hover > *::before {
    width: 100%;
  }
`;

export const HamburgerLine = styled.span`
  width: 35px;
  position: relative;
  height: 2px;
  background-color: transparent;
  display: block;
  &::before {
    transition: all 0.4s ease;
    content: "";
    background-color: ${(props)=>props.theme.primary};
    position: absolute;
    height: 100%;
    width: ${({ initialWidth }) => initialWidth || "100%"};
    top: 0;
    right: 0;
  }
`;
