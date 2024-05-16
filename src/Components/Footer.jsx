import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
    color: azure;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;   
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.55);
`;

const Footer = () => {
    return(
        <StyledFooter>
            <p>Desenvolvido por <a href="https://github.com/devramoss">devramoss</a></p>
        </StyledFooter>
    );
}

export default Footer;