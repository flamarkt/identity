<?php

namespace Flamarkt\Identity\Listeners;

use Flamarkt\Identity\Event;
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
        $attributes = (array)Arr::get($event->data, 'attributes');

        // On registration, we want to validate all fields even if they are missing from the payload
        if (!$event->user->exists) {
            $attributes += $this->validator->requiredKeys();
        }

        $this->validator->assertValid($attributes);

        $this->editBasicAttribute($event, 'firstname', 'firstname', Event\FirstnameChanged::class);
        $this->editBasicAttribute($event, 'lastname', 'lastname', Event\LastnameChanged::class);
        $this->editBasicAttribute($event, 'birthday', 'birthday', Event\BirthdayChanged::class);

        //TODO: events for remaining attributes

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

    protected function editBasicAttribute(Saving $event, string $payloadAttribute, string $modelAttribute, string $eventClass)
    {
        $attributes = (array)Arr::get($event->data, 'attributes');

        if (Arr::exists($attributes, $payloadAttribute)) {
            // Must check authorization first otherwise you could try guessing the value
            $this->assertCanEdit($event->actor, $event->user);

            $newValue = Arr::get($attributes, $payloadAttribute);
            $oldValue = $event->user->$modelAttribute;

            if ($newValue !== $oldValue) {
                $event->user->$modelAttribute = $newValue;
                $event->user->raise(new $eventClass($event->user, $oldValue));
            }
        }
    }
}
