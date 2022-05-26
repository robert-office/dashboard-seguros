<?php

namespace Database\Factories;

use App\Models\veiculo;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\veiculo>
 */
class veiculoFactory extends Factory
{
    protected $model = veiculo::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $VEICULOS = array(
            "Brasil 3100 (1958)",
            "Veraneio (1964)",
            "Opala (1968)",
            "Chevette (1973)",
            "Caravan (1975)",
            "Marajó (1981)",
            "Monza (1982)",
            "Chevy 500 (1982)",
            "D20 e A20 (1985)",
            "Ipanema (1989)",
            "Kadett (1989)",
            "Bonanza (1990)",
            "Omega (1992)",
            "Omega Suprema (1993)",
            "Vectra (1993)",
            "Corsa (1994)",
            "Astra (1998)",
            "Celta (2000)",
            "Meriva (2002)",
            "Montana (2003)",
            "Prisma (2006)",
            "Vectra GT (2007)",
            "Onix (2012)",
            "Spin (2012)",
            "Trailblazer (2012)",
            "Zafira (2001)",
        );


        return [
            'nome'  => $VEICULOS[rand(0, count($VEICULOS))],
            'valor' => $this->faker->numberBetween(5000, 60000),
            'tipo'  => $this->faker->numberBetween(1, 3),
        ];
    }
}
