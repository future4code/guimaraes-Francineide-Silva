import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from '../screens/HomePage/HomePage'
import Cards from '../screens/Cards/Cards'
import ErrorPage from '../screens/ErrorPage/ErrorPage'
import CardsDetail from '../screens/CardsDetail/CardsDetail'

const Router = () => {
    return(
        <BrowserRouter>
        <Routes>

            <Route index element={<HomePage/>}/>
             
            <Route path = "/carta" element={<Cards/>}/>

            <Route path ="/carta/:name" element={<CardsDetail/>}/>

            <Route path = "*" element={<ErrorPage/>}/>
                
        </Routes>
        </BrowserRouter>
    )
}

export default Router