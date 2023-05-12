import React, {useCallback, useRef, useState, useEffect } from 'react'
import { Form } from '@unform/web'
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import logo1 from '../images/logo1.png'
import logo2 from '../images/logo3.png'

import Input from '../component/input'
import './DocteurSaisie.css'

const data  = [
  {
  id:"1",
  name: "um",
  lat: 50.607100,
  lng: 3.145745
},
{
  id:"2",
  name: "dois",
  latitude: 50.614933,
  longitude: 3.140231
}
]

function DocteurSaisie() {
  const formRef = useRef()
  const navigate = useNavigate();
  
  
  
 

  const handleFormSubmit = useCallback(async (data1) =>{
    console.log(data[0].id);
    await Axios.post(
      "http://localhost:3333/repositories", 
      {
        id: data[0].id,
        name: data[0].name,
        lat: data[0].lat,
        lng: data[0].lng, 
        likes: 0,
        dislikes: 0
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    }); 
    
  });


//infos necesaires: Sexe, nom du chirurgien,  
  return (//          <Input name="email" icon={FiMail} placeholder="E-mail" />
    <div>
      <div id="main-content">
        <h1>Create some data</h1>
        <button onClick={handleFormSubmit}> 
            Soumettre
        </button>
      </div>
    </div>
  );//Envoyer la date en format anne-mois-jour d'aujourd'hui aussi
}

export default DocteurSaisie;
