import React, { useState } from "react";
import Label from "../Components/Label.jsx";
import Input from "../Components/Input.jsx";
import Title from "../Components/Title.jsx";
import Wrapper from "../Components/Wrapper.jsx";

const IMC = () => {
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [imc, setIMC] = useState("");
    const [classificacao, setClassificacao] = useState("");

    const calcularIMC = () => {
        if(peso === "" || altura === "") {
            alert("Preencha todos os campos!")
            return;
        }

        setIMC((peso/(altura*altura)).toFixed(2));

        if(imc < 18.5)
            setClassificacao("abaixo do peso")

        else if(imc >= 18.5 && imc < 24.9)
            setClassificacao("peso normal")

        else if(imc >= 25 && imc < 29.9)
            setClassificacao("sobrepeso")

        else if(imc >= 30 && imc < 34.9)
            setClassificacao("obesidade grau 1")

        else if(imc >= 35 && imc < 39.9)
            setClassificacao("obesidade grau 2")

        else
            setClassificacao("obesidade grau 3")
    }

    return (
        <>
                <Title>
                    Calculadora de IMC
                </Title>
                <Wrapper>
                    <Label label_text="Peso(KG):"/>
                    <Input type="number"
                           value={peso}
                           onChange={(e)=>{setPeso(+e.target.value)}}
                    />
                </Wrapper>
                <Wrapper>
                    <Label label_text="Altura(m):"/>
                    <Input type="number"
                           value={altura}
                           onChange={(e)=>{setAltura(+e.target.value)}}
                    />
                </Wrapper>
                <Wrapper>
                    <button onClick={calcularIMC}>
                        Calcular
                    </button>
                    <Label label_text="O seu IMC é:"/>
                    <span>
                        O seu IMC é {imc}<br/><br/>
                        Portanto você está classificado como {classificacao}
                    </span>
                </Wrapper>
        </>
    )
}

export default IMC;
