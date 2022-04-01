import React from "react";
import { useNavigate } from "react-router-dom";


const AdminHomePage =() => {

    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate('/')
    }

    const goToCreateTripPage =() => {
        navigate('/admin/trips/create')

    }

    const goToTripDetailsPage = () => {

        navigate ('/admin/trips/:id')
    }

    return (

        <div>
            <h1>Pagina Admin</h1>
            <button onClick={goToHomePage}>Ir Pagina Inicial</button>
            <button onClick={goToCreateTripPage}>Pag Criação</button>
            <button onClick={goToTripDetailsPage}>Pag Detalhes</button>
        </div>
    )

}

export default AdminHomePage;