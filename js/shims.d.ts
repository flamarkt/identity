import Mithril from 'mithril';

declare global {
    const m: Mithril.Static;
}

import ForumApplication from 'flarum/forum/ForumApplication';
import AdminApplication from 'flarum/admin/AdminApplication';

declare global {
    const app: ForumApplication & AdminApplication;
}

import IdentityFieldsState from './src/common/states/IdentityFieldsState';

declare module 'flarum/forum/components/SignUpModal' {
    export default interface SignUpModal {
        flamarktIdentityState: IdentityFieldsState
    }
}

declare module 'flamarkt/core/backoffice/pages/UserShowPage' {
    export default interface UserShowPage {
        identity: IdentityFieldsState
    }
}
