<?php

namespace Database\Factories;

use App\Models\seguro;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\seguro>
 */
class seguroFactory extends Factory
{  

    protected $model = seguro::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'created_at' => $this->faker->dateTimeBetween('-1825 days', now()),
            'valor' => $this->faker->numberBetween(1500, 4000)
        ];
    }
}
