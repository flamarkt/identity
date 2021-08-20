import {extend, override} from 'flarum/common/extend';
import ItemList from 'flarum/common/utils/ItemList';
import UserList from 'flamarkt/core/backoffice/components/UserList';
import UserShowPage from 'flamarkt/core/backoffice/pages/UserShowPage';
import User from 'flarum/common/models/User';
import identityFields from '../common/identityFields';
import IdentityFieldsState from '../common/states/IdentityFieldsState';
import addUserAttributes from '../common/addUserAttributes';

app.initializers.add('flamarkt-identity', () => {
    addUserAttributes();

    app.extensionData.for('flamarkt-identity')
        .registerSetting({
            setting: 'flamarkt-identity.displayNameFormat',
            type: 'text',
            label: app.translator.trans('flamarkt-identity.backoffice.settings.displayNameFormat'),
            placeholder: '{firstname} {lastname}',
        });

    extend(UserList.prototype, 'head', function (columns: ItemList) {
        columns.add('firstname', m('th', 'First name'));
        columns.add('lastname', m('th', 'Last name'));
    });

    extend(UserList.prototype, 'columns', function (columns: ItemList, user: User) {
        columns.add('firstname', m('td', user.firstname()));
        columns.add('lastname', m('td', user.lastname()));
    });

    override(UserShowPage.prototype, 'oninit', function (this: UserShowPage, original: any, ...args: any) {
        this.identity = new IdentityFieldsState();

        // We need to use override because we must initialise this.identity before this.show() is called
        // But this.show() is called from oninit for new records or records already in the store
        original(...args);
    });

    extend(UserShowPage.prototype, 'show', function (this: UserShowPage, returnValue: any, user: User) {
        this.identity.valuesFromUser(user);
    });

    extend(UserShowPage.prototype, 'fields', function (this: UserShowPage, fields: ItemList) {
        identityFields(fields, this.identity, () => {
            this.dirty = true;
        });
    });

    extend(UserShowPage.prototype, 'data', function (this: UserShowPage, data: any) {
        const identityData = this.identity.data();

        // Only add keys that were modified, that way "required" field that aren't filled won't be validated
        // So we can edit other parts of the user profile without having to fill every missing field
        Object.keys(identityData).forEach(key => {
            if (identityData[key] !== (this.user[key]() || '')) {
                data[key] = identityData[key];
            }
        });
    });
});
