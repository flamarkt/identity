import IdentityFieldsState from './src/common/states/IdentityFieldsState';

declare module 'flarum/forum/components/SignUpModal' {
    export default interface SignUpModal {
        flamarktIdentityState: IdentityFieldsState
    }
}

declare module 'flamarkt/backoffice/backoffice/pages/UserShowPage' {
    export default interface UserShowPage {
        identity: IdentityFieldsState
    }
}
