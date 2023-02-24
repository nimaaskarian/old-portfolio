import styled from "styled-components"

export const MainWrapper = styled.div`
  background-color:${(props) => props.theme.bgSecondary};
    padding: 60px;
  padding-top: 0 !important;
    height: 100%;
    min-height:100vh;
    display: flex;
    flex-direction: column;
  @media only screen and (max-width: 768px) {
    & {
      padding: 20px;
    }
  }
`

export const MainContentWrapper = styled.div`
  background-color: ${(props)=>props.theme.bg};
  padding: 20px;
  border-radius: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
`
