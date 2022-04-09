import { BrowserRouter, Switch , Route } from "react-router-dom"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import { PageHome } from "../Pages/HomePage/HomePage"

export const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <PageHome />
                </Route>
                
                <Route>
                    <ErrorPage/> 
                </Route>
            </Switch>

        </BrowserRouter>
    )
}