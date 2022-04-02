<?php

namespace App\Http\Controllers;

use App\Models\veiculo;
use Illuminate\Http\Request;

class VeiculoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($page)
    {
        $result = veiculo::with('cliente')->with('tipo')->paginate(100, ['*'], 'page', $page);

        return response(['result' => $result], 200);
    }

   /**
     * Update the veiculo in db with the infos in request
     *
     * @return \Illuminate\Http\Response
     */
    public function update($id, Request $request)
    {
        // valida os campos
        $filds = $request->validate([
            'nome' => 'string|nullable',
            'tipo' => 'int|nullable',
            'valor' => 'float|nullable',
        ]);

        $cliente = veiculo::where('id', $id)->update([
            'nome' => $filds['nome'],
            'nome_fantasia' => $filds['nome_fantasia'],
            'data_aniversario' => $filds['data_aniversario']
        ]);

        if ($cliente) {
            $response = veiculo::where('id', $id)->get();
            return response($response);
        }
    }
}
