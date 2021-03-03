import styled from "styled-components";

export const Section = styled.section`
  width: 60%;
  margin: auto;
  padding-top: 30px;
  min-width: max-content;

  @media screen and (max-width: 650px){
      width: 80%;
  }

  @media screen and (max-width: 450px){
      width: 95%;
  }
`;

export const Formulario = styled.form`
  width: 100%;
  background: #836fff;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  padding-bottom: 20px;

`;

export const Input = styled.section`
  width: 50%;
  min-width: max-content;
  margin: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    color: #ffffff;
    width: max-content;
    background: #836fff;
    position: relative;
    top: 10px;
    left: 10px;
    font-family: Calibri;
    font-size: 1.2rem;
    padding: 0 10px 0 10px;
  }

  input {
    background: #836fff;
    border-radius: 5px;
    cursor: pointer;
    color: #f1f1f1;
    font-size: 1.2rem;
    font-family: Calibri;
    height: max-content;
    min-width: 250px;
    padding: 10px;
    outline: none;
    text-align: center;
    width: 100%;
    border: 1px solid white;
    transition: 0.2s;

    &:hover {
      border: 1px solid #483d8b;
    }
  }

  @media screen and (max-width: 800px){
    width: 70%;
  }

  @media screen and (max-width: 450px){
      width: 95%;
  }

  
`;

export const Button = styled.button`
  background: #836fff;
  border-radius: 5px;
  border: 2px solid white;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  font-family: Calibri;
  letter-spacing: 0.1rem;
  margin: auto;
  padding: 5px;
  text-transform: uppercase;
  transition: .2s;
  margin-top: 20px;
  width: 40%;

  &:hover{
      opacity: .5;
      cursor: pointer;
  }
`;
