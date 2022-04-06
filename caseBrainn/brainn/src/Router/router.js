import React from "react"
import { BrowserRouter, Switch , Route } from "react-router-dom"
import HomePage from "../Pages/HomePage/HomePage"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>

        </BrowserRouter>
    )
}
