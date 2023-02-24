import React from "react";
import { StyledCircle, StyledCirclesWrapper } from "./style";

const Logo = ({size, margin})=>{
  return <StyledCirclesWrapper margin={margin||{}}>
    <StyledCircle color="secondary" size={size}></StyledCircle>
    <StyledCircle color="primary" size={size} margin={0}></StyledCircle>
  </StyledCirclesWrapper>
}

export default Logo;
