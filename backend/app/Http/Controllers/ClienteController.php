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
        $response = cliente::with('UltimoVeiculo')->with('UltimoSeguro')->paginate(100, ['*'], 'page', $page);

        return response(['result' => $response], 200);
    }

    /**
     * Display the infos of the resource where id equals id in db.
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $response = cliente::with('veiculos')->with('seguros')->where('id', '=', $id)->get()->first();

        return response($response, 200);
    }

    /**
     * Update the cliente in db with the infos in request
     *
     * @return \Illuminate\Http\Response
     */
    public function update($id, Request $request)
    {
        // valida os campos
        $filds = $request->validate([
            'nome' => 'string|nullable',
            'nome_fantasia' => 'string|nullable',
            'data_aniversario' => 'string|nullable',
        ]);

        $cliente = cliente::where('id', $id)->update([
            'nome' => $filds['nome'],
            'nome_fantasia' => $filds['nome_fantasia'],
            'data_aniversario' => $filds['data_aniversario']
        ]);

        if ($cliente) {
            $response = cliente::where('id', $id)->get();
            return response($response);
        }
    }
}
