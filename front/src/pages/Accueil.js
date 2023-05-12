import { Button } from 'bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'

import fond1 from '../images/fond1.png'
import fond2 from '../images/fond2.png'

import './Accueil.css'


function Accueil() {
//infos necesaires: Sexe, nom du chirurgien,  
  return (//          <Input name="email" icon={FiMail} placeholder="E-mail" />
    <div>
        <link rel="stylesheet" type="text/css" href="accueil.css" />
        <div className="container">
            <p className="titre">Accueil</p>
            <div className="row">
            <div className="col-6 h-25 d-inline-block">
                <img src={fond1} />
                
                <Link  className="bouton2" to="/DocteurSaisie">
                    <button className="bouton2">Prise de rendez-vous</button>
                </Link>
                <p className="text">
                Saisissez les informations d'un patient afin de trouver un créneau de
                rendez-vous
                </p>
            </div>
            <div className="col-6 h-25 d-inline-block">
                <img src={fond2} />
                <Link className="bouton2" to="/Graph">
                    <button className="bouton2">Lits disponibles et opérations</button>
                </Link>
                <p className="text">
                Saisissez les informations relatives au nombre de lits disponibles et
                au nombre d'opérations réalisables chaque jour
                </p>
            </div>
            </div>
        </div>
    </div>

    );//<button type="button" onClick={signOut}>
}

export default Accueil;