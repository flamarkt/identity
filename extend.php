<?php

namespace Flamarkt\Identity;

use ClarkWinkelmann\Scout\Extend\Scout;
use Flamarkt\Identity\Event;
use Flarum\Api\Serializer\UserSerializer;
use Flarum\Extend;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\Event\EmailChanged;
use Flarum\User\Event\Saving;
use Flarum\User\User;

$extenders = [
    (new Extend\Frontend('backoffice'))
        ->js(__DIR__ . '/js/dist/backoffice.js'),

    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->route('/account/identity', 'flamarkt.account.identity'),

    new Extend\Locales(__DIR__ . '/resources/locale'),

    (new Extend\Event())
        ->listen(Saving::class, Listeners\SaveUser::class),

    (new Extend\User())
        ->displayNameDriver('flamarkt-identity', DisplayNameDriver::class),

    (new Extend\ApiSerializer(UserSerializer::class))
        ->attributes(UserAttributes::class),
];

if (class_exists(Scout::class)) {
    $extenders[] = (new Scout(User::class))
        ->listenSaved(EmailChanged::class, function (EmailChanged $event) {
            return $event->user;
        })
        ->listenSaved(Event\FirstnameChanged::class, function (Event\FirstnameChanged $event) {
            return $event->user;
        })
        ->listenSaved(Event\LastnameChanged::class, function (Event\LastnameChanged $event) {
            return $event->user;
        })
        ->listenSaved(Event\BirthdayChanged::class, function (Event\BirthdayChanged $event) {
            return $event->user;
        })
        // TODO: other events
        ->attributes(function (User $user): array {
            if (!resolve(SettingsRepositoryInterface::class)->get('flamarkt-identity.searchable')) {
                return [];
            }

            return [
                // We also add the email which is not indexed by Scout for obvious security reasons
                // This might be moved to a different extension in the future but this is a convenient place for now
                // since there's already a setting to control exposing this personal information
                // Current version of Scout doesn't enable us to check if it's already added by another extension so we'll just add it all the time
                'email' => $user->email,
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
        });
}

return $extenders;
