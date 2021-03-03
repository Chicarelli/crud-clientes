<?php
namespace App\Http\Controllers;

use App\EstabelecimentoCliente;
use Illuminate\Http\Request;

class EstabelecimentoClienteController
{
    public static function add(int $idEstabelecimento, int $idCliente){
        $estabelecimentoCliente = EstabelecimentoCliente::create([
            "estabelecimento_id" => $idEstabelecimento,
            "cliente_id" => $idCliente
        ])->all();
    }

    public static function index(int $id){
        $idCliente = EstabelecimentoCliente::where('estabelecimento_id', $id)->get(); 
        //$idCliente = EstabelecimentoCliente::where('estabelecimento_id',$id)->get();
        return(json_encode($idCliente));
    }

    public static function show(int $id, int $clienteid){
        $idCliente = EstabelecimentoCliente::where('estabelecimento_id', $id)
            ->where('cliente_id', $clienteid)
            ->get();
        return json_encode($idCliente);
    }
}