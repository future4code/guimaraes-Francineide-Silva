import React from "react";
import { useNavigate } from "react-router-dom";




const HomePage =() => {

    const navigate = useNavigate()

    const goToAdminHomePage = () => {
        navigate('/login')
    }

    const goToListTripsPage = () => {
        navigate('/trips/list')
    }

    return (


        <div className="App">
           <h1>LABEX</h1>
            <button onClick={goToListTripsPage}>Ver Viagens</button>
            <button onClick={goToAdminHomePage}>Area de Admin</button>
       </div>
    )

}

export default HomePage;