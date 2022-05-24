<?php

namespace App\Http\Controllers;

use App\Models\operadoras;
use Illuminate\Http\Request;

class OperadorasController extends Controller
{
    public function showOperadorasPercentageBySeguro()
    {
        $result = operadoras::with('seguro')->get();

        return response($result);
    }
}
