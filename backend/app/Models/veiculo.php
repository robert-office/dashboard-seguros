<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class veiculo extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id_cliente',
        'nome',
        'tipo',
        'valor'
    ];

    public function cliente() {
        return $this->hasOne(cliente::class, 'id', 'id_cliente');
    }

    public function seguro() {
        return $this->hasOne(seguro::class, 'id_veiculo', 'id');
    }

    public function tipo() {
        return $this->hasOne(tipo_veiculo::class, 'id', 'tipo');
    }
}
