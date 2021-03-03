<?php
namespace App\Http\Controllers;

use App\Cliente;
use Illuminate\Http\Request;

class ClienteController
{
    public function index(int $id){
        $estabelecimentocliente = new EstabelecimentoClienteController();
        $idClientesCadastrados = $estabelecimentocliente::index($id);
        $idClientesCadastradosJson = json_decode($idClientesCadastrados);

        $clientes = [];
        foreach($idClientesCadastradosJson as $item){
            //array_push($clientes, $cliente->cliente_id);

            $cliente = Cliente::find($item->cliente_id);
            array_push($clientes, $cliente);
        }
        return response()->json($clientes);
    }


    public function show(int $id, int $id_cliente){
        $estabelecimentoCliente = new EstabelecimentoClienteController();
        $idClienteCadastrado = $estabelecimentoCliente::show($id, $id_cliente);
        $idClienteCadastradoDecode = json_decode($idClienteCadastrado);
        if(!array_key_exists(0, $idClienteCadastradoDecode)){
            return response()->json('Usuário não cadastrado', 404);
        }else {
        $idCliente = $idClienteCadastradoDecode[0]->cliente_id;
        }
        
        $cliente = Cliente::find($idCliente);
        if(is_null($cliente)){
            return response()->json('Usuário não cadastrado neste estabelecimento', 404);
        }
        return response()->json($cliente);
    }

    public function update(int $id, int $id_cliente, Request $request){
        $estabelecimentoCliente = new EstabelecimentoClienteController();
        $idClienteCadastrado = $estabelecimentoCliente::show($id, $id_cliente);
        $idClienteCadastradoDecode = json_decode($idClienteCadastrado);
        if(!array_key_exists(0, $idClienteCadastradoDecode)){
            return response()->json('Usuário não cadastrado', 404);
        }else {
        $idCliente = $idClienteCadastradoDecode[0]->cliente_id;
        }
        
        $cliente = Cliente::find($idCliente);
        if(is_null($cliente)){
            return response()->json('Usuário não cadastrado neste estabelecimento', 404);
        }
        $cliente->fill($request->all());
        $cliente->save();

        return $cliente;
    }


    public function add(int $id, Request $request){
        $cliente = Cliente::create($request->all());
        $estabelecimentocliente = new EstabelecimentoClienteController();
        $estabelecimentocliente::add($id, $cliente->id);
        return response()->json($cliente, 201);
    }
}