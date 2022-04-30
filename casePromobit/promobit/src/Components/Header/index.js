import { useState } from "react"
import { useHistory } from "react-router-dom"
import { changePage } from "../../Router/routerGPS"
import { StyledHeader } from "./styled"



export const CompHeader = () => {
    const [luciana, set_luciana] = useState(false)

    const history = useHistory()


    return(
        <StyledHeader>
            <div className="header-text">
                <h2 onClick={() => changePage(history, "/")}>TMDB</h2>

                <div onMouseLeave={() => set_luciana(false)} className="luciana">
                    <span onClick={() => {set_luciana(!luciana)}}> 
                        
                    </span>
                    {
                        luciana ?
                        <h3>Luciana Marin</h3>
                        :
                        <h3></h3>
                    }
                </div>
            </div>
        </StyledHeader>
    )
} 