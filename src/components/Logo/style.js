import styled from "styled-components"

export const StyledCircle = styled.span`
display: inline-block;
height: ${(props)=>(props.size)}px;
width: ${(props)=>( props.size)}px;

margin-right: ${(props)=>(props.margin??(-props.size/2))}px;
background-color: ${(props)=>props.theme[props.color]};
border-radius: 50%;
`

export const StyledCirclesWrapper = styled.span`
display: inline-flex;
align-items: center;
margin-right:${(props)=>props.margin.right}px;
margin-left:${(props)=>props.margin.left}px;

`
