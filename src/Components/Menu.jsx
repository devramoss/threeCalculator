import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledMenu = styled.nav`
    height: 73px;
    background-color: rgba(0, 0, 0, 0.55);

    ul{
        display: flex;
        justify-content: space-around;
        list-style-type: none;
        padding-top: 20px;
        font-size: 21px;
    }
`

const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><Link to={`/`}>Calculadora Básica</Link></li>
                <li><Link to={`/imc`}>Calculadora de IMC</Link></li>
                <li><Link to={`/combustivel`}>Calculadora de Gasolina</Link></li>
            </ul>
        </StyledMenu>
    )
}

export default Menu;