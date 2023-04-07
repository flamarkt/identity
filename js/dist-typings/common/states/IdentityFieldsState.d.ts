import User from 'flarum/common/models/User';
export default class IdentityFieldsState {
    firstname: string;
    lastname: string;
    birthday: string;
    addressStreet: string;
    addressNumber: string;
    addressCity: string;
    addressZip: string;
    addressState: string;
    addressCountry: string;
    valuesFromUser(user: User): void;
    data(): any;
}
