<?php

namespace App\Http\Controllers;

use App\Models\User;

abstract class Controller
{
    protected function getAuthUser(): User
    {
        /** @noinspection PhpIncompatibleReturnTypeInspection */
        return auth()->user();
    }
}
