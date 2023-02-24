import { routes } from "constants";
import {useEffect,useState} from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as DarkModeOff } from "assets/svg/sun-bright.svg";
import { ReactComponent as DarkModeOn } from "assets/svg/moon.svg";
import { HomeWrapper, StyledNav,DarkModeButton, StyledNavigationButton, StyledMenu } from "./style";
import HamburgerButton from "./components/HamburgerIcon";
import Logo from "components/Logo";

const HOME_PATH="/portfolio"
const SCROLL_OFFSET=30
const Navbar = ({ isMenu,toggleIsMenu,isDarkMode, toggleDarkMode }) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(window.scrollY > SCROLL_OFFSET);
  useEffect(()=>{
    const handleScroll = ()=>{
      setIsScrolled(window.scrollY > SCROLL_OFFSET);
    }
    window.addEventListener("scroll", handleScroll)

    return ()=>{
      window.removeEventListener("scroll", handleScroll)
    }
  })
  const home = routes.find(e=>e.path===HOME_PATH)
  const mappedData = (isHome)=>{
    return routes.filter(e=>e.path!== HOME_PATH).map((route) => {
      return (
        <StyledNavigationButton
          onClick={isMenu && toggleIsMenu}
          isHome={isHome}
          key={route.path}
          to={route.path}
          enabled={location.pathname === route.path}
          data-text={route.label}
        >
          {route.label}
        </StyledNavigationButton>
      );
    })
  }
  return (
    <StyledNav>
      <HomeWrapper onClick={isMenu && toggleIsMenu}>
        <StyledNavigationButton isHome={true}  to={home.path} enabled={true}><Logo size={30}/>
        </StyledNavigationButton>
        {!isScrolled && <StyledNavigationButton isHome={true} to={home.path} enabled={location.pathname === home.path}>{home.label}</StyledNavigationButton>}
      </HomeWrapper>
      <HamburgerButton onClick={toggleIsMenu}/>
      <StyledMenu enabled={isMenu}>
        {mappedData(true)}
      </StyledMenu>
      {mappedData()}
      <DarkModeButton onClick={toggleDarkMode}>
        {isDarkMode? <DarkModeOff/>:<DarkModeOn/>}
      </DarkModeButton>
    </StyledNav>
  );
};

export default Navbar;
