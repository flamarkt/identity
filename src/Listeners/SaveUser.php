<?php

namespace Flamarkt\Identity\Listeners;

use Flamarkt\Identity\UserValidator;
use Flarum\User\Event\Saving;
use Flarum\User\User;
use Illuminate\Support\Arr;

class SaveUser
{
    protected $validator;

    public function __construct(UserValidator $validator)
    {
        $this->validator = $validator;
    }

    public function handle(Saving $event)
    {
        $attributes = Arr::get($event->data, 'attributes', []);

        // On registration, we want to validate all fields even if they are missing from the payload
        if (!$event->user->exists) {
            $attributes += $this->validator->requiredKeys();
        }

        $this->validator->assertValid($attributes);

        //TODO: events

        if (Arr::exists($attributes, 'firstname')) {
            $this->assertCanEdit($event->actor, $event->user);

            $event->user->firstname = Arr::get($attributes, 'firstname');
        }

        if (Arr::exists($attributes, 'lastname')) {
            $this->assertCanEdit($event->actor, $event->user);

            $event->user->lastname = Arr::get($attributes, 'lastname');
        }

        if (Arr::exists($attributes, 'birthday')) {
            $this->assertCanEdit($event->actor, $event->user);

            $event->user->birthday = Arr::get($attributes, 'birthday');
        }

        if (Arr::exists($attributes, 'addressStreet')) {
            $this->assertCanEdit($event->actor, $event->user);

            $event->user->address_street = Arr::get($attributes, 'addressStreet');
        }

        if (Arr::exists($attributes, 'addressNumber')) {
            $this->assertCanEdit($event->actor, $event->user);

            $event->user->address_number = Arr::get($attributes, 'addressNumber');
        }

        if (Arr::exists($attributes, 'addressCity')) {
            $this->assertCanEdit($event->actor, $event->user);

            $event->user->address_city = Arr::get($attributes, 'addressCity');
        }

        if (Arr::exists($attributes, 'addressZip')) {
            $this->assertCanEdit($event->actor, $event->user);

            $event->user->address_zip = Arr::get($attributes, 'addressZip');
        }

        if (Arr::exists($attributes, 'addressState')) {
            $this->assertCanEdit($event->actor, $event->user);

            $event->user->address_state = Arr::get($attributes, 'addressState');
        }

        if (Arr::exists($attributes, 'addressCountry')) {
            $this->assertCanEdit($event->actor, $event->user);

            $event->user->address_country = Arr::get($attributes, 'addressCountry');
        }
    }

    protected function assertCanEdit(User $actor, User $user)
    {
        if ($user->exists) {
            $actor->assertCan('editIdentity', $user);
        }
    }
}
