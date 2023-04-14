import { SvelteComponentTyped } from "svelte";
import { type ItemLink } from 'datocms-structured-text-utils';
import type { DocPageRecord } from './types';
declare const __propDef: {
    props: {
        node: ItemLink;
        link: DocPageRecord;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ItemLinkProps = typeof __propDef.props;
export type ItemLinkEvents = typeof __propDef.events;
export type ItemLinkSlots = typeof __propDef.slots;
export default class ItemLink extends SvelteComponentTyped<ItemLinkProps, ItemLinkEvents, ItemLinkSlots> {
}
export {};
