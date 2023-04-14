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
export type CustomSpanProps = typeof __propDef.props;
export type CustomSpanEvents = typeof __propDef.events;
export type CustomSpanSlots = typeof __propDef.slots;
export default class CustomSpan extends SvelteComponentTyped<CustomSpanProps, CustomSpanEvents, CustomSpanSlots> {
}
export {};
