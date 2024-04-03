import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Button = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: cyan;
    width: 50%;
    height: 80px;
    border: 3px solid gray;
    margin: 10px;
    text-decoration: none;
    color: black;
    font-size: 25px;

    &:hover {
        background: gray;
    }
`