<?php

namespace App\Http\Controllers;

use App\Models\operadoras;
use Illuminate\Http\Request;

class OperadorasController extends Controller
{
    public function showOperadorasPercentageBySeguro()
    {
        $result = operadoras::with('seguros')->get();

        return response($result);
    }
}
