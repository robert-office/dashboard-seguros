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
        'tipo',
        'valor',
        'nome'
    ];

    public function cliente() {
        return $this->hasOne(cliente::class, 'id', 'id_cliente');
    }

    public function tipo() {
        return $this->hasOne(tipo_veiculo::class, 'id', 'tipo');
    }
}
