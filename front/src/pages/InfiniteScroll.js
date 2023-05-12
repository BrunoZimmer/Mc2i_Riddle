import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Navbar from "../component/navbar";
import './InfiniteScroll.css'

function RepositoryList() {
  const [repositories, setRepositories] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/octocat/repos');
      const data = await response.json();
      setRepositories(data);
    }
    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // code to handle form submission goes here
  }
  
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
      <div className="container">
        <h1 className="text-center" style={{ fontWeight: "bold" }}>
          Sélection du créneau de rendez-vous
        </h1>
        <div className="item-container">
          
          {repositories.slice(0, 10).map((repository) => (
            <Link to={{
              pathname: "/Description",
              state: repository // your data array of objects
              }}
              //onClick={handleSubmit}
            >
              <div className="item" key={repository.title}>
                <img src="https://picsum.photos/200" alt="item" className="item-image" />
                <h3 className="item-title">{repository.title}</h3>
                <hr className="item-line" />
                <p className="item-text">{repository.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  

  );
};

export default RepositoryList;
