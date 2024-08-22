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
    background-color: rgba(251, 76, 0, 1);
    cursor: pointer;
    color: white;
    border-radius: 35px;

    &:hover {
        background: rgba(69, 30, 68, 1);
        color: rgba(241, 230, 178, 1);
    }
`

export const Button2 = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(251, 76, 0, 1);
  color: white;
  width: 100px;
  height: 50px;
  border: 3px solid gray;
  margin: 20px;
  border-radius: 35px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
      background: rgba(69, 30, 68, 1);
      color: rgba(241, 230, 178, 1);
  }
`;