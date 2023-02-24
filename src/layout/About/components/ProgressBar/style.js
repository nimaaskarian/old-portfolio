import styled, { keyframes } from "styled-components";

export const ProgressWrapper = styled.div`
  width: 100%;
  position: relative;
  height: 35px;
  border-radius: 5px;
  padding: 5px;
  background-color: ${(props) => props.theme.bgSecondary};
`;
const fillUp = keyframes`
0%{
  width: 0;
}
100%{
}
`;

export const Progress = styled.div`
  text-align: center;
  animation-name: ${fillUp};
  animation-duration: 1.5s;
  animation-timing-function: ease;
  width: ${({ percentage }) => `calc(${percentage}% - 10px)`};
  border-radius: 3px;
  position: absolute;
  height: calc(100% - 10px);
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.bg};
`;
