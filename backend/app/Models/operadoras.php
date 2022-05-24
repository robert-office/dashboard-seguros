<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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

    public function seguro(){
        return $this->hasOneThrough(
            seguro::class,
            rastreador::class,
            'id',
            'id',
            'id_rastreador',
            'id_operadora'
        );
    }
}
