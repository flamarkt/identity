import app from 'flarum/forum/app';
import AbstractAccountPage from 'flamarkt/core/forum/pages/AbstractAccountPage';
import Button from 'flarum/common/components/Button';
import IdentityFieldsState from '../states/IdentityFieldsState';
import IdentityFields from "../components/IdentityFields";

export default class IdentityPage extends AbstractAccountPage {
    state: IdentityFieldsState = new IdentityFieldsState();
    dirty: boolean = false;
    saving: boolean = false;

    oninit(vnode) {
        super.oninit(vnode);

        if (app.session.user) {
            this.state.valuesFromUser(app.session.user);
        }
    }

    breadcrumbItems() {
        const items = super.breadcrumbItems();

        items.add('current', m('span.breadcrumb-current', 'Identity'));

        return items;
    }

    content() {
        return m('form', {
            onsubmit: this.onsubmit.bind(this),
        }, [
            IdentityFields.component({
                state: this.state,
                onchange: () => {
                    this.dirty = true;
                },
            }),
            m('.Form-group', Button.component({
                type: 'submit',
                className: 'Button Button--primary',
                loading: this.saving,
                disabled: !this.dirty,
            }, app.translator.trans('flamarkt-identity.forum.settings.submit'))),
        ]);
    }

    data(): any {
        return {
            ...this.state.data(),
        };
    }

    onsubmit(event) {
        event.preventDefault();

        this.saving = true;

        app.session.user.save(this.data()).then(() => {
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
