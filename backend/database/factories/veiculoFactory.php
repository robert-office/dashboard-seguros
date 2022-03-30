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
        return [
            'nome'  => $this->faker->name(),
            'valor' => $this->faker->numberBetween(5000, 60000),
            'tipo'  => $this->faker->numberBetween(1, 3),
        ];
    }
}
