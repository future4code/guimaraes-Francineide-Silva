import React from "react";
import {useNavigate} from 'react-router-dom';


const LoginPage =() => {


    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate('/')
    }

    const goToAdminHomePage =() => {
        navigate('/admin/trips/list')
    }



    return (
        <div>

        <h1>Pagina de login</h1>
        <button onClick={goToHomePage}>Ir Pagina Inicial</button>
        <button onClick={goToAdminHomePage}>Pagina Admin</button>
        </div>
    )

}

export default LoginPage;