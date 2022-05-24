<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class operadoras extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nome'
    ];

    public function seguros(){
        return $this->HasManyThrough(
            seguro::class,
            rastreador::class,
            'id_operadora',
            'id_rastreador',
            'id',
            'id'
        );
    }
}
