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
     * show the Veiculo
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $result = veiculo::where('id', $id)->with('cliente')->with('tipo')->get()->first();
        return response($result, 200);
    }

    /**
     * Create the Veiculo in db with the infos in request
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        // valida os campos
        $filds = $request->validate([
            'nome' => 'string|nullable',
            'valor' => 'string|nullable',
            'tipo' => 'between:1,3',
            'id_cliente' => 'string',
        ]);

        $veiculo = veiculo::create([
            'nome' => $filds['nome'],
            'valor' => $filds['valor'],
            'tipo' => $filds['tipo'],
            'id_cliente' => $filds['id_cliente']
        ]);

        if ($veiculo) {
            return response($veiculo, 201);
        }

        return response(['error' => 'não conseguiu criar o veiculo'], 400);
    }

    /**
     * Update the Veiculo in db with the infos in request
     *
     * @return \Illuminate\Http\Response
     */
    public function update($id, Request $request)
    {
        // valida os campos
        $filds = $request->validate([
            'nome' => 'string|nullable',
            'valor' => 'string|nullable',
            'tipo' => 'between:1,3|nullable',
        ]);

        $veiculo = veiculo::where('id', $id)->update([
            'nome' => $filds['nome'],
            'valor' => $filds['valor'],
            'tipo' => $filds['tipo']
        ]);

        if ($veiculo) {
            $response = veiculo::where('id', $id)->get();
            return response($response);
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function showIfCarsIsFree($id)
    {
        $result = [];

        veiculo::where('id_cliente', $id)->each(function( $veiculo ){
            if( $veiculo->seguro()->exists() ) {
                return;
            }

            array_push($result, $veiculo);
        });

        return response(['result' => $result], 200);
    }
}
