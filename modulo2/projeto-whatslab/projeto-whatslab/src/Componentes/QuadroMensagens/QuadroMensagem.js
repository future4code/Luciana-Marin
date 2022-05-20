import React, { Component } from "react";
import styled from "styled-components";

const FundoMensagem = styled.div`
    background: linear-gradient(#e66465, #9198e5);
    width: 95%;
    border-radius: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export default class QuadroMensagem extends Component {
  render() {
    let historicoDeMensagens = this.props.mensagem.map((item) => {
      return <FundoMensagem>
                <p>
                    <b>{item.usuario}</b> : {item.mensagem}
                </p>
            </FundoMensagem>
      
    });

    return <>{historicoDeMensagens}</>;
  }
}