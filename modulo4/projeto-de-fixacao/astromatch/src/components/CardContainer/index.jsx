import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardAppContainer, CardBody } from './style';
import CardHeader from '../CardHeader';
import PossibleMatch from '../PossibleMatch';
import CardFooter from '../CardFooter';
import AllMatches from '../AllMatches';
import Loader from '../Loader';



export default function CardContainer () {
  
  const [changePage, setChangePage] = useState(true)
  const [person, setPerson] = useState([]);
  const [emptyList, setEmptyList] = useState(true)
  const [loading, setLoading] = useState(false)
  const [animationSwipe, setAnimationSwipe] = useState()

  useEffect(() => {
    getNewPerson()
  }, []);

  const onClickIconMatches = () => {
    setChangePage(!changePage)
  };

  const onClickAccept = () => {
    setAnimationSwipe('swipeRight')
    const body = {
      "id": `${person.id}`,
      "choice": true
    };
    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francineide-silva-guimaraes/choose-person`,
        body,
      )
      .then(response => {
        getNewPerson()
        setAnimationSwipe()
      })
      .catch(error => {
        alert('Erro na solicitação: ' + error.data);
      });
  };

  const onClickRefuse = () => {
    setAnimationSwipe('swipeLeft')
    axios
    .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francineide-silva-guimaraes/person`)
    .then( response => {

      setPerson(response.data.profile);
      setLoading(false)
      setAnimationSwipe()
      getNewPerson()

    })
    .catch( err => {
      alert('Erro na solicitação: ' + err.data);
    })
  };

  const getNewPerson = () => {
    setLoading(true)
    axios
    .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francineide-silva-guimaraes/person`)
    .then( response => {

      setPerson(response.data.profile);
      setLoading(false)
      setAnimationSwipe()

    })
    .catch( err => {
      alert('Erro na solicitação: ' + err.data);
    })
  };

  const onClickIconClear = () => {
    axios
    .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francineide-silva-guimaraes/clear`)
    .then( response => {

      setEmptyList(!emptyList)
      alert("Lista de matches limpa!");

    })
    .catch( err => {
      alert('Erro na solicitação: ' + err.data);
    })
  };
  
  const CardBodyState = changePage ? 
    (<>
      <PossibleMatch 
        photo={person.photo} 
        name={person.name} 
        age={person.age} 
        bio={person.bio} 
        sideToSwipe={animationSwipe}
        /> 
      <CardFooter 
        onClickAccept={onClickAccept}
        onClickRefuse={onClickRefuse}/>
    </>) 
      : 
    (<AllMatches emptyList={emptyList}/>)

  const loadingState = loading ? 
    (<Loader />) 
    : 
    <CardBody>
      {CardBodyState}
    </CardBody>

  useEffect(() => {
    document.addEventListener("keydown", onKeyPressed);
    return () => {
      document.removeEventListener('keydown', onKeyPressed) 
    }
    function onKeyPressed(e) {
      if(e.code === 'ArrowRight'){
        onClickAccept()
      }else if(e.code === 'ArrowLeft'){
        onClickRefuse()
      }     
    }
  },[person]);

  return(
    <CardAppContainer> 
      <CardHeader onClickIconClear={onClickIconClear} onClickIconMatches={onClickIconMatches}/>
      {loadingState}
    </CardAppContainer>
  )
}