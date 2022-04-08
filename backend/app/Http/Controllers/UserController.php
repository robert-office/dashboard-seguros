<?php

namespace App\Http\Controllers;

use App\Models\role;
use App\Models\User;
use App\Models\userRole;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getAllUsers($page = 1){
        $result = User::with('roles')->paginate(100, ['*'], 'page', $page);
        return response(['result' => $result], 200);
    }

    public function getUsersByRole($page = 1, $role = 2){
        $result = role::with('rolesUsersRoles')->where('id', '=', $role)->paginate(100, ['*'], 'page', $page);
        return response(['result' => $result], 200);
    }

    public function show($id){
        $result = User::where('id', $id)->get()->first();
        return response($result, 200);
    }

    /**
    * Update the User in db with the infos in request
    *
    * @return \Illuminate\Http\Response
    */
    public function update($id, Request $request)
    {
        // valida os campos
        $filds = $request->validate([
            'nome' => 'string|nullable',
            'nome_fantasia' => 'string|nullable',
            'data_aniversario' => 'string|nullable',
            'email' => 'string|nullable',
        ]);

        $user = User::where('id', $id)->update([
            'nome' => $filds['nome'],
            'nome_fantasia' => $filds['nome_fantasia'],
            'data_aniversario' => $filds['data_aniversario'],
            'email' => $filds['email']
        ]);

        if ($user) {
            $response = User::where('id', $id)->get();
            return response($response);
        }
    }

    /**
    * Update the User in db with the infos in request
    *
    * @return \Illuminate\Http\Response
    */
    public function create(Request $request)
    {
        // valida os campos
        $filds = $request->validate([
            'nome' => 'string|nullable',
            'nome_fantasia' => 'string|nullable',
            'data_aniversario' => 'string|nullable',
            'email' => 'string|nullable',
            'role' => 'string|nullable',
        ]);

        $user = User::create([
            'nome' => $filds['nome'],
            'nome_fantasia' => $filds['nome_fantasia'],
            'data_aniversario' => $filds['data_aniversario'],
            'email' => $filds['email']
        ]);

        if ($user) {
            $role = userRole::create(['id_role' => $filds['role'], 'id_user' => $user->id]);
            
            if( $role ){
                return response($role, 200);
            }

            return response($user, 400);
        }
    }
}
