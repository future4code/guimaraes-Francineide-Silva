import './App.css';
import React,{useEffect, useState} from 'react';
import axios from 'axios';
import PokeCard from './components/PokeCard/PokeCard';




function App(props) {

  const [pokeList , setPokeList] =useState([]);
  const [pokeName , setPokeName]= useState("");
     


  useEffect = () => {
    
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
       
        setPokeList({ pokeList: response.data.results });
      })
      .catch(err => {
        console.log(err);
      });
  };

  changePokeName = event => {
    pokeName({ pokeName: event.target.value });
  };

  
    return (
      <div>
        
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
         
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        
        {pokeName && <PokeCard pokeName={pokeName} />}
      </div>
    );
  }


 


export default App;
