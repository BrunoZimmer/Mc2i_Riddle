import logo1 from './images/logo1.png';
import logo2 from './images/logo2.png';

import React, { useRef } from 'react'
import { Form } from '@unform/web'
import Input from './component/input';
import './App.css';


function App() {

  const formRef = useRef()
  const handleFormSubmit = data => {
    console.log(data)
  }

//infos necesaires: Sexe, nom du chirurgien,  
  return (//          <Input name="email" icon={FiMail} placeholder="E-mail" />
    <div>
      <link rel="stylesheet" type="text/css" href="App.css" />
      <title>Enregistrement rendez-vous</title>
      <div id="header">
        <img src={logo1} id="logo1" alt="Logo 1" />
        <img src={logo2} id="logo2" alt="Logo 2" style={{ float: "right" }} />
      </div>
      <div id="main-content">
        <h1>Enregistrement rendez-vous</h1>
        <Form ref={formRef} onSubmit={handleFormSubmit} id="appointment-form">
          
          <label htmlFor="ssn">E-mail:</label>
          <Input type="text" id="ssn" name="ssn" placeholder="E-mail"/>
          <br />
          <label htmlFor="age">Age:</label>
          <Input type="text" id="age" name="age" placeholder="Age"/>
          <br />
          <label htmlFor="sexe">Sexe:</label>
          <select id="sexe" name="sexe">
            <option value="homme">Homme</option>
            <option value="femme">Femme</option>
          </select>
          <br />
          <label htmlFor="nom-chirurgien">Nom du chirurgien:</label>
          <Input type="text" id="nom-chirurgien" name="nom-chirurgien" placeholder="Nom du chirurgien"/>
          <br />
          <label htmlFor="diagnostique">Diagnostique principal:</label>
          <Input type="text" id="diagnostique" name="diagnostique" placeholder="Diagnostique"/>
          <br />
          <label htmlFor="acte-prevue">Acte prévu:</label>
          <Input type="text" id="acte-prevue" name="acte-prevue" placeholder="Acte Prevue"/>
          <br />
          <button type="submit" > 
            Soumettre
          </button>
        </Form>
      </div>
    </div>
  );//<button type="button" onClick={signOut}>
}

export default App;
