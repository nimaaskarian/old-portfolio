import { routes } from "constants";
import React from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as DarkModeOff } from "assets/svg/sun-bright.svg";
import { ReactComponent as DarkModeOn } from "assets/svg/moon.svg";
import { HomeNav, StyledMenu,DarkModeButton, StyledNavigationButton } from "./style";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const location = useLocation();
  return (
    <StyledMenu>
      {routes.map((route) => {
        let ButtonComponent = StyledNavigationButton
        if (route.label == "Home") ButtonComponent = HomeNav
        return (
          <ButtonComponent
            key={route.path}
            to={route.path}
            enabled={location.pathname === route.path}
            data-text={route.label}
          >
            {route.label}
          </ButtonComponent>
        );
      })}
      <DarkModeButton onClick={toggleDarkMode}>
        {isDarkMode? <DarkModeOff/>:<DarkModeOn/>}
      </DarkModeButton>
    </StyledMenu>
  );
};

export default Navbar;
