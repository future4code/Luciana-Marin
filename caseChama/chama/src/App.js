import React, {useContext, useState} from "react"
import { Busca } from "./FormBusca/Busca"
import {Usuario} from "./TelaUsuario/Usuario"
import { BASE_URL } from "./Constants/URL_BASE"
import axios from "axios"
import { GlobalState } from "./Global/GlobalState"

function App () {


  const [ busca, setBusca] = useState ()

    const [usuarios, setUsuarios] = useState ({})

    const buscUsuario = (ev) => {
        setBusca(ev.target.value)
    }

    const getUser = () => {
        axios.get(`${BASE_URL}/users/${busca}`)
        .then((res) => {  
          console.log(res.data)
          setUsuarios(res.data)
        })
        .catch((erro) => {
          console.log(erro.response)
        })
        
    }


   return (
    <GlobalState>
       <Busca getUser={getUser} buscUsuario={buscUsuario} busca={busca}/>
       <Usuario usuarios={usuarios}/>
    </GlobalState>
  )
}

export default App