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
     * @param  \App\Models\seguro  $seguro
     * @return \Illuminate\Http\Response
     */
    public function show(seguro $seguro)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\seguro  $seguro
     * @return \Illuminate\Http\Response
     */
    public function edit(seguro $seguro)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\seguro  $seguro
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, seguro $seguro)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\seguro  $seguro
     * @return \Illuminate\Http\Response
     */
    public function destroy(seguro $seguro)
    {
        //
    }
}
