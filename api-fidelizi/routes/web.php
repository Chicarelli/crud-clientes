<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->group(['prefix' => '/api/v2/estabelecimentos', 'middleware'=>'auth'], function () use ($router) {
    $router->get('', 'EstabelecimentoController@all'); //Retorna todos os restaurantes
    $router->get('{id}', 'EstabelecimentoController@show'); //Retorna informações do estabelecimento.
    $router->post('{id}/clientes', 'ClienteController@add');//Cria Cliente em um estabelecimento e relaciona na tabela estabelecimentocliente. 
    $router->get('{id}/clientes', 'ClienteController@index'); // Retorna todos os clientes de um estabelecimento
    $router->get('{id}/clientes/{id_cliente}', 'ClienteController@show');
    $router->put('{id}/clientes/{id_cliente}', 'ClienteController@update');
});

$router->post('api/login', 'TokenController@generate');
