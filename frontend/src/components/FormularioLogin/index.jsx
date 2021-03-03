import React, {useState} from "react";
import * as S from "./styles";
import apiLogin from '../../services/apiLogin';
import {useHistory } from "react-router-dom";

function FormularioLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let history = useHistory();

  function verificarDados(){
    if(email.replace(/\s/g, '') === ''){
      alert('Digite um usuário!');
    } else
    if(password.replace(/\s/g, '') === ''){
        alert('Digite uma senha!');
    } else {
      tryingToLogin();
    }
  }

  async function tryingToLogin(){
    await apiLogin.post('', {
      "email": email, 
      "password": password
    }).then(response => {
      //console.log(response.data.access_token);
      gravarOnStorage(response.data.access_token);
    })
  };

  function gravarOnStorage(jwtToken){
    localStorage.setItem('key', jwtToken);
    history.push('/');
  }

  
  return (
    <>
      <S.Section>
        <S.Formulario onSubmit={e=> {e.preventDefault(); verificarDados()}}>
          <S.Input>
            <span>E-mail</span>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
          </S.Input>
          <S.Input>
            <span>Password</span>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
          </S.Input>
          <S.Button type="submit">Entrar</S.Button>
        </S.Formulario>
      </S.Section>
    </>
  );
}

export default FormularioLogin;
