import { SvelteComponentTyped } from "svelte";
import type { Blockquote } from 'datocms-structured-text-utils';
declare const __propDef: {
    props: {
        node: Blockquote;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type BlockquoteProps = typeof __propDef.props;
export type BlockquoteEvents = typeof __propDef.events;
export type BlockquoteSlots = typeof __propDef.slots;
export default class Blockquote extends SvelteComponentTyped<BlockquoteProps, BlockquoteEvents, BlockquoteSlots> {
}
export {};
