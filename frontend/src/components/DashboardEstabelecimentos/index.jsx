import React, { useState, useEffect } from "react";
import * as S from "./styles";
import api from "../../services/api";
import {Redirect} from 'react-router-dom';

import Clientes from "../Clientes";

function DashboardEstabelecimentos() {
  const [estabelecimentos, setEstabelecimentos] = useState([]);
  const [estabelecimentoSelecionado, setEstabelecimentoSelecionado] = useState(0);
  const [autorizado, setAutorizado] = useState(true);

  var token = localStorage.getItem("key");
  api.defaults.headers.common["Authorization"] = token;

  async function buscarRestaurante() {
    try {
      await api.get("").then((response) => {
        setEstabelecimentos([...response.data]);
      });
    } catch {
      setAutorizado(!autorizado);
    }
  }

  useEffect(() => {
    buscarRestaurante();
  }, []);

  return (
    <S.Container>
      {!autorizado &&
        <Redirect to="/login"/>
      }
      <label>Selecione um restaurante: </label>
      <select
        name="restaurante"
        value={estabelecimentoSelecionado}
        onChange={(e) => {
          setEstabelecimentoSelecionado(e.target.value);
        }}
      >
        <option value="0"></option>
        {estabelecimentos.map((estabelecimento) => (
          <option key={estabelecimento.id} value={estabelecimento.id}>
            {estabelecimento.nome}
          </option>
        ))}
      </select>

      {estabelecimentoSelecionado !== 0 && (
        <Clientes idRestaurante={estabelecimentoSelecionado} />
      )}
    </S.Container>
  );
}

export default DashboardEstabelecimentos;
