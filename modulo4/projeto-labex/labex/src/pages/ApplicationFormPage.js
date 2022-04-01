import React from "react";
import { useNavigate } from "react-router-dom";



const ApplicationFormPage =() => {

    const navigate = useNavigate()

    const goToListTripsPage = () => {
        navigate('/trips/list')
    }

    return (

        <div>

        <h1>Formulario de inscrição</h1>
        <button onClick={goToListTripsPage}>Ir Lista de Viagens</button>
        </div>
    )

}

export default ApplicationFormPage;