import React from "react";
import { HamburgerLine, StyledHamburgerButton } from "./style";

const HamburgerButton = ({ onClick }) => {
  return (
    <StyledHamburgerButton onClick={onClick}>
      <HamburgerLine initialWidth="60%" />
      <HamburgerLine initialWidth="80%" />
      <HamburgerLine initialWidth="100%" />
    </StyledHamburgerButton>
  );
};

export default HamburgerButton;
