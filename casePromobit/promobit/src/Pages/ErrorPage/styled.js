import styled from "styled-components"

export const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

 
  h1 {
    width: 64vw;
    max-width: 550px;
    text-align: center;
  }
  button{
    height: 40px;
    width: 80px;
    background: rgb(125, 22, 204);
    border-radius: 10px;
    border: 1px solid transparent;
    transition: all .3s
    
    }
    
`
export const ErrorImage = styled.img`
  border-radius: 50%;
  width: 64vw;
  max-width: 550px;
  margin-bottom:10px;
 
`
