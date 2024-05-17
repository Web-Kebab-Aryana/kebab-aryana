<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Content;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        //
        Content::create([
            'id' => 1,
            'aboutus' => 'We are a restaurant that serves a variety of delicious foods. We have a variety of menus that you can choose from. We also have a variety of drinks that you can choose from. We are open every day from 08.00 to 21.00. Come and visit us!',
            'whatsapp_number' => '08123456789',
            'location' => 'Jl. Raya Bogor No. 123',
            'coordinate' => '-6.123456, 106.123456',
        ]);
    }
}