<?php

namespace Flamarkt\Identity;

use Flarum\Foundation\AbstractValidator;
use Illuminate\Support\Str;

class UserValidator extends AbstractValidator
{
    protected function getRules(): array
    {
        return [
            'firstname' => 'required|string|min:1|max:255',
            'lastname' => 'required|string|min:1|max:255',
            'birthday' => 'required|date',
            'addressStreet' => 'required|string|min:1|max:255',
            'addressNumber' => 'required|string|min:1|max:255',
            'addressCity' => 'required|string|min:1|max:255',
        ];
    }

    public function requiredKeys(): array
    {
        $keys = [];

        foreach ($this->getRules() as $key => $rule) {
            if (Str::startsWith($rule, 'required|')) {
                $keys[$key] = '';
            }
        }

        return $keys;
    }
}
