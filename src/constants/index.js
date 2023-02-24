import About from "layout/About";
import Home from "layout/Home";
import Portfolio from "layout/Portfolio";
export const routes = [
  { label: "Home", path: "/portfolio", component: <Home /> },
  { label: "About", path: "/portfolio/about", component: <About /> },
  { label: "Portfolio", path: "/portfolio/portfolio", component: <Portfolio /> },
  //{ label: "CONTACT", path: "/contact", component: <Fragment /> },
];
