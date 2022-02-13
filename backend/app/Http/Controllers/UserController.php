<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(){

        $result = User::with('roles')->get();

        return response(['result' => $result], 200);

    }
}
