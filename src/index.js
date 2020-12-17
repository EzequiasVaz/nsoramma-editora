import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter, Route, Switch} from 'react-router-dom'


import Home from './pages/home'
import Loja from './pages/loja'
import Livros from './pages/livros';
import Sobre from './pages/sobre';
import Autores from './pages/autores';
import Contato from './pages/contato';


import './global.css'



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    
   <Switch>

    <Route exact path='/' component={Home}/>
    <Route exact path='/loja' component={Loja}/>
    <Route exact path='/livros' component={Livros}/>
    <Route exact path='/sobre' component={Sobre}/>
    <Route exact path='/autores' component={Autores}/>
    <Route exact path='/contato' component={Contato}/>

   </Switch>

    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

