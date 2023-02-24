import styled from "styled-components";

export const StyledHamburgerButton = styled.a`
  cursor: pointer;
  z-index: 4;
  transition: all 0.5s ease;
  opacity: 0.55;
  display: none;
  @media only screen and (max-width: 768px) {
    & {
      display: inline;
    }
  }
  &:hover{
    opacity: 1;
  }
  & > svg {
    height:1.5em;
    fill: ${(props)=>props.theme.primary}
  }
`;
