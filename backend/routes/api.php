<?php

use App\Http\Controllers\RastreadorController;
use App\Http\Controllers\SeguroController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VeiculoController;
use Illuminate\Support\Facades\Route;

/// rastreadores
Route::get('/rastreadores/show/{page}', [RastreadorController::class, 'index']);

/// users
Route::get('/users/show/{page}', [UserController::class, 'index']);

/// veiculos
Route::get('/veiculos/show/{page}', [VeiculoController::class, 'index']);

// seguros
Route::get('/seguros/show/{page}', [SeguroController::class, 'index']);