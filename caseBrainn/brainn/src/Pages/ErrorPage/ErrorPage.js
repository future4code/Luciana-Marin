import React from "react"
import { useHistory } from "react-router-dom"


 const ErrorPage = () => {
    const history = useHistory()


    return (
        <div>

            <h1>Error</h1>
            
            <button onClick={ () => history.push('/')}>VOLVER</button>
        
        </div>
    )
}

export default ErrorPage











