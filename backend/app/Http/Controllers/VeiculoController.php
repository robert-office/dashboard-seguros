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
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\veiculo  $veiculo
     * @return \Illuminate\Http\Response
     */
    public function show(veiculo $veiculo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\veiculo  $veiculo
     * @return \Illuminate\Http\Response
     */
    public function edit(veiculo $veiculo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\veiculo  $veiculo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, veiculo $veiculo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\veiculo  $veiculo
     * @return \Illuminate\Http\Response
     */
    public function destroy(veiculo $veiculo)
    {
        //
    }
}
