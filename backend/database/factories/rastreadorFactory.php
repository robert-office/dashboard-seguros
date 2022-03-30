<?php

namespace Database\Factories;

use App\Models\rastreador;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\rastreador>
 */
class rastreadorFactory extends Factory
{

    protected $model = rastreador::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'id_operadora' => $this->faker->numberBetween(1, 3),
            'serial_number' => $this->faker->ipv6()
        ];
    }
}
