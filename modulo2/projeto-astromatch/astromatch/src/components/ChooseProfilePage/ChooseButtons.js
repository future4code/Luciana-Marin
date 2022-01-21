import React from 'react';
import styled from 'styled-components';

const  ButtonsContainer = styled.div`
display: flex;
justify-content: space-around;
border-radius: 100px;
border-radius: 10px 20px 30px 40px;
background color: lightgray;
 
`

function ChooseButtons(props) {
    
 
    
    return (
        <ButtonsContainer>
<button  onClick={props.onClickNo}>❌</button>
<button  onClick={props.onClickYes}>💚</button>
</ButtonsContainer>
    )
}
export default ChooseButtons;