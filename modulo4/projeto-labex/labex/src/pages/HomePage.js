import React from "react";
import { useNavigate } from "react-router-dom";
import { goToListTripsPage } from "../routes/coordinator";
import { goToAdminHomePage } from "../routes/coordinator";




const HomePage =() => {

    const navigate = useNavigate()

    
    return (


        <div >
           <h1>LABEX</h1>
            <button onClick={() =>goToListTripsPage(navigate)}>Ver Viagens</button>
            <button onClick={() => goToAdminHomePage (navigate)}>Area de Admin</button>
       </div>
    )

}

export default HomePage;