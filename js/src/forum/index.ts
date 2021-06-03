import app from 'flarum/forum/app';
import {extend, override} from 'flarum/common/extend';
import LinkButton from 'flarum/common/components/LinkButton';
import AccountControls from 'flamarkt/core/forum/utils/AccountControls';
import User from 'flarum/common/models/User';
import Model from 'flarum/common/Model';
import IdentityPage from './pages/IdentityPage';
import SignUpModal from 'flarum/forum/components/SignUpModal';
import ItemList from 'flarum/common/utils/ItemList';
import IdentityFields from './components/IdentityFields';
import IdentityFieldsState from './states/IdentityFieldsState';

app.initializers.add('flamarkt-identity', () => {
    User.prototype.firstname = Model.attribute('firstname');
    User.prototype.lastname = Model.attribute('lastname');
    User.prototype.birthday = Model.attribute('birthday');
    User.prototype.addressStreet = Model.attribute('addressStreet');
    User.prototype.addressNumber = Model.attribute('addressNumber');
    User.prototype.addressCity = Model.attribute('addressCity');
    User.prototype.addressZip = Model.attribute('addressZip');
    User.prototype.addressState = Model.attribute('addressState');
    User.prototype.addressCountry = Model.attribute('addressCountry');
    //TODO: phone

    app.routes['flamarkt.account.identity'] = {
        path: '/account/identity',
        component: IdentityPage,
    };

    extend(AccountControls, 'controls', function (items: ItemList) {
        items.add('identity', LinkButton.component({
            href: app.route('flamarkt.account.identity'),
        }, 'Identity'));
    });

    extend(SignUpModal.prototype, 'oninit', function (this: SignUpModal) {
        this.flamarktIdentityState = new IdentityFieldsState();
    });

    extend(SignUpModal.prototype, 'fields', function (this: SignUpModal, fields: ItemList) {
        fields.add('flamarkt-identity', IdentityFields.component({
            state: this.flamarktIdentityState,
            onchange() {
                //
            },
        }));
    });

    override(SignUpModal.prototype, 'submitData', function (this: SignUpModal, original: any) {
        return {
            ...original(),
            ...this.flamarktIdentityState.data(),
        };
    });
});
