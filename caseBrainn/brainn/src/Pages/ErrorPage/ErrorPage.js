
import { useHistory } from "react-router-dom"
import { ErrorImage, ErrorPageContainer } from "./styled"
import error from '../../assets/error.png'

 const ErrorPage = () => {
    const history = useHistory()


    return (
        <ErrorPageContainer>

            <h1>Ops! Algo deu errado!</h1>
            <ErrorImage src={error} />
            <button onClick={ () => history.push('/')}>VOLTAR</button>
        
        </ErrorPageContainer>
    )
}

export default ErrorPage
