<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Estabelecimento extends Model
{
    public $timestamps = false;
    protected $fillable = ['nome'];

}