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

    /**
     * Create a seguro in db with the infos in request
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        // valida os campos
        $filds = $request->validate([
            'valor' => 'string',
            'id_veiculo' => 'string',
            'id_cliente' => 'string',
            'id_vendedor' => 'string'
        ]);

        $seguro = seguro::create([
            'valor' => $filds['valor'],
            'id_veiculo' => $filds['id_veiculo'],
            'id_cliente' => $filds['id_cliente'],
            'id_vendedor' => $filds['id_vendedor']
        ]);

        if ($seguro) {
            return response($seguro, 200);
        }
    }
}
