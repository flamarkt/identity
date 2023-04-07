/// <reference types="flarum/@types/translator-icu-rich" />
import { Children, Vnode } from 'mithril';
import AbstractAccountLayout from 'flamarkt/core/forum/layouts/AbstractAccountLayout';
import ItemList from 'flarum/common/utils/ItemList';
import IdentityFieldsState from '../../common/states/IdentityFieldsState';
export default class IdentityLayout extends AbstractAccountLayout {
    identityState: IdentityFieldsState;
    dirty: boolean;
    saving: boolean;
    oninit(vnode: Vnode): void;
    currentPageHref(): string;
    title(): import("@askvortsov/rich-icu-message-formatter").NestedStringArray;
    content(): any;
    fields(): ItemList<Children>;
    data(): any;
    onsubmit(event: Event): void;
}
