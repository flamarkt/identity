<?php

namespace Flamarkt\Identity;

use Flarum\Api\Serializer\UserSerializer;
use Flarum\User\User;

class UserAttributes
{
    public function __invoke(UserSerializer $serializer, User $user): array
    {
        if ($serializer->getActor()->cannot('seeIdentity', $user)) {
            return [];
        }

        return [
            'firstname' => $user->firstname,
            'lastname' => $user->lastname,
            'birthday' => $user->birthday,
            'addressStreet' => $user->address_street,
            'addressNumber' => $user->address_number,
            'addressCity' => $user->address_city,
            'addressZip' => $user->address_zip,
            'addressState' => $user->address_state,
            'addressCountry' => $user->address_country,
        ];
    }
}
