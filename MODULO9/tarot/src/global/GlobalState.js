import React, {useState, useEffect} from 'react'
import axios from "axios"
import GlobalStateContext from "./GlobalStateContext"
import {cards} from '../constants/urls'


const GlobalState =(props) => {

    const[cardsNames, setCardsNames] = useState([])
    const [cards, setCards] = useState([])

    useEffect (()=>{
        getCardsNames()
    }, [])

    useEffect(()=>{
        const newList = []
        cardsNames.forEach((item) =>{
            axios
            .get(`${cards} ${item.name, item.imagem}`)
            .then((response)=>{
                newList.push(res.data)
                if(newList.length ===20){
                    const ordereDlist =newList.sort((a, b)=>{
                        return a.name - b.name
                    })
                    setCards(ordereDlist)
                }

            })
            .catch((error)=> console.log(error.message))
        })
    },[cardsNames])

    const getCardsNames = ()=>{
        axios
        get(`${cards}`)
        .then ((response)=>{
            setCardsNames(response.data.results)
        })
        .catch((error)=> console.log(error.message))
    }

    const data ={
        cards, 
        setCards,
        cardsNames, 
        setCardsNames

    }

    return (
        <GlobalStateContext.Provider value ={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState

