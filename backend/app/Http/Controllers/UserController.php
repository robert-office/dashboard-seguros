<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index($page){

        $result = User::with('roles')->paginate(15, ['id', 'nome'], 'page', $page);
        

        return response(['result' => $result], 200);

    }
}
