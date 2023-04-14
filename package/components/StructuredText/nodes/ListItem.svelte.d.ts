import { SvelteComponentTyped } from "svelte";
import type { ListItem } from 'datocms-structured-text-utils';
declare const __propDef: {
    props: {
        node: ListItem;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ListItemProps = typeof __propDef.props;
export type ListItemEvents = typeof __propDef.events;
export type ListItemSlots = typeof __propDef.slots;
export default class ListItem extends SvelteComponentTyped<ListItemProps, ListItemEvents, ListItemSlots> {
}
export {};
