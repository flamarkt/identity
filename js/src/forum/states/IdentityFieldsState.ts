import User from 'flarum/common/models/User';

export default class IdentityFieldsState {
    firstname: string = '';
    lastname: string = '';
    birthday: string = '';
    addressStreet: string = '';
    addressNumber: string = '';
    addressCity: string = '';
    addressZip: string = '';
    addressState: string = '';
    addressCountry: string = '';

    valuesFromUser(user: User) {
        this.firstname = user.firstname() || '';
        this.lastname = user.lastname() || '';
        this.birthday = user.birthday() || '';
        this.addressStreet = user.addressStreet() || '';
        this.addressNumber = user.addressNumber() || '';
        this.addressCity = user.addressCity() || '';
        this.addressZip = user.addressZip() || '';
        this.addressState = user.addressState() || '';
        this.addressCountry = user.addressCountry() || '';
    }

    data(): any {
        return {
            firstname: this.firstname,
            lastname: this.lastname,
            birthday: this.birthday,
            addressStreet: this.addressStreet,
            addressNumber: this.addressNumber,
            addressCity: this.addressCity,
            addressZip: this.addressZip,
            addressState: this.addressState,
            addressCountry: this.addressCountry,
        };
    }
}
