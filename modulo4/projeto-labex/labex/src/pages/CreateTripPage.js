import React from "react";
import { useNavigate } from "react-router-dom";


const CreateTripPage =() => {

    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate('/')
    }

    const goToAdminHomePage =() => {
        navigate('/admin/trips/list')

    }



    return (

        <div>

        <h1>Pagina para criação de distino</h1>
        <button onClick={goToHomePage}>Ir Pagina Inicial</button>
            <button onClick={goToAdminHomePage}>Area de Admin</button>
        </div>
    )

}

export default CreateTripPage;