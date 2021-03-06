<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cliente extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nome',
        'nome_fantasia',
        'data_aniversario'
    ];

    public function UltimoVeiculo()
    {
        return $this->hasOne(veiculo::class, 'id_cliente')->latest();
    }

    public function UltimoSeguro()
    {
        return $this->hasOne(seguro::class, 'id_cliente')->latest();
    }

    public function veiculos()
    {
        return $this->hasMany(veiculo::class, 'id_cliente');
    }

    public function seguros()
    {
        return $this->hasMany(seguro::class, 'id_cliente');
    }
}
