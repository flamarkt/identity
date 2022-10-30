<?php

namespace Flamarkt\Identity\Event;

use Flarum\User\User;

class FirstnameChanged
{
    public $user;
    public $oldBirthday;
    public $actor;

    public function __construct(User $user, $oldBirthday, User $actor = null)
    {
        $this->user = $user;
        $this->oldBirthday = $oldBirthday;
        $this->actor = $actor;
    }
}
