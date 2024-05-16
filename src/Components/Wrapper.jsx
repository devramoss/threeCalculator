import styled from "styled-components";

const Wrapper = styled.div`
    margin-left: 50px;
    margin-right: 50px;

    select {
        padding: 10px;
        margin: 10px 0;
        border-radius: 5px;
        border: 1px solid #ccc;
        font-size: 1.2em;
        background-color: #f9f9f9;
        cursor: pointer;
        &:focus {
            outline: none;
            border: 1px solid #333;
        }
    }
    span {
        color: #a71212;
        font-size: 27px;
    }

    button {
        width: 280px;
        padding: 10px;
        margin: 18px 43%;
        border-radius: 5px;
        border: 1px solid #ccc;
        font-size: 1.2em;
        background-color: #000000;
        color: white;
        cursor: pointer;
        &:focus {
            outline: none;
            border: 1px solid #333;
        }
    }
`;

export default Wrapper;

