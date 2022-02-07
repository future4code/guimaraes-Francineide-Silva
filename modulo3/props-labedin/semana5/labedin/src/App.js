import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import styled from "styled-components";


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://i.ibb.co/pwfhT4J/Neide-foto.gif" 
          nome="Francineide Teixeira da Silva" 
          descricao="Olá, trabalho com tecnologia à 20 anos e no momento estou estudando na Labenu e desenvolvendo novas abilidades na area desenvolvimento."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className = "email">
      
        <CardPequeno
        imagem ="https://i.ibb.co/1MQMpcF/carta-2.jpg"
        nome = 'francineide_silva@hotmail.com'
        telefone = 'Fone: 83-9 8603-8824'

      />
      </div>

      <div className = 'Endereço'>
      <CardPequeno

      imagem ='https://image.flaticon.com/icons/png/512/69/69524.png'
      nome = 'Endereço: Rua Xiquixique, SN'
      telefone = 'Fone: 83-3065-4436'

      />
      </div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://i.ibb.co/3FDk6Dw/microtecnologia-duraline.jpg" 
          nome="Microtecnologia" 
          descricao="Técnica em informática entre 2000 a 2002 – Microtecnologia 
          Gerente de vendas entre 2002 a 2010- Microtecnologia
          " 
        />
        
        <CardGrande 
          imagem ="https://i.ibb.co/wBF7jtQ/logo-datasonic.gif" 
          nome="Datasonic" 
          descricao="Gerente de compras entre 2010 ate o presente momento ." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
