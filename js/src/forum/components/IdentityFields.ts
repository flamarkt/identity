import {Children} from 'mithril';
import Component, {ComponentAttrs} from 'flarum/common/Component';
import ItemList from 'flarum/common/utils/ItemList';
import IdentityFieldsState from '../../common/states/IdentityFieldsState';
import identityFields from '../../common/identityFields';

interface IdentityFieldsAttrs extends ComponentAttrs {
    state: IdentityFieldsState
    onchange: () => void
}

export default class IdentityFields extends Component<IdentityFieldsAttrs> {
    view() {
        return this.fields().toArray();
    }

    fields(): ItemList<Children> {
        const {state, onchange} = this.attrs;

        return identityFields(new ItemList<Children>(), state, onchange);
    }
}
