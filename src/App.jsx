import './App.css';

import Card from './components/layout/Card';

import ParOuImpar from './components/condicional/ParOuImpar';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ListaAluno from './components/repeticao/ListaAluno';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Aleatorio from './components/basicos/Aleatorio';
import Fragmento from './components/basicos/Fragmento';
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';

export default () => (

    <div className="App">
      <h1>Fundamentos React</h1> 
    <div className="Cards">

        <Card titulo="#08 - Renderização Condicional" color="#982395">
           <ParOuImpar numero={21}></ParOuImpar>
        </Card>

        <Card titulo="#07 - Desafio Repetição" color="#FF   432E">
           <TabelaProdutos></TabelaProdutos>
        </Card>

        <Card titulo="#06 - Repetição" color="#FF4C65">
           <ListaAluno></ListaAluno>
        </Card>

        <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
            <Familia sobrenome="Silva">
            <FamiliaMembro nome="Pedro"/>
            <FamiliaMembro nome="Ana"/>
            <FamiliaMembro nome="Gustavo"/>    
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