import styled from "styled-components";
import { Link } from 'react-router-dom';

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

export const Button2 = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  width: 100px;
  height: 50px;
  border: 3px solid gray;
  transition: background 0.3s;
  margin: 20px;

  &:hover {
    background: cian;
  }
`;