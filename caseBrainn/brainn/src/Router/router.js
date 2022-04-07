import { BrowserRouter, Switch , Route } from "react-router-dom"
import  PageHome  from "../Pages/HomePage"
import  ErrorPage  from "../Pages/ErrorPage"

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
