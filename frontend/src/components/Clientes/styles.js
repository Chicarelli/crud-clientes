import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 10px;
`;

export const Button = styled.button`
  background: green;
  border: 2px solid green;
  border-radius: 10px;
  color: #f1f1f1;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin-left: auto;
  margin-right: 30px;
  margin-top: 20px;
  outline: none;
  padding: 10px;
  transition: 0.4s;
  width: 130px;

  &:hover {
    border: 2px solid #808080;
    opacity: 0.8;
  }
`;

export const FormAddCliente = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
  padding: 15px;
  background: #282828;
  border-radius: 5px;
  border: 3px solid #404040;

  label {
    font-size: 0.9rem;
  }
  input {
    background: none;
    border: 1px solid #404040;
    padding: 4px;
    color: white;
    margin-bottom: 20px;
  }
`;

export const SectionButtons = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px 0 10px;
`;

export const CancelledButton = styled.button`
  padding: 10px;
  background: red;
  border: 2px solid red;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.2s;
  outline: none;

  &:hover {
    opacity: 0.7;
  }
`;

export const ButtonForm = styled.button`
  width: 90px;
  padding: 10px;
  background: green;
  border: 2px solid green;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.2s;
  outline: none;

  &:hover {
    opacity: 0.7;
  }
`;
