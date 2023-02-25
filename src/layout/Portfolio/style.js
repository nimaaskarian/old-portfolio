import styled from "styled-components";

export const WorksWrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  & > * {
    flex-grow: 1;
    flex-basis: 100%;
  }
  @media only screen and (min-width: 1200px) {
    & > * {
      flex-basis: 40%;
    }
  }
`;
