import app from 'flarum/forum/app';
import {extend, override} from 'flarum/common/extend';
import LinkButton from 'flarum/common/components/LinkButton';
import SignUpModal from 'flarum/forum/components/SignUpModal';
import AccountControls from 'flamarkt/core/forum/utils/AccountControls';
import {common} from '../common/compat';
import {forum} from './compat';
import IdentityPage from './pages/IdentityPage';
import IdentityFieldsState from '../common/states/IdentityFieldsState';
import addUserAttributes from '../common/addUserAttributes';
import identityFields from '../common/utils/identityFields';

export {
    common,
    forum,
};

app.initializers.add('flamarkt-identity', () => {
    addUserAttributes();

    app.routes['flamarkt.account.identity'] = {
        path: '/account/identity',
        component: IdentityPage,
    };

    extend(AccountControls, 'controls', function (items) {
        items.add('identity', LinkButton.component({
            href: app.route('flamarkt.account.identity'),
        }, app.translator.trans('flamarkt-identity.forum.account.nav')));
    });

    extend(SignUpModal.prototype, 'oninit', function () {
        this.flamarktIdentityState = new IdentityFieldsState();
    });

    extend(SignUpModal.prototype, 'fields', function (fields) {
        identityFields(fields, this.flamarktIdentityState, {
            disabled: this.loading,
        });
    });

    override(SignUpModal.prototype, 'submitData', function (original: any) {
        return {
            ...original(),
            ...this.flamarktIdentityState.data(),
        };
    });
});
