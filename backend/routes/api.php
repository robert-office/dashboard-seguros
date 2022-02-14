<?php

use App\Http\Controllers\RastreadorController;
use App\Http\Controllers\SeguroController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VeiculoController;
use Illuminate\Support\Facades\Route;

/// rastreadores
Route::get('/rastreadores/show', [RastreadorController::class, 'index']);

/// users
Route::get('/users/show', [UserController::class, 'index']);

/// veiculos
Route::get('/veiculos/show', [VeiculoController::class, 'index']);

// seguros
Route::get('/seguros/show', [SeguroController::class, 'index']);