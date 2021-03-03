import styled from "styled-components";

export const Container = styled.div`

  width: 85%;
  margin: auto;
  padding: 10px 5px 10px 5px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  label{
        color: white;
        font-size: 1.1rem;
        padding-left: 2px;
  }

  select{
      padding: 9px 0px 9px 0px;
      font-size: 1rem;
      background: #404040;
      outline: none;
      border-radius: 4px;
      font-weight: bold;
      color: white;
      transition: .3s;
    
      &:hover{
          cursor: pointer;
          border: 1px solid black;
          opacity: .8;
      }
  }
`;
