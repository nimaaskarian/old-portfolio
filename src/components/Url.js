import styled from "styled-components";

export default styled.a`
  &,
  & * {
    color: ${(props) => props.theme.secondary};
  }
  text-decoration: underline;
  cursor: pointer;
`;
