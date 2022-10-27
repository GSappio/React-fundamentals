import './App.css';
import React from 'react';

import Card from './components/layout/Card';

import Familia from './components/basicos/Familia';
import Aleatorio from './components/basicos/Aleatorio';
import Fragmento from './components/basicos/Fragmento';
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';


export default () => (

    <div className="App">
        <h1>Fundamentos React 4</h1>

    <div className="Cards">

        <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
            <Familia sobrenome="Ferreira">
                
            </Familia>
            
        </Card>

        <Card titulo="#04 - Desafio aleatório" color="#FA6900">
            <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo="#03- Fragmento" color="#E94C6F">
            <Fragmento />
        </Card>

        <Card titulo="#02- Com pârametro" color="#E8B71A">
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
