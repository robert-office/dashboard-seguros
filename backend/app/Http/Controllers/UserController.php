<?php

namespace App\Http\Controllers;

use App\Models\role;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index($page, $role){

        if( $role ) {
            $result = role::with('rolesUsersRoles')->where('id', '=', $role)->paginate(15, ['*'], 'page', $page);
            return response(['result' => $result], 200);
        }
    }
}
