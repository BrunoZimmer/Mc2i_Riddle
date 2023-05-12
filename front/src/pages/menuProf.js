
import React from "react";
import { Link } from 'react-router-dom'

import "./saisieValide.css";
import logo1 from "../images/logo1.png"

function SaisieValide() {
  return (
    <div className="body2">
        <link rel="stylesheet" type="text/css" href="saisie_validee.css" />
        <title className="h12">Saisie Validée</title>
        <img className="img2"src={logo1} alt="Image de rendez-vous validé" />
        <p className="p2" style={{ textAlign: "center", color: "black" }}>Saisie validée</p>
        <Link to="/"><button className="button2">Continuer</button></Link>
        <Link to="/"><button className="button2">Continuer</button></Link>
    </div>

  );
}

export default SaisieValide;



