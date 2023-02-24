import React from "react";
import { StyledHamburgerButton } from "./style";
import { ReactComponent as Bars } from "assets/svg/bars.svg";

const HamburgerButton = ({ onClick }) => {
  return (
    <StyledHamburgerButton onClick={onClick}>
      <Bars/>
    </StyledHamburgerButton>
  );
};

export default HamburgerButton;
