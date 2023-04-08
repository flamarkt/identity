<?php

namespace Flamarkt\Identity\Access;

use Flarum\User\Access\AbstractPolicy;
use Flarum\User\User;

class UserPolicy extends AbstractPolicy
{
    public function seeIdentity(User $actor, User $user)
    {
        if ($actor->can('backoffice')) {
            return $this->allow();
        }

        // TODO: add permission
        return $actor->id === $user->id;
    }

    public function editIdentity(User $actor, User $user)
    {
        return $this->seeIdentity($actor, $user);
    }
}
