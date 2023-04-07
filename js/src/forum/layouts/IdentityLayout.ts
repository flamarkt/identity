import {Children, Vnode} from 'mithril';
import app from 'flarum/forum/app';
import AbstractAccountLayout from 'flamarkt/core/forum/layouts/AbstractAccountLayout';
import Button from 'flarum/common/components/Button';
import ItemList from 'flarum/common/utils/ItemList';
import IdentityFieldsState from '../../common/states/IdentityFieldsState';
import identityFields from '../../common/utils/identityFields';

export default class IdentityLayout extends AbstractAccountLayout {
    identityState: IdentityFieldsState = new IdentityFieldsState();
    dirty: boolean = false;
    saving: boolean = false;

    oninit(vnode: Vnode) {
        super.oninit(vnode);

        if (app.session.user) {
            this.identityState.valuesFromUser(app.session.user);
        }
    }

    currentPageHref() {
        return app.route('flamarkt.account.identity');
    }

    title() {
        return app.translator.trans('flamarkt-identity.forum.account.headingTitle');
    }

    content() {
        if (!app.session.user) {
            return m('div', 'Logged out');
        }

        return m('form', {
            onsubmit: this.onsubmit.bind(this),
        }, this.fields().toArray());
    }

    fields() {
        const fields = new ItemList<Children>();

        fields.add('submit', m('.Form-group', Button.component({
            type: 'submit',
            className: 'Button Button--primary',
            loading: this.saving,
            disabled: !this.dirty,
        }, app.translator.trans('flamarkt-identity.forum.account.submit'))), -10);

        return identityFields(fields, this.identityState, {
            onchange: () => {
                this.dirty = true;
            },
            disabled: this.saving,
        });
    }

    data(): any {
        return {
            ...this.identityState.data(),
        };
    }

    onsubmit(event: Event) {
        event.preventDefault();

        this.saving = true;

        app.session.user!.save(this.data()).then(() => {
            this.saving = false;
            this.dirty = false;

            m.redraw();
        }).catch(error => {
            this.saving = false;

            m.redraw();

            throw error;
        });
    }
}
