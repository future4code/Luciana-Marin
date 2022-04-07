import styled from "styled-components";
import { lotoColor } from "../../Colors/colors";

const getColor = color => {
    if(color === 0){
        return `background-color: ${lotoColor.megasena};`
    }

    if(color === 1){
        return `background-color: ${lotoColor.quina};`
    }

    if(color === 2){
        return `background-color: ${lotoColor.lotofacil};`
    }

    if(color === 3){
        return `background-color: ${lotoColor.lotomania};`
    }

    if(color === 4){
        return `background-color: ${lotoColor.timemania};`
    }

    if(color === 5){
        return `background-color: ${lotoColor.diadesorte};`
    }
}


