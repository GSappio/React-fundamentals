import './App.css';
import React from 'react';

import Card from './components/layout/Card';
import Aleatorio from './components/basicos/Aleatorio';
import Fragmento from './components/basicos/Fragmento';
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';


export default () => (

    <div className="App">
        <h1>Fundamentos React 4</h1>

    <div className="Cards">

        <Card titulo="#4 - Desafio aleatório" color="#FA6900">
            <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo="#3- Fragmento" color="#E94C6F">
            <Fragmento />
        </Card>

        <Card titulo="#2- Com pârametro" color="#E8B71A">
            <ComParametro 
                titulo="Situação do Aluno"
                aluno="Pedro Silva"
                nota={9.3} />
        </Card>

        <Card titulo="#01 - Primeiro componente" color="#588C73">
            <Primeiro></Primeiro>
        </Card>

        </div>

        
        

        
    </div>

)
