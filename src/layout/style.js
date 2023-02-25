import styled from "styled-components"

export const StyledRoot = styled.div`
  background-color:${(props) => props.theme.bgSecondary};
  padding: 0 60px;
  @media only screen and (max-width: 768px) {
    & {
      padding: 0 20px;
    }
  }
`

export const MainWrapper = styled.div`
  padding-bottom: 60px;
  background-color:${(props) => props.theme.bgSecondary};
  height: 100%;
  min-height:100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1200px;
`

export const MainContentWrapper = styled.div`
  background-color: ${(props)=>props.theme.bg};
  padding: 15px;
  border-radius: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
`
