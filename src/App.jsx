import React from 'react'

import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'


export default () => (

    <div id="app">
        <h1>Fundamentos React 4</h1>
        <Aleatorio min={1} max={60} />
        <Fragmento />
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Pedro Silva"
            nota={9.3} />

        <Primeiro></Primeiro>
    </div>

)