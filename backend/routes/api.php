<?php

use App\Http\Controllers\RastreadorController;
use App\Http\Controllers\SeguroController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VeiculoController;
use App\Http\Controllers\ClienteController;
use Illuminate\Support\Facades\Route;

/// rastreadores
Route::get('/rastreadores/showAll/{page}', [RastreadorController::class, 'index']);

/// users
Route::get('/users/show/{id}', [UserController::class, 'show']);
Route::post('/users/create', [UserController::class, 'create']);
Route::post('/users/edit/{id}', [UserController::class, 'update']);
Route::get('/users/showAll/{page}', [UserController::class, 'getAllUsers']);
Route::get('/users/showAllByRole/{page}/{role}', [UserController::class, 'getUsersByRole']);

/// veiculos
Route::get('/veiculos/showAll/{page}', [VeiculoController::class, 'index']);
Route::get('/veiculos/show/{id}', [VeiculoController::class, 'show']);
Route::post('/veiculos/create', [VeiculoController::class, 'create']);
Route::post('/veiculos/edit/{id}', [VeiculoController::class, 'update']);

/// clientes
Route::get('/clientes/showAll/{page}', [ClienteController::class, 'index']);
Route::get('/clientes/show/{id}', [ClienteController::class, 'show']);
Route::post('/clientes/create', [ClienteController::class, 'create']);
Route::post('/clientes/edit/{id}', [ClienteController::class, 'update']);

// seguros
Route::get('/seguros/showAll/{page}', [SeguroController::class, 'index']);