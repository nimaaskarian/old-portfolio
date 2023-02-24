import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const appearAnimation = keyframes`
  0%{
    transform: translateY(-100%);
  }
  100%{
    transform: translateY(0);
  }
`;

const disappearAnimation = keyframes`
  0%{
    transform: translateY(0);
  }
  100%{
    transform: translateY(-100%);
  }
`;

export const StyledMenu = styled.div`
  overflow: hidden;
  padding: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  z-index: 5;
  background-color: ${(props) => props.theme.bgSecondary};
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => (props.enabled === null ? "none" : "flex")};
  animation-name: ${(props) =>
    props.enabled ? appearAnimation : disappearAnimation};
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
`;

export const StyledCloseButton = styled.button`
  background: transparent;
  top: 50px;
  right: 50px;
  border: none;
  outline: none;
  width: 48px;
  height: 48px;
  position: absolute;
  opacity: 0.55;
  transition: all 0.5s ease;
  &:hover {
    opacity: 1;
  }
  &::before,
  &::after {
    content: "";
    left: 50%;
    top: 50%;
    width: 0;
    height: 2px;
    border-color: ${(props) => props.theme.primary};
    border-left: 16px solid;
    border-right: 16px solid;
    position: absolute;
    transition: all 0.4s ease;
  }
  &::before {
    transform: translate3d(-50%, -50%, 0) rotate(-45deg);
  }
  &::after {
    transform: translate3d(-50%, -50%, 0) rotate(45deg);
  }
  &:hover::before,
  &:hover::after {
    width: 20px;
  }
  &:active::after,
  &:active::before {
    width: 0 !important;
  }
`;

export const StyledNavigationButton = styled(Link)`
  margin: 6px 0;
  font-family: poppins;
  opacity: ${(props) => (props.enabled ? "1" : "0.55")};
  transition: all 0.6s ease;
  font-size: 2.25em;
  &:hover {
    opacity: 1;
  }
  &:hover::before {
    opacity: 0.2;
    letter-spacing: 10px;
  }
  &::before {
    content: attr(data-text);
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    justify-content: center;
    transform: translate(-50%, -50%);
    align-items: center;
    font-size: 5em;
    font-weight: 400;
    font-family: monoton;
    z-index: 1;
    pointer-events: none;
    opacity: 0;
    letter-spacing: 100px;
    transition: all 0.4s ease;
  }
`;
