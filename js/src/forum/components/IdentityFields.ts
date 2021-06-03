import app from 'flarum/forum/app';
import Component, {ComponentAttrs} from 'flarum/common/Component';
import ItemList from 'flarum/common/utils/ItemList';
import IdentityFieldsState from '../states/IdentityFieldsState';

interface IdentityFieldsAttrs extends ComponentAttrs {
    state: IdentityFieldsState
    onchange: () => void
}

export default class IdentityFields extends Component<IdentityFieldsAttrs> {
    view() {
        return this.fields().toArray();
    }

    fields(): ItemList {
        const {state, onchange} = this.attrs;

        const items = new ItemList();

        items.add('firstname', m('.Form-group', [
            m('label', {
                for: 'settings-firstname',
            }, app.translator.trans('flamarkt-identity.forum.settings.firstname')),
            m('input.FormControl', {
                id: 'settings-firstname',
                type: 'text',
                value: state.firstname,
                oninput: event => {
                    state.firstname = event.target.value;
                    onchange();
                },
            }),
        ]));

        items.add('lastname', m('.Form-group', [
            m('label', {
                for: 'settings-lastname',
            }, app.translator.trans('flamarkt-identity.forum.settings.lastname')),
            m('input.FormControl', {
                id: 'settings-lastname',
                type: 'text',
                value: state.lastname,
                oninput: event => {
                    state.lastname = event.target.value;
                    onchange();
                },
            }),
        ]));

        items.add('birthday', m('.Form-group', [
            m('label', {
                for: 'settings-birthday',
            }, app.translator.trans('flamarkt-identity.forum.settings.birthday')),
            m('input.FormControl', {
                id: 'settings-birthday',
                type: 'date',
                value: state.birthday,
                oninput: event => {
                    state.birthday = event.target.value;
                    onchange();
                },
            }),
        ]));

        items.add('addressStreet', m('.Form-group', [
            m('label', {
                for: 'settings-addressStreet',
            }, app.translator.trans('flamarkt-identity.forum.settings.addressStreet')),
            m('input.FormControl', {
                id: 'settings-addressStreet',
                type: 'text',
                value: state.addressStreet,
                oninput: event => {
                    state.addressStreet = event.target.value;
                    onchange();
                },
            }),
        ]));

        items.add('addressNumber', m('.Form-group', [
            m('label', {
                for: 'settings-addressNumber',
            }, app.translator.trans('flamarkt-identity.forum.settings.addressNumber')),
            m('input.FormControl', {
                id: 'settings-addressNumber',
                type: 'text',
                value: state.addressNumber,
                oninput: event => {
                    state.addressNumber = event.target.value;
                    onchange();
                },
            }),
        ]));

        items.add('addressCity', m('.Form-group', [
            m('label', {
                for: 'settings-addressCity',
            }, app.translator.trans('flamarkt-identity.forum.settings.addressCity')),
            m('input.FormControl', {
                id: 'settings-addressCity',
                type: 'text',
                value: state.addressCity,
                oninput: event => {
                    state.addressCity = event.target.value;
                    onchange();
                },
            }),
        ]));

        items.add('addressZip', m('.Form-group', [
            m('label', {
                for: 'settings-addressZip',
            }, app.translator.trans('flamarkt-identity.forum.settings.addressZip')),
            m('input.FormControl', {
                id: 'settings-addressZip',
                type: 'text',
                value: state.addressZip,
                oninput: event => {
                    state.addressZip = event.target.value;
                    onchange();
                },
            }),
        ]));

        items.add('addressState', m('.Form-group', [
            m('label', {
                for: 'settings-addressState',
            }, app.translator.trans('flamarkt-identity.forum.settings.addressState')),
            m('input.FormControl', {
                id: 'settings-addressState',
                type: 'text',
                value: state.addressState,
                oninput: event => {
                    state.addressState = event.target.value;
                    onchange();
                },
            }),
        ]));

        items.add('addressCountry', m('.Form-group', [
            m('label', {
                for: 'settings-addressCountry',
            }, app.translator.trans('flamarkt-identity.forum.settings.addressCountry')),
            m('input.FormControl', {
                id: 'settings-addressCountry',
                type: 'text',
                value: state.addressCountry,
                oninput: event => {
                    state.addressCountry = event.target.value;
                    onchange();
                },
            }),
        ]));

        return items;
    }

}
