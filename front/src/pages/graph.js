
import React, {useState, useEffect} from "react";
import Plot from 'react-plotly.js';
import Axios from "axios";

import "./graph.css";

import Navbar from "../component/navbar";

function Graph() {

/* 
  
  const [freeNights, setFreeNights] = useState([]);
  const [planNights, setPlanNights] = useState([]);
  const [realNights, setRealNights] = useState([]);
  
  const fetchFreeNights = async () => {
    const { data } = await Axios.get(
      "https://inputhc.onxzy.dev/api/night/find", 
      { params: { 
        date_start: '2019-01-23', 
        date_end: '2020-12-30', 
        simple_array: 1
      } }
    );
    const freeNights = data;
    setFreeNights(freeNights);
    console.log(freeNights);
  };
  
  const fetchPlanNights = async () => {
    const { data } = await Axios.get(
      "https://inputhc.onxzy.dev/api/night/usage/plan", 
      { params: { 
        date_start: '2019-01-23', 
        date_end: '2020-12-30'
      } }
    );
    const planNights = data;
    setPlanNights(planNights);
    console.log(planNights);
  };

  const fetchRealNights = async () => {
    const { data } = await Axios.get(
      "https://inputhc.onxzy.dev/api/night/usage/real", 
      { params: { 
        date_start: '2019-01-23', 
        date_end: '2020-12-30'
      } }
    );
    const realNights = data;
    setRealNights(realNights);
    console.log(realNights);
  };

  
  useEffect(() => {
    fetchFreeNights();
    fetchPlanNights();
    fetchRealNights();
  }, []); 
 */
  return (
    <div className="body2">
      <link rel="stylesheet" type="text/css" href="liste.css" />
      <meta charSet="utf-8" />
      <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <title>Graph</title>
      <link rel="stylesheet" href='../images/bootstrap.min.css'/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800&amp;display=swap"/>

      <React.Fragment>
          <Navbar/>
      </React.Fragment>

      <h1>
        Graphique
      </h1>
      <div className="plot">
        <Plot
          data={[
            {
               //y: freeNights,
              y: [1, 2, 3 ,4,5,6,7,8,9],
              type: 'candle',
              mode: 'lines',
              marker: {color: 'red'},
              name: 'Quantité des lits libres'
            }
          ]}
            layout={ {
            width: 1120, 
            height: 600, 

          } }
        />
      </div>
    </div>

  );
}

export default Graph;



