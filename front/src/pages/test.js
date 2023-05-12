import logo1 from '../images/logo1.png'
import logo2 from '../images/logo3.png'

import React, { useRef } from 'react'
import { Form } from '@unform/web'
import Input from '../component/input'
import './DocteurSaisie.css'


function DocteurSaisie() {

  const formRef = useRef()
  const handleFormSubmit = data => {
    console.log(data)

    
    /* try {
      const schema = Yup.object().shape({
      name: Yup.string().required('Nome obrigatório'),
      email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
      password: Yup.string().min(6, 'No mínimo 6 dígitos'),
    });

    await schema.validate(data, {
      abortEarly: false,
    }); }catch (err) {
      if (err instanceof Yup.ValidationError){
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }
    }, [addToast, history])*/
    /* let separator = '-'
    let newDate = new Date()
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    date =  `${year}${separator}${month}${separator}${day}`

    SignUpFormData = dataForms{
      NomChirurgien: string,
      Sex: string,
      Age: string,
      diagnostic: string,
      acte: string,
      dateInitial: string 
    }

    await api.post('/users', data);

    history.push('/'); 
    
    
    
    
    
    import React, {useCallback, useRef, useState, useEffect} from 'react'
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
    let separator = '-'
    let newDate = new Date()
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    var dateAjd =  `${year}${separator}${month}${separator}${day}`

    console.log(data)
    setDonnes(data)

    console.log(dateAjd)
    console.log(data['nom-chirurgien'])
    console.log(data.age)
    console.log(data.Sexe)
    console.log(data['acte-prevue'])
    console.log(data.diagnostic)

    await Axios.post(
      "https://inputhc.onxzy.dev/api/booking/ask", 
      {
        date_start: dateAjd,
        max_days: "90",
        age: data.age,
        sex: data.Sexe,
        acte: data['acte-prevue'],
        disease: data.diagnostic
    })
    .then(function (response) {
      console.log(response);
      if(response?.status===200)
        navigate('/ListDisponible');
      else
        alert(response?.message)
    })
    .catch(function (error) {
      console.log(error);
    }); 
  });
  
  const [donnes, setDonnes] = useState([]);

  useEffect(() => {
    localStorage.setItem('date', dateAjd);
    localStorage.setItem('max_days', max_days);
    localStorage.setItem('age', age);
    localStorage.setItem('sexe', sexe);
    localStorage.setItem('diagnostic', diagnostic);
    localStorage.setItem('acte', acte);
  }, [donnes]);
    
    
    */
  }

//infos necesaires: Sexe, nom du chirurgien,  
  return (//          <Input name="email" icon={FiMail} placeholder="E-mail" />
    <div>
        
        <link rel="stylesheet" href="../images/bootstrap.min.css"/>
        <link rel="stylesheet" type="text/css" href="DocteurSaisie.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css”integrity=”sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4″crossorigin=”anonymous"/>

      <title>Enregistrement rendez-vous</title>
      
      <div id="header">
        <img src={logo1} id="logo1" alt="Logo 1" />
        <img src={logo2} id="logo2" alt="Logo 2" style={{ float: "right" }} />
      </div>
      <div id="main-content">
        <h1  class="fw-bold" style={{paddingTop: '108px'}}>Enregistrement rendez-vous</h1>
        
        
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

export default DocteurSaisie;
