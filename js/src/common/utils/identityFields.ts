import app from 'flarum/common/app';
import {Children} from 'mithril';
import ItemList from 'flarum/common/utils/ItemList';
import IdentityFieldsState from '../states/IdentityFieldsState';

export interface IdentityFieldsOptions {
    onchange?: () => void
    disabled?: boolean
}

export default function (items: ItemList<Children>, state: IdentityFieldsState, options: IdentityFieldsOptions = {}): ItemList<Children> {
    items.add('flamarkt-identity-firstname', m('.Form-group', [
        m('label', {
            for: 'settings-firstname',
        }, app.translator.trans('flamarkt-identity.lib.field.firstname')),
        m('input.FormControl', {
            id: 'settings-firstname',
            type: 'text',
            value: state.firstname,
            oninput: (event: Event) => {
                state.firstname = (event.target as HTMLInputElement).value;
                options.onchange?.();
            },
            disabled: options.disabled,
        }),
    ]));

    items.add('flamarkt-identity-lastname', m('.Form-group', [
        m('label', {
            for: 'settings-lastname',
        }, app.translator.trans('flamarkt-identity.lib.field.lastname')),
        m('input.FormControl', {
            id: 'settings-lastname',
            type: 'text',
            value: state.lastname,
            oninput: (event: Event) => {
                state.lastname = (event.target as HTMLInputElement).value;
                options.onchange?.();
            },
            disabled: options.disabled,
        }),
    ]));

    items.add('flamarkt-identity-birthday', m('.Form-group', [
        m('label', {
            for: 'settings-birthday',
        }, app.translator.trans('flamarkt-identity.lib.field.birthday')),
        m('input.FormControl', {
            id: 'settings-birthday',
            type: 'date',
            value: state.birthday,
            oninput: (event: Event) => {
                state.birthday = (event.target as HTMLInputElement).value;
                options.onchange?.();
            },
            disabled: options.disabled,
        }),
    ]));

    items.add('flamarkt-identity-addressStreet', m('.Form-group', [
        m('label', {
            for: 'settings-addressStreet',
        }, app.translator.trans('flamarkt-identity.lib.field.addressStreet')),
        m('input.FormControl', {
            id: 'settings-addressStreet',
            type: 'text',
            value: state.addressStreet,
            oninput: (event: Event) => {
                state.addressStreet = (event.target as HTMLInputElement).value;
                options.onchange?.();
            },
            disabled: options.disabled,
        }),
    ]));

    items.add('flamarkt-identity-addressNumber', m('.Form-group', [
        m('label', {
            for: 'settings-addressNumber',
        }, app.translator.trans('flamarkt-identity.lib.field.addressNumber')),
        m('input.FormControl', {
            id: 'settings-addressNumber',
            type: 'text',
            value: state.addressNumber,
            oninput: (event: Event) => {
                state.addressNumber = (event.target as HTMLInputElement).value;
                options.onchange?.();
            },
            disabled: options.disabled,
        }),
    ]));

    items.add('flamarkt-identity-addressCity', m('.Form-group', [
        m('label', {
            for: 'settings-addressCity',
        }, app.translator.trans('flamarkt-identity.lib.field.addressCity')),
        m('input.FormControl', {
            id: 'settings-addressCity',
            type: 'text',
            value: state.addressCity,
            oninput: (event: Event) => {
                state.addressCity = (event.target as HTMLInputElement).value;
                options.onchange?.();
            },
            disabled: options.disabled,
        }),
    ]));

    items.add('flamarkt-identity-addressZip', m('.Form-group', [
        m('label', {
            for: 'settings-addressZip',
        }, app.translator.trans('flamarkt-identity.lib.field.addressZip')),
        m('input.FormControl', {
            id: 'settings-addressZip',
            type: 'text',
            value: state.addressZip,
            oninput: (event: Event) => {
                state.addressZip = (event.target as HTMLInputElement).value;
                options.onchange?.();
            },
            disabled: options.disabled,
        }),
    ]));

    items.add('flamarkt-identity-addressState', m('.Form-group', [
        m('label', {
            for: 'settings-addressState',
        }, app.translator.trans('flamarkt-identity.lib.field.addressState')),
        m('input.FormControl', {
            id: 'settings-addressState',
            type: 'text',
            value: state.addressState,
            oninput: (event: Event) => {
                state.addressState = (event.target as HTMLInputElement).value;
                options.onchange?.();
            },
            disabled: options.disabled,
        }),
    ]));

    items.add('flamarkt-identity-addressCountry', m('.Form-group', [
        m('label', {
            for: 'settings-addressCountry',
        }, app.translator.trans('flamarkt-identity.lib.field.addressCountry')),
        m('input.FormControl', {
            id: 'settings-addressCountry',
            type: 'text',
            value: state.addressCountry,
            oninput: (event: Event) => {
                state.addressCountry = (event.target as HTMLInputElement).value;
                options.onchange?.();
            },
            disabled: options.disabled,
        }),
    ]));

    return items;
}
