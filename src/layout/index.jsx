import React, { useState } from "react";
import GlobalStyle from "globalStyles";
import { ThemeProvider } from "styled-components";
import { nord } from "themes";
// import Menu from "./Menu";
import { Route, Routes } from "react-router-dom";
import { routes } from "constants";
import Navbar from "./Navbar";
import { Root, MainContentWrapper, MainWrapper } from "./style";
const Layout = () => {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("dark-mode"));
  const [isMenu, setIsMenu] = useState(false)
  const toggleIsMenu = () => setIsMenu(!isMenu)
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("dark-mode", !isDarkMode?"true":"")
  }
  return (
    <>
      <ThemeProvider theme={nord[isDarkMode?"dark":"light"] }>
        <GlobalStyle isMenu={isMenu}/>
        {/* <Menu active={isMenuActive} toggleActive={toggleMenuActive} /> */}
        {/* <HamburgerButton onClick={toggleMenuActive} /> */}
        <Root>
          <MainWrapper>
            <Navbar
              isMenu={isMenu} toggleIsMenu={toggleIsMenu}
              isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}
              />
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
        </Root>
      </ThemeProvider>
    </>
  );
};

export default Layout;
