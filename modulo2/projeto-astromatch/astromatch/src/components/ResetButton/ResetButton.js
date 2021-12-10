import React from 'react'
import axios from 'axios';
import styled from 'styled-components';

const ResetButtonContainer = styled.div`
text-align: center;
`

function ResetButton() {
    const onClickReset = () => {
      axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marin/clear").then((res) => {
          console.log(res);
        });
    };
  
    return (
      <div>
        <button onClick={onClickReset}>Resetar curtidas e matches</button>
      </div>
    );
  }
  
  export default ResetButton;