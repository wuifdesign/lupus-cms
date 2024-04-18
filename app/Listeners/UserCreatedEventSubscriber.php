<?php

namespace App\Listeners;

use App\Events\UserCreated;
use Illuminate\Support\Facades\Mail;

class UserCreatedEventSubscriber
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(UserCreated $event): void
    {
        Mail::to($event->user->getEmail())->send(new \App\Mail\UserCreated($event->user, $event->password));
    }
}
