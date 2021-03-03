import styled from "styled-components";

export const Container = styled.section`
  background: #343434;
  border-radius: 5px;
  display: flex;
  margin-top: 3px;
  width: 100%;
  transition: .2s;
  align-items: center;

    &: hover{
        opacity: .7;
    }

    form{
      display: flex;
      width: 100%;

      button{
        margin-left: auto;;
      }

    }

  h3 {
    color: white;
    font-size: .9rem;
    font-family: Calibri;
    margin-left: 10px;
    margin-right: 10px;
    overflow: hidden;
    padding: 2px;
    width: 300px;
  }

  input{
    background: #454545;
    border: 1px solid #202020;
    border-radius: 4px;
    width: 300px;
    cursor: pointer;
    color: white;
    padding: 5px;
    margin-left: 5px;
    outline: none;
    transition: .2s;
    margin: 1px;

    &:hover{
      border: 1px solid grey;
    }
  }

  p {
    color: white;
    font-family: Calibri;
    padding: 2px;
    overflow: hidden;
    width: 200px;
    font-size: .9rem;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    h3 {
      width: 100%;
      padding: 0 5px 0 5px;
    }
    p {
      width: 100%;
      padding: 0 5px 0 5px;
    }
  }
`;

export const Buttons = styled.section`
    margin-left: auto;
    margin-right: 10px;

    @media screen and (max-width: 700px){
      margin-left: 0;
    }
`;

export const Edit = styled.button`
  margin-right: 15px;
  background: #7B68EE;
  outline: none;
  padding: 5px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  margin: 5px;
  color: white;
  font-weight: bold;
  &:hover{
    font-size: .9rem;
    opacity: .8;
}
`;

export const Excluir = styled.button`
  background: #B22222;
  border: none;
  border-radius: 4px;
  padding: 5px;
  margin: 5px;
  cursor: pointer;
  color: white;
  font-weight: bold;
  transition: .3s;
  &:hover{
      font-size: .9rem;
      opacity: .8;
  }
`;