import User from 'flarum/common/models/User';
import Model from 'flarum/common/Model';

export default function () {
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
}
