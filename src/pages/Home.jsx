import React, { useState } from "react";
import Label from "../Components/Label.jsx";
import Input from "../Components/Input.jsx";
import Title from "../Components/Title.jsx";
import Wrapper from "../Components/Wrapper.jsx";

const Home = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("");
    const [operacaoSelecionada, setOperacaoSelecionada] = useState("subtracao");

    const calcular = () => {
        if (operacaoSelecionada === "soma") {
            setResult(Number(num1) + Number(num2));
        }
        else if (operacaoSelecionada === "subtracao") {
            setResult(Number(num1) - Number(num2));
        }
        else if (operacaoSelecionada === "multiplicacao") {
            setResult(Number(num1) * Number(num2));
        }
        else {
            setResult(Number(num1) / Number(num2));
        }
    }

    return (
        <>
            <Title>
                Calculadora Básica
            </Title>
            <Wrapper>
                <Label label_text="Qual operação entre dois números você deseja realizar?" />
                <select value={operacaoSelecionada} onChange={(e)=>setOperacaoSelecionada(e.target.value)}>
                    <option value="soma">Soma</option>
                    <option value="subtracao">Subtração</option>
                    <option value="multiplicacao">Multiplicação</option>
                    <option value="divisao">Divisão</option>
                </select>
            </Wrapper>

            <Wrapper>
                <Label label_text="Digite o primeiro número:" />
                <Input type="number"
                    value={num1}
                    onChange={(e) => { setNum1(+e.target.value) }}
                />
            </Wrapper>
            <Wrapper>
                <Label label_text="Digite o segundo número:" />
                <Input type="number"
                    value={num2}
                    onChange={(e) => { setNum2(+e.target.value) }}
                />
            </Wrapper>

            <Wrapper>
                <button onClick={calcular}>
                    Somar
                </button>
                <Label label_text="Resultado:" />
                <span>
                    {result}
                </span>
            </Wrapper>
        </>
    )
}

export default Home;
