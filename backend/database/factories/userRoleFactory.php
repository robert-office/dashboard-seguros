<?php

namespace Database\Factories;

use App\Models\userRole;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserRole>
 */
class userRoleFactory extends Factory
{
    protected $model = userRole::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            /// id role
            'id_role' => $this->faker->numberBetween(1, 4)
        ];
    }
}
