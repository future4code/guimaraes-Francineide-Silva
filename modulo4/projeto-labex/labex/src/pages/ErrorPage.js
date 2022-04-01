import React from "react";
import { useNavigate } from "react-router-dom";


const ErrorPage =() => {

    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate('/')
    }

    return (

        <div>
        <h1>440 Erro , volte para pagina inicial</h1>
        <button onClick={goToHomePage}>Ir Pagina Inicial</button>
        </div>
    )

}

export default ErrorPage;