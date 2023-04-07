import { Children } from 'mithril';
import ItemList from 'flarum/common/utils/ItemList';
import IdentityFieldsState from '../states/IdentityFieldsState';
export interface IdentityFieldsOptions {
    onchange?: () => void;
    disabled?: boolean;
}
export default function (items: ItemList<Children>, state: IdentityFieldsState, options?: IdentityFieldsOptions): ItemList<Children>;
