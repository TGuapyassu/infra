import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Input = styled.input`
    display: flex;
    margin: 5px;
    padding: 15px;
    width: 50%;
`

export const Button = styled.button`
    width: 100%;
    height: 100%;
    background-color: gray;
    cursor: pointer;
`