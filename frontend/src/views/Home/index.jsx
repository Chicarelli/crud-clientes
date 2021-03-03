import '../../App.css'
import React from "react";
import { Redirect } from "react-router-dom";

import * as S from './styles';
import DashboardEstabelecimento from '../../components/DashboardEstabelecimentos';

function Home() {
  var jwt_key = localStorage.getItem("key");
  //console.log(jwt_key);

  return (
    <>
      {jwt_key == null && <Redirect to="/login" />}
      <S.Container>
        <S.Header>
          <h1>Dashboard</h1>
          <span></span>
        </S.Header>

        <DashboardEstabelecimento/>

      </S.Container>      
    </>
  );
}

export default Home;
