import React, {useCallback, useRef, useState, useEffect } from 'react'
import { Form } from '@unform/web'
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import logo1 from '../images/logo1.png'
import logo2 from '../images/logo3.png'

import Input from '../component/input'
import './DocteurSaisie.css'


function DocteurSaisie() {
  const formRef = useRef()
  const navigate = useNavigate();
  
  const handleFormSubmit = useCallback(async (data) =>{
 
// sets the value of "message" to be "saved in browser storage"

    /* console.log(localStorage.getItem("Donnes"));

    console.log(data)
    console.log(dateAjd)
    console.log(data['nom-chirurgien'])
    console.log(data.age)
    console.log(data.Sexe)
    console.log(data['acte-prevue'])
    console.log(data.diagnostic) */

    await Axios.post(
      "http://localhost:3333/repositories", 
      {
        title: data.Title,
        url: data.URL,
        techs: data['Tech'],
        likes: 0,
        dislikes: 0
    })
    .then(function (response) {
      console.log(response);
      if(response?.status===500)
        navigate('/ListDisponible');
      else
        alert(response?.message)
    })
    .catch(function (error) {
      console.log(error);
    }); 
    
    navigate('/SaisieValide');
  });


//infos necesaires: Sexe, nom du chirurgien,  
  return (//          <Input name="email" icon={FiMail} placeholder="E-mail" />
    <div>
      <link rel="stylesheet" type="text/css" href="DocteurSaisie.css" />
      <title>Enregistrement rendez-vous</title>
      <div id="header">
        <img src={logo1} id="logo1" alt="Logo 1" />
        <img src={logo2} id="logo2" alt="Logo 2" style={{ float: "right" }} />
      </div>
      <div id="main-content">
        <h1>Enregistrement rendez-vous</h1>
        <Form ref={formRef} onSubmit={handleFormSubmit} id="appointment-form">
          
          <label htmlFor="Title">Title:</label>
          <Input type="text" id="Title" name="Title" placeholder="Title"/>
          <br />
          <label htmlFor="URL">Nom du chirurgien:</label>
          <Input type="text" id="URL" name="URL" placeholder="URL"/>
          <br />
          <label htmlFor="Tech">Tech principal:</label>
          <Input type="text" id="Tech" name="Tech" placeholder="Tech"/>
          <br />
          <button > 
            Soumettre
          </button>
        </Form>
      </div>
    </div>
  );//Envoyer la date en format anne-mois-jour d'aujourd'hui aussi
}

export default DocteurSaisie;
