<?php

namespace App\Http\Controllers;

use App\Models\rastreador;
use Illuminate\Http\Request;

class RastreadorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($page)
    {
        $result = rastreador::with('operadora')->paginate(100, ['*'], 'page', $page);

        return response(['result' => $result], 200);
    }
}
