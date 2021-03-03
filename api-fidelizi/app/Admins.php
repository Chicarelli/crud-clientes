<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Admins extends Model
{
    public $timestamps = false;
    protected $fillable = ['nome', 'email', 'password'];

    protected $hidden = ['password'];

}