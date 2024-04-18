<?php

namespace App\Console\Commands;

use App\Events\UserCreated;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class CreateUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:create-user';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $user = User::factory()->create();
        event(new UserCreated($user, '12322'));

        $name = $this->ask('Enter name');
        $email = $this->ask('Enter email address');
        $password = $this->ask('Enter password (leave empty for auto generated)');

        if(empty($password)) {
            $password = Str::password(20);
        }

        $validator = Validator::make([
            'email' => $email,
            'name' => $name,
            'password' => $password,
        ],[
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:8',
        ]);

        if($validator->fails()) {
            foreach ($validator->errors()->all() as $error) {
                $this->error($error);
            }
            return;
        }

        $user = User::create([
            'name' => $name,
            'email' => $email,
            'password' => Hash::make($password),
        ]);

        event(new Registered($user));

        $this->info("User with email \"$email\" created successfully.");
    }
}
