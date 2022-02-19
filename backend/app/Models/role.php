<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class role extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'role'
    ];

    public function rolesUsersRoles(){
        return $this->hasManyThrough(
            User::class,
            userRole::class,
            'id_role',
            'id',
            'id',
            'id_user',
        );
    }
}
