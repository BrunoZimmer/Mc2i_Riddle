
import React, { useState, useEffect, useCallback } from "react";
import "./ListDisponible.css";
import Axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

import Navbar from "../component/navbar";

function ListDisponible() {
  const navigate = useNavigate();

  const [repositories, setRepositories] = useState([]);

  const fetchRepositories = async () => {
    const { data } = await Axios.get(
      "http://localhost:3333/repositories"
    );
    const repositories = data;
    setRepositories(repositories);
    console.log("oi");
    console.log(repositories);
    console.log(repositories[0].title);
  };
  useEffect(() => {
    fetchRepositories();
  }, []);
   

  
  const handleSubmit = useCallback(async (data) =>{
    await Axios.post(
      "http://localhost:3333/repositories", 
      {
        title:"teste",
        url: "google.com",
        techs: "react",
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
    
    navigate('/Accueil');
  });

  return (
    <div>
      <link rel="stylesheet" type="text/css" href="liste.css" />
      <meta charSet="utf-8" />
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
    />
    <title>List - Disponible</title>
    <link rel="stylesheet" href='../images/bootstrap.min.css'/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800&amp;display=swap"/>

    <React.Fragment>
			<Navbar/>
		</React.Fragment>
    
    <section
        className="py-5"
        style={{ paddingTop: 0, paddingBottom: 6, marginBottom: "-92px" }}
        >
        <div className="container">
            <h1 className="text-center" style={{ fontWeight: "bold" }}>
              Sélection du créneau de rendez vous
            </h1>
            {repositories.slice(0, 10).map((repositorie) => (
              
              <Link  to="/" onClick={handleSubmit}>
                <div className="box1" key={repositorie.title}>
                  Title - {repositorie.title}<br />
                  Techs - {repositorie.techs}<br />
                  URL - {repositorie.techs} <br />
                  Likes - {repositorie.techs}<br />
                  long - {repositorie.techs}
                </div>
              </Link>
            ))
              
            }
        </div >
        
        
        
      </section>
    </div>

  );
}

export default ListDisponible;
