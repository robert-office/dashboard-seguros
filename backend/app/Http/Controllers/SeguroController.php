<?php

namespace App\Http\Controllers;

use App\Models\seguro;
use Illuminate\Http\Request;

class SeguroController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($page)
    {

        /// retorna todos os seguros e todas as informações já vinculadas a ela
        $result = seguro::with('vendedor')->
        with('rastreador')->
        with('rastreadorOperadora')->
        with('veiculo')->
        with('veiculoTipo')->
        with('cliente')->
        paginate(100, ['*'], 'page', $page);

        return response(['result' => $result], 200);
    }
}
