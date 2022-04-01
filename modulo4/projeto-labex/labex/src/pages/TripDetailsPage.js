import React from "react";
import { useNavigate } from "react-router-dom";


const TripDetailsPage =() => {

    const navigate = useNavigate()


    const goToAdminHomePage =() => {
        navigate('/admin/trips/list')

    }



    return (

        <div>

        <h1>Pagina de detalhes da viagem</h1>
         <button onClick={goToAdminHomePage}>Area de Admin</button>
        </div>
    )

}

export default TripDetailsPage;