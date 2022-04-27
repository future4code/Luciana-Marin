import React, {useState} from "react"
import { ContainerPai, ContainerBusca, ContainerLogo, ContainerInput } from "./styled"
import git from "../img/logogit.png"


export const Busca = (props) => {

   
    return(
        <ContainerPai>
            <ContainerBusca>
                <ContainerLogo>
                <img src={git} alt="github"/>
                </ContainerLogo>
                <ContainerInput>
                <input 
                    type ="text" 
                    value = {props.busca}
                    onChange = {props.buscUsuario}
                    placeholder = "Buscar Usuário"
                />
                    <ion-icon name="search-outline"
                        onClick = {props.getUser}
                    ></ion-icon>
                </ContainerInput>
              
            </ContainerBusca>
        </ContainerPai>
    )

} 