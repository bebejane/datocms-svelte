import { SvelteComponentTyped } from "svelte";
import type { Span } from 'datocms-structured-text-utils';
declare const __propDef: {
    props: {
        node: Span;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SpanProps = typeof __propDef.props;
export type SpanEvents = typeof __propDef.events;
export type SpanSlots = typeof __propDef.slots;
export default class Span extends SvelteComponentTyped<SpanProps, SpanEvents, SpanSlots> {
}
export {};
