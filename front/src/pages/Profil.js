

import React, { useState, useEffect, useCallback } from "react";
import "./ListDisponible.css";
import CloseIcon from '@mui/icons-material/Close';

import Navbar from "../component/navbar";

function Perfil() {
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
        ><h1 className="text-center" style={{ fontWeight: "bold" }}>
        Perfil
      </h1>
      
        <div className="container">
            

            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', minHeight: '40vh'}}>
              <div style={{width: '10px', backgroundColor: '#444', padding: '20px', borderRadius: '10px', border: '2px solid #555', color: '#fff', marginRight: '30px', maxWidth: '65vh'  }}>
                  <img src="https://picsum.photos/200" alt="Profile" style={{ width: '200px', height: '200px', borderRadius: '50%', marginBottom: '20px' }} />
                  <h2 style={{ margin: 0 }}>John Doe</h2>
                  <p style={{ margin: 0 }}>Web Developer</p>
                  <p style={{ margin: 0 }}>Location: San Francisco, CA</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '45vh', alignItems: 'center', flex: 1 }}>
                  <div id='InsigniasBox' style={{ backgroundColor: '#444', alignContent: 'revert', padding: '20px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gridGap: '10px', borderRadius: '10px', border: '2px solid #555', width: '50vh', maxWidth: '100%' }}>
                      {[...Array(8)].map((_, i) => (
                          <div key={i} style={{ width: '100%', height: '100%', backgroundColor: '#888', borderRadius: '5px' }}>
                              <CloseIcon style={{ width: '60%', height: '60%', borderRadius: '5px', alignContent: "center" }}/>
                          </div>
                      ))}
                  </div>
              </div>
          </div>


        </div >
        
        
        
      </section>
    </div>

  );
}

export default Perfil;


