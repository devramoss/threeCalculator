import React, { useState } from "react";
import Label from "../Components/Label.jsx";
import Input from "../Components/Input.jsx";
import Title from "../Components/Title.jsx";
import Wrapper from "../Components/Wrapper.jsx";

const Combustivel = () => {
    const [valorGasolina, setValorGasolina] = useState("");
    const [valorAlcool, setValorAlcool] = useState("");
    const [quatidade, setQuantidade] = useState("");
    const [vantagem, setVantagem] = useState("");
    const [gastoTotalGasolina, setGastoTotalGasolina] = useState("");
    const [gastoTotalAlcool, setGastoTotalAlcool] = useState("");

    let calcularCombustivel = () => {
        setGastoTotalAlcool((valorAlcool * quatidade).toFixed(2))
        setGastoTotalGasolina((valorGasolina * quatidade).toFixed(2))

        if (valorGasolina < valorAlcool) {
            setVantagem("Gasolina")
        } else {    
            setVantagem("Álcool")
        }
    }

    return (
        <>      
                <Title>
                    Calculadora de Combustível
                </Title>
                <Wrapper>
                    <Label label_text="Qual o valor da Gasolina(R$):" />
                    <Input type="number" 
                           value={valorGasolina} 
                           onChange={(e) => { setValorGasolina(+e.target.value) }}
                    />
                </Wrapper>
                <Wrapper>
                    <Label label_text="Qual o valor do Álcool(R$):" />
                    <Input type="number" 
                           value={valorAlcool} 
                           onChange={(e) => { setValorAlcool(+e.target.value) }}
                    />
                </Wrapper>
                <Wrapper>
                    <Label label_text="Qual a quantidade de litros abastecidos para ambos(gasolina/álcool):" />
                    <Input type="number" value={quatidade} onChange={(e) => { setQuantidade(+e.target.value) }} />
                </Wrapper>
                <Wrapper>
                    <button onClick={calcularCombustivel}>Calcular</button>
                    <Label label_text="O gasto total será:" />
                    <span>
                        Gasto total com Álcool R$ {gastoTotalAlcool} <br/><br/>
                        Gasto total com Gasolina R$ {gastoTotalGasolina} <br/><br/>
                        Portanto, é vantajoso abastecer com: {vantagem}
                    </span>
                </Wrapper>
        </>
    )
}

export default Combustivel;