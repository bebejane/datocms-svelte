import { SvelteComponentTyped } from "svelte";
import { type Block } from 'datocms-structured-text-utils';
import type { QuoteRecord } from './types';
declare const __propDef: {
    props: {
        node: Block;
        block: QuoteRecord;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BlockProps = typeof __propDef.props;
export type BlockEvents = typeof __propDef.events;
export type BlockSlots = typeof __propDef.slots;
export default class Block extends SvelteComponentTyped<BlockProps, BlockEvents, BlockSlots> {
}
export {};
