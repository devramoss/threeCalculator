import styled from "styled-components";

const StyledLabel = styled.label`
    display: block;
    margin: 10px 0;
    font-size: 1.2em;
    color: #333;
`

const Label = (props) => {
    return(
        <StyledLabel>
            {props.label_text}
        </StyledLabel>
    )
}

export default Label;