import styled from "styled-components"

export const StyledCircle = styled.span`
display: inline-block;
height: ${(props)=>(props.size)}em;
width: ${(props)=>( props.size)}em;

margin-right: ${(props)=>(props.margin??(-props.size/2))}em;
background-color: ${(props)=>props.theme[props.color]};
border-radius: 50%;
`

export const StyledCirclesWrapper = styled.span`
display: inline-flex;
align-items: center;
margin-right:${(props)=>props.margin.right}px;
margin-left:${(props)=>props.margin.left}px;

`
