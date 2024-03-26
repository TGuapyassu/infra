import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
        width: 50%;
        height: 50vh;
        background-color: cyan;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    li{
        list-style: none;
    }

    a{
        color: black;
        text-decoration: none;
    }
`