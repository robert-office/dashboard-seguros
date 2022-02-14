<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class seguro extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id_vendedor',
        'id_rastreador',
        'id_veiculo',
        'id_cliente',
        'valor',
    ];

    public function vendedor() {
        return $this->hasOne(User::class, 'id', 'id_vendedor');
    }

    public function rastreador() {
        return $this->hasOne(rastreador::class, 'id', 'id_rastreador');
    }

    public function rastreadorOperadora(){
        return $this->hasOneThrough(
            operadoras::class,
            rastreador::class,
            'id',
            'id',
            'id_rastreador',
            'id_operadora'
        );
    }

    public function veiculo() {
        return $this->hasOne(veiculo::class, 'id', 'id_veiculo');
    }

    public function veiculoTipo(){
        return $this->hasOneThrough(
            tipo_veiculo::class,
            veiculo::class,
            'id',
            'id',
            'id_cliente',
            'tipo'
        );
    }

    public function cliente() {
        return $this->hasOne(cliente::class, 'id', 'id_cliente');
    }
}
