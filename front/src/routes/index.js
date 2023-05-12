import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Accueil2 from '../pages/accueil2';
import Accueil from '../pages/Accueil';
import DocteurSaisie from '../pages/DocteurSaisie';
import ListDisponible from '../pages/ListDisponible';
import SaisieValide from '../pages/saisieValide';
import Graph from '../pages/graph';
import AccueilGJ from '../pages/AccueilGJ';
import MapPage from '../pages/MapPage';
import SendData from '../pages/SendData';
import Profil from '../pages/Profil';
import InfiniteScroll from '../pages/InfiniteScroll';
import Description from '../pages/Description';



const Switch = () => (
  <Routes>
    <Route exact path='/' element={< Accueil2 />}></Route>
    <Route exact path='/Accueil' element={< Accueil />}></Route>
    <Route exact path='/DocteurSaisie' element={< DocteurSaisie />}></Route>
    <Route exact path='/ListDisponible' element={< ListDisponible />}></Route>
    <Route exact path='/SaisieValide' element={< SaisieValide />}></Route>
    <Route exact path='/Graph' element={< Graph />}></Route>
    <Route exact path='/AccueilGJ' element={< AccueilGJ />}></Route>
    <Route exact path='/MapPage' element={< MapPage />}></Route>
    <Route exact path='/SendData' element={< SendData />}></Route>
    <Route exact path='/Profil' element={< Profil />}></Route>
    <Route exact path='/InfiniteScroll' element={< InfiniteScroll />}></Route>
    <Route exact path='/Description' element={< Description />}></Route>


    
    
  </Routes>
);

export default Switch;