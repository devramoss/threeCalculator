import styled from "styled-components";

const StyledInput = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 1.2em;
    box-sizing: border-box;
    &:focus {
        outline: none;
        border: 1px solid #333;
    }
    &::placeholder {
        color: #ccc;
    }`

const Input = (props) => {
    return(
        <StyledInput {...props} />
    )
}

export default Input;