<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class EstabelecimentoCliente extends Model
{
    public $timestamps = false;
    protected $fillable = ['estabelecimento_id', 'cliente_id'];

}