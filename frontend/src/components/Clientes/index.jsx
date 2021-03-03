import React, {useEffect, useState} from 'react';
import * as S from './styles';
import api from '../../services/api';
import ItemCliente from '../ItemCliente';

function Clientes ({idRestaurante}){
const [clientes, setClientes] = useState([]);
const [addCliente, setAddCliente] = useState(false);
const [contentButton, setContentButton] = useState('Novo Cliente');

const [nome, setNome] =  useState('');
const [email, setEmail] = useState('');

async function recuperarClientes(){
    await api.get(`/${idRestaurante}/clientes`)
    .then(response=>{
        setClientes([...response.data]);
    })
}

function validarForm(e){
    if(nome.replace(/\s/g, '') === ''){
        alert("Digite um nome");
     } else 
     if(email.replace(/\s/, '') === ''){
         alert("Digite um email");
     } else {
        adicionarCliente(e);
    }
}

async function adicionarCliente(e){
    api.post(`${idRestaurante}/clientes`, {
        "nome": nome,
        "email": email
    })
    .then(response => {
        setEmail('');
        setNome('');
    })
    .then(e => setAddCliente(!addCliente));
}

useEffect(()=> {
    recuperarClientes();
    setContentButton(!addCliente ? 'Novo Cliente' : 'Salvar');
}, [idRestaurante, addCliente])


    return (
        <S.Container>

        {!addCliente &&
        clientes.map(cliente=>(
            cliente!==null &&
            <ItemCliente key={cliente.id} idCliente={cliente.id} nome={cliente.nome} email={cliente.email} estabelecimentoId={idRestaurante}/>
        ))
        
        }
        {(!addCliente && idRestaurante!=0) && 
            <S.Button onClick={e=>{setAddCliente(!addCliente)}}>{contentButton}</S.Button>
        }

        {addCliente &&
            <S.FormAddCliente onSubmit= {e=>{e.preventDefault(); validarForm(e);}}>

                <label>Nome: </label>
                <input value={nome} onChange={e=> setNome(e.target.value)} type="text"/>
                <label>E-mail: </label>
                <input value={email} onChange={e=> setEmail(e.target.value)} type="email"/>

                <S.SectionButtons>
                    <S.ButtonForm>{contentButton}</S.ButtonForm>
                    <S.CancelledButton onClick={e=>{setNome(''); setEmail(''); setAddCliente(!addCliente)}}>Cancelar</S.CancelledButton>
                </S.SectionButtons>
                
            </S.FormAddCliente>
        }


        </S.Container>
);

}

export default Clientes;