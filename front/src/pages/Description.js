import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Navbar from "../component/navbar";
import './InfiniteScroll.css'
  
function Description() {
  
  return (
    <div>
      <link rel="stylesheet" type="text/css" href="liste.css" />
      <meta charSet="utf-8" />
      <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <title>TESTE</title>
      <link rel="stylesheet" href='../images/bootstrap.min.css'/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800&amp;display=swap"/>

      <React.Fragment>
          <Navbar/>
      </React.Fragment>

      {/* <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '45vh', alignItems: 'center', flex: 1 }}>
                  <div id='InsigniasBox' style={{ backgroundColor: '#444', alignContent: 'revert', padding: '20px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gridGap: '10px', borderRadius: '10px', border: '2px solid #555', width: '50vh', maxWidth: '100%' }}>
                      {[...Array(8)].map((_, i) => (
                          <div key={i} style={{ width: '100%', height: '100%', backgroundColor: '#888', borderRadius: '5px' }}>
                              <CloseIcon style={{ width: '60%', height: '60%', borderRadius: '5px', alignContent: "center" }}/>
                          </div>
                      ))}
                  </div>
              </div> */}
      <div className="container" style={{gridTemplateRows: 'repeat(2, 1fr)'}}>
        <div className="item-container">
          <div  >
            <div className="item" >
              <img src="https://picsum.photos/200" alt="item" className="item-image" />
              <h3 className="item-title">TESTE</h3>
              <hr className="item-line" />
              <p className="item-text">TESTE</p>
            </div>
          </div>
        </div>
        <div style={{paddingTop: '40px', marginTop: '50px', textAlign: 'justify', top: '20px'}}>
          Caros amigos, o acompanhamento das preferências de consumo garante a contribuição de um grupo importante 
          na determinação dos paradigmas corporativos. Evidentemente, o fenômeno da Internet é uma das consequências
          de todos os recursos funcionais envolvidos. Por conseguinte, a complexidade dos estudos efetuados não pode
            mais se dissociar dos níveis de motivação departamental. O cuidado em identificar pontos críticos na 
            estrutura atual da organização maximiza as possibilidades por conta da gestão inovadora da qual fazemos parte.

          Neste sentido, a percepção das dificuldades deve passar por modificações independentemente de alternativas às 
          soluções ortodoxas. A nível organizacional, a determinação clara de objetivos assume importantes posições no 
          estabelecimento das diversas correntes de pensamento. Nunca é demais lembrar o peso e o significado destes problemas,
          uma vez que a valorização de fatores subjetivos exige a precisão e a definição das regras de conduta normativas.
        </div>
      </div>
      

    </div>
  

  );
};

export default Description;
