import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom"
import styled from "styled-components";
import Header from "./Header";


const ContainerForm= styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  h1{
    color:white;
    margin-top:80px;
  }
  height:100vh;
 `
const Input= styled.input`
  padding: 10px;
  width: 300px;
  margin: 0.5em;
`
const ButtonForm=styled.button`
background-color: rgba(0,0,0,0.8);
height:70px;
margin-top:1.5em;
color:white;
padding:0.5em;
font-family: 'Audiowide', cursive;
border-radius:30px;   
font-size: 20px;
`
 const LoginPage = ()=> {

  const [admEmail, setAdmEmail] = useState("");
  const [admPassword, setAdmPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {


  const token = localStorage.getItem("token");

  if (token) {
    navigate("/admin/trips/list");
  }
  
}, [navigate]);

  const handleEmail = (event) => {
    setAdmEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setAdmPassword(event.target.value);
  };

  const loginPage = () => {
    const body = {
      email: admEmail,
      password: admPassword
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/francineide-silva-guimaraes/login",
        body
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/admin/trips/list");
      })
      .catch((err) => {
        alert("Erro:",  err);
      });
  };

  return (
    <div>
      <Header/>
      <ContainerForm>
        <h1>Login</h1>
        <Input value={admEmail} onChange={handleEmail} type="email" placeholder="E-mail"/>
        <Input value={admPassword} onChange={handlePassword} type="password" placeholder="Senha"/>
        <ButtonForm onClick={() => loginPage (navigate)}>Fazer login</ButtonForm>
        </ContainerForm>
    </div>
    
  )
}
export default LoginPage;
