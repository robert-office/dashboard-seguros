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
        $result = rastreador::with('operadora')->paginate(15, ['*'], 'page', $page);

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
     * @param  \App\Models\rastreador  $rastreador
     * @return \Illuminate\Http\Response
     */
    public function show(rastreador $rastreador)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\rastreador  $rastreador
     * @return \Illuminate\Http\Response
     */
    public function edit(rastreador $rastreador)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\rastreador  $rastreador
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, rastreador $rastreador)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\rastreador  $rastreador
     * @return \Illuminate\Http\Response
     */
    public function destroy(rastreador $rastreador)
    {
        //
    }
}
