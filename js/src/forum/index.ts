import app from 'flarum/forum/app';
import {extend, override} from 'flarum/common/extend';
import LinkButton from 'flarum/common/components/LinkButton';
import AccountControls from 'flamarkt/core/forum/utils/AccountControls';
import IdentityPage from './pages/IdentityPage';
import SignUpModal from 'flarum/forum/components/SignUpModal';
import IdentityFields from './components/IdentityFields';
import IdentityFieldsState from '../common/states/IdentityFieldsState';
import addUserAttributes from '../common/addUserAttributes';

app.initializers.add('flamarkt-identity', () => {
    addUserAttributes();

    app.routes['flamarkt.account.identity'] = {
        path: '/account/identity',
        component: IdentityPage,
    };

    extend(AccountControls, 'controls', function (items) {
        items.add('identity', LinkButton.component({
            href: app.route('flamarkt.account.identity'),
        }, 'Identity'));
    });

    extend(SignUpModal.prototype, 'oninit', function () {
        this.flamarktIdentityState = new IdentityFieldsState();
    });

    extend(SignUpModal.prototype, 'fields', function (fields) {
        fields.add('flamarkt-identity', IdentityFields.component({
            state: this.flamarktIdentityState,
            onchange() {
                //
            },
        }));
    });

    override(SignUpModal.prototype, 'submitData', function (original: any) {
        return {
            ...original(),
            ...this.flamarktIdentityState.data(),
        };
    });
});
