<?php

namespace App\Http\Controllers;

use App\Models\seguro;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PhpParser\Node\Expr\Cast\String_;

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
        $result = seguro::with('vendedor')->with('rastreador')->with('rastreadorOperadora')->with('veiculo')->with('veiculoTipo')->with('cliente')->paginate(100, ['*'], 'page', $page);

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

    public function show($id)
    {
        $seguro = seguro::where('id', $id)->with('vendedor')->with('veiculo')->with('cliente')->first();

        if ($seguro) {
            return response($seguro, 200);
        }

        return response(['erro' => 'não foi achado o registro'], 400);
    }

    public function showSalesPerYear()
    {
        $resultados = [];

        /// percorre por 5 anos atrás e traz a contagem de seguros
        /// o selectRaw não está funcionando
        /// por isso estou utilizando esse método
        for ( $anoSubstrainte = 0; $anoSubstrainte <= 4; $anoSubstrainte++ ){
            $anoAtual = Carbon::now()->year() - $anoSubstrainte;

            $CountOfSearchByYear = seguro::all(['id', 'created_at'])->filter(function ($value) use ($anoAtual) {
                return $value->created_at->year === $anoAtual; // assuming, that your timestamp gets converted to a Carbon object.
            })->count();

            array_push($resultados, [$anoAtual => $CountOfSearchByYear]);
        }

        return response($resultados);
    }

    /**
     * Create a seguro in db with the infos in request
     *
     * @return \Illuminate\Http\Response
     */
    public function update($id, Request $request)
    {
        // valida os campos
        $filds = $request->validate([
            'id_veiculo' => 'string',
            'id_cliente' => 'string',
            'id_vendedor' => 'string',
            'valor' => 'string'
        ]);

        $seguro = seguro::where('id', $id)->update([
            'valor' => $filds['valor'],
            'id_cliente' => $filds['id_cliente'],
            'id_vendedor' => $filds['id_vendedor'],
            'id_veiculo' => $filds['id_veiculo']
        ]);

        if ($seguro) {
            return response($seguro, 200);
        }

        return response(['erro' => 'não consegiu editar'], 400);
    }
}
