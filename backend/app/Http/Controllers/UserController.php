<?php

namespace App\Http\Controllers;

use App\Models\role;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getAllUsers($page = 1){
        $result = User::with('roles')->paginate(15, ['*'], 'page', $page);
        return response(['result' => $result], 200);
    }

    public function getUsersByRole($page = 1, $role = 2){
        $result = role::with('rolesUsersRoles')->where('id', '=', $role)->paginate(15, ['*'], 'page', $page);
        return response(['result' => $result], 200);
    }
}
