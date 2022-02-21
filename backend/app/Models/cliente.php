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
        'nome'
    ];

    public function ultimoVeiculo()
    {
        return $this->hasOne(veiculo::class, 'id_cliente')->latest();
    }

    public function ultimoSeguro()
    {
        return $this->hasOne(seguro::class, 'id_cliente')->latest();
    }
}
