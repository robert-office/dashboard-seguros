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
Route::get('/users/showAll/{page}', [UserController::class, 'getAllUsers']);
/// users by role
Route::get('/users/showAllByRole/{page}/{role}', [UserController::class, 'getUsersByRole']);

/// veiculos
Route::get('/veiculos/showAll/{page}', [VeiculoController::class, 'index']);

// seguros
Route::get('/seguros/showAll/{page}', [SeguroController::class, 'index']);

/// clientes
Route::get('/clientes/showAll/{page}', [ClienteController::class, 'index']);