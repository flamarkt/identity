<?php

namespace Flamarkt\Identity;

use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\DisplayName\DriverInterface;
use Flarum\User\User;

class DisplayNameDriver implements DriverInterface
{
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function displayName(User $user): string
    {
        $format = $this->settings->get('flamarkt-identity.displayNameFormat') ?: '{firstname} {lastname}';

        return preg_replace_callback('~\{([^}]+)}~', function ($matches) use ($user) {
            return $user->{$matches[1]};
        }, $format);
    }
}
