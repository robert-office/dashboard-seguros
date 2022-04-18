<?php

namespace Database\Seeders;

use App\Models\cliente;
use App\Models\rastreador;
use App\Models\seguro;
use App\Models\User;
use App\Models\userRole;
use App\Models\veiculo;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {   
        /// cria 300 clientes
        cliente::factory()->count(300)->create()
            ->each(
                function ($cliente) {
                    /// para cada cliente cria-se um veiculo
                    $veiculo = veiculo::factory()->create([
                        'id_cliente' => $cliente->id
                    ]);

                    /// cria um user do sistema
                    $user = User::factory()->create();
                    /// adiciona a sua role no db
                    $role = userRole::factory()->create([
                        'id_user' => $user->id
                    ]);

                    /// se é vendedor
                    if ($role->id_role == 2) {

                        /// cria o rastreador
                        $rastreador = rastreador::factory()->create();

                        /// cria o seguro
                        seguro::factory()->create([
                            'id_vendedor'       => $user->id,
                            'id_rastreador'     => $rastreador->id,
                            'id_veiculo'        => $veiculo->id,
                            'id_cliente'        => $cliente->id,
                        ]);
                    }
                }
            );


        // cria um user do sistema com lore automatica
        User::factory()->count(50)->create()->each(function($user) {
            /// adiciona a sua role no db
            userRole::factory()->create([
                'id_user' => $user->id
            ]);
        });
    }
}
