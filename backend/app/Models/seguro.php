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

    public function veiculo() {
        return $this->hasOne(veiculo::class, 'id', 'id_veiculo');
    }

    public function cliente() {
        return $this->hasOne(cliente::class, 'id', 'id_cliente');
    }
}
