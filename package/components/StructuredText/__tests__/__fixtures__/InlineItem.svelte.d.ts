import { SvelteComponentTyped } from "svelte";
import { type InlineItem } from 'datocms-structured-text-utils';
import type { DocPageRecord } from './types';
declare const __propDef: {
    props: {
        node: InlineItem;
        link: DocPageRecord;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type InlineItemProps = typeof __propDef.props;
export type InlineItemEvents = typeof __propDef.events;
export type InlineItemSlots = typeof __propDef.slots;
export default class InlineItem extends SvelteComponentTyped<InlineItemProps, InlineItemEvents, InlineItemSlots> {
}
export {};
