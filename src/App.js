import React from "react";
import './App.css';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom'
import Principal from './Components/Principal/principal';
import Bar from './Components/Bar/Barra';
import Derechos from './Components/Derechos/derechos';



function App() {
  return (
    <Router>
    <Bar/>
 
    <Route path='/principal' exact component={Principal}/> 
    <Route path='/derechos' exact component={Derechos}/> 
     
    
    </Router>


 
  );
}

export default App;