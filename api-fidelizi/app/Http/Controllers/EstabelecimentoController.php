<?php
namespace App\Http\Controllers;

use App\Estabelecimento;
use Illuminate\Http\Request;

class EstabelecimentoController
{
    public function show(int $id)
    {
        $estabelecimento = Estabelecimento::find($id);
        if(is_null($estabelecimento)){
            return response()->json('', 204);
        }
        return response()->json($estabelecimento);
    }

    public function all(){
        $estabelecimentos = Estabelecimento::all();
        if(is_null($estabelecimentos)){
            return response()->json('Não há estabelecimentos cadastrados');
        }
        return response()->json($estabelecimentos);
    }
}