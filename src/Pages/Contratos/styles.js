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
    background-color: rgba(251, 76, 0, 1);
    width: 35%;
    height: 65px;
    border: 3px solid gray;
    margin: 10px;
    text-decoration: none;
    color: black;
    font-size: 25px;
    color: white;
    border-radius: 35px;

    &:hover {
        background: rgba(69, 30, 68, 1);
        color: rgba(241, 230, 178, 1);
    }
`