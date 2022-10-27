import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

export default () => (
     
        <div id="app">
        <h1>Fundamentos React 3</h1>
        <Fragmento />
        <ComParametro 
            titulo="Situação d  o Aluno"
            aluno="Pedro Silva" 
            nota={9.3} />

        <Primeiro></Primeiro>
    </div>

)
