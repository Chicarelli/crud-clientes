import React, {useEffect, useState} from 'react';
import * as S from './styles';
import api from '../../services/api';

function ItemCliente({idCliente, nome, email, estabelecimentoId}){
    const [editar, setEditar] = useState(false);
    const [contentButton, setContentButton] = useState('Editar');
    const [clienteNome, setClienteNome] = useState({nome}.nome);
    const [clienteEmail, setClienteEmail] = useState({email}.email);

    const [inputNome, setInputNome] = useState({nome}.nome);
    const [inputEmail, setInputEmail] = useState({email}.email);

    useEffect(()=> {
        setContentButton(editar ? 'Salvar' : 'Editar');

    }, [editar])

    
    // async function excluirCliente(){
    //     await api.delete()
    // }

    async function salvarDados(e){
        api.put(`${estabelecimentoId}/clientes/${idCliente}`, {
            "nome" : inputNome,
            "email" : inputEmail
        })
        .then(response=> {
            setClienteEmail(response.data.email);
            setClienteNome(response.data.nome);
        })
        .then(e => setEditar(!editar));
    }
    return(       
        <>
        <S.Container>

        { !editar && 
        <>
        <h3>{clienteNome}</h3>
        <p>{clienteEmail}</p>
        <S.Buttons>
            <S.Edit onClick={e => {setEditar(!editar);}}>
                {contentButton}
            </S.Edit>
        </S.Buttons>
        </>   
        }


        { editar &&
        <>
        <form onSubmit={e => {e.preventDefault(); salvarDados(e)}}>
        <input value={inputNome} type="text" onChange={e => setInputNome(e.target.value)}/>
        <input value={inputEmail} type="text" onChange={e => setInputEmail(e.target.value)}/>
        <S.Buttons>
            <S.Edit type="submit">
                {contentButton}
            </S.Edit>
        </S.Buttons>
        </form>
        </>
        }
        
        </S.Container>
        </>
    );
}

export default ItemCliente;

