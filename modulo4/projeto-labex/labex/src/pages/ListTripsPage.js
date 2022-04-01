import React from "react";
import { useNavigate } from "react-router-dom";


const ListTripsPage =() => {

    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate('/')
    }

    const goToApplicationFormPage =() => {
        navigate('/trips/application')
    }

    return (
        <div>

        <h1>Pagina de lista de viagens</h1>
        <button onClick={goToHomePage}>Ir Pagina Inicial</button>
        <button onClick={goToApplicationFormPage}>Ir Para Formulario</button>
        </div>
    )

}

export default ListTripsPage;