import app from 'flarum/forum/app';
import {extend, override} from 'flarum/common/extend';
import LinkButton from 'flarum/common/components/LinkButton';
import AccountControls from 'flamarkt/core/forum/utils/AccountControls';
import IdentityPage from './pages/IdentityPage';
import SignUpModal from 'flarum/forum/components/SignUpModal';
import ItemList from 'flarum/common/utils/ItemList';
import IdentityFields from './components/IdentityFields';
import IdentityFieldsState from '../common/states/IdentityFieldsState';
import addUserAttributes from '../common/addUserAttributes';

app.initializers.add('flamarkt-identity', () => {
    addUserAttributes();

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
