<?php

namespace App\Http\Controllers;

use App\Models\cliente;
use Illuminate\Http\Request;

class ClienteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($page)
    {
        $response = cliente::with('ultimoVeiculo')->with('ultimoSeguro')->paginate(15, ['*'], 'page', $page);

        return response(['result' => $response], 200);
    }
}
