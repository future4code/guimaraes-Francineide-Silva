import React from 'react'
import styled from 'styled-components'
import { useRequestData } from "../hooks/useRequestData";
import AdmHeader from './AdmHeader';
import { useNavigate } from 'react-router-dom';
import { useProtectedPage } from '../hooks/useProtectedPage';
import { goToCreateTripPage } from '../routes/coordinator';
import { goToTripDetailsPage } from '../routes/coordinator';

const ContainerList= styled.div`
   display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width:100vw;
 `
const Card = styled.div`
 width:200px;
 margin:1em;
 border:solid 2px;
 padding:1em;
 background-color: rgba(0,0,0,0.5);
 p,h4{
   color:white;
 }
 
 button{
   width:200px;
   padding:0.5em;
   background-color:gray;
   font-size: 20px;
   bottom:0px;
   margin: 30px 0px;
   
 }
`
const AdminHomePage =() =>{

    useProtectedPage();
  
  const getSpaceTrip = useRequestData(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/francineide-silva-guimaraes/trips", undefined
    
  );
  

  const navigate=useNavigate()

  const goToTripDetailsPage=(id)=>{
    navigate(`/admin/trips/${id}`)
  } 

  const goToCreateTripPage=(id)=>{
      navigate(`/admin/trips/create`)
  } 


    const list= getSpaceTrip && getSpaceTrip.trips.map((trip,id) =>{

      return (< Card>
         <img src={`https://picsum.photos/200/200?a=${id}]`}/>
          <h4 key={trip.id}>{ trip.name}</h4>
          <p>planeta: {trip.planet}</p>
          <button onClick={()=>{goToTripDetailsPage(trip.id)}}> Ver detalhes</button>
      </ Card>
      );
    })

    return(
    <div>
      <AdmHeader/>
            <ContainerList>
                {list}
            </ContainerList>
            
    </div>
    
    );
  
}

export default AdminHomePage;