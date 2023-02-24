import React, { useState } from "react";
import GlobalStyle from "globalStyles";
// import HamburgerButton from "./components/HamburgerIcon";
import { ThemeProvider } from "styled-components";
import { defaultDark, nordDark, nordLight, tealLight } from "themes";
// import Menu from "./Menu";
import { Route, Routes } from "react-router-dom";
import { routes } from "constants";
import Navbar from "./Navbar";
import { MainContentWrapper, MainWrapper } from "./style";
const Layout = () => {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("dark-mode"));
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("dark-mode", !isDarkMode?"true":"")
  }
  return (
    <>
      <ThemeProvider theme={isDarkMode? nordDark:nordLight}>
        <GlobalStyle />
        {/* <Menu active={isMenuActive} toggleActive={toggleMenuActive} /> */}
        {/* <HamburgerButton onClick={toggleMenuActive} /> */}
        <MainWrapper>
          <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
          <MainContentWrapper>
            <Routes>
              {routes.map((route) => {
                return (
                  <Route
                    path={route.path}
                    key={route.path}
                    element={route.component}
                    />
                );
              })}
            </Routes>
          </MainContentWrapper>
        </MainWrapper>
      </ThemeProvider>
    </>
  );
};

export default Layout;
