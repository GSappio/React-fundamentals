import './Mega.css'
import React, { useState } from "react";

export default props => {

    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
        return array.includes(aleatorio) ? 
            gerarNumeroNaoContido(min, max, array) :
            aleatorio
    }
    
    function gerarNumeros(qtde) {
        const numeros = Array(qtde)
        .fill(0) 
        .reduce((nums) => {
            const novoNumero = gerarNumeroNaoContido(1, 60, nums)
            return [ ...nums, novoNumero]
        }, [])
        // alterando de lugar o n1 e n2 troca a ordem de crescente para decrescente.
        .sort((n1, n2) => n1 - n2)
    
            return numeros
    
        }

        const [qtde, setQtde] = useState(props.qtde || 6)
        const numerosInicias = gerarNumeros(qtde)
        const [numero, setNumeros] = useState(numerosInicias)
        
    return (
        <div className="Mega">

            <h2>Mega</h2>
            <h3>{numero.join('-')}</h3>
            <div>
                <label>Qtde de Números</label>
                <input 
                min="6"
                max="60"
                type="number" 
                value={qtde}
                    onChange={e => {
                        setQtde(+e.target.value)
                        setNumeros(gerarNumeros(+e.target.value))
                    }}/>

            </div>
            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>
                Gerar Números 
            </button>   
        </div>
    );
};

