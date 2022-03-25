import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  AllMatchsContainer, 
  MathList, 
  MatchAvatar 
} from './style'
import Loader from '../Loader';

export default function AllMatches (props) {

  const [myMatches, setMyMatches] = useState([]);
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
      axios
      .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francineide-silva-guimaraes/matches`)
      .then( response => {

        setMyMatches(response.data.matches);
        setLoading(false)

      })
      .catch( err => {
        alert('Não foi possível realizar a solicitação, erro: ' + err.data);
      })
  }, [props.emptyList]);

  const isLoading = loading ? 
    (<Loader />) 
    : 
    (<MathList>
      {myMatches.map(match => {
        return(
          <MatchAvatar key={match.id}>
            <img src={match.photo} alt="Foto" />
            <b>{match.name}</b>
          </MatchAvatar>
        )
      })}
    </MathList>)

  return(
    <AllMatchsContainer>
      {isLoading}
    </AllMatchsContainer>
  )
}