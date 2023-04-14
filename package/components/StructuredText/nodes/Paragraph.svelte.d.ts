import { SvelteComponentTyped } from "svelte";
import type { Paragraph } from 'datocms-structured-text-utils';
declare const __propDef: {
    props: {
        node: Paragraph;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ParagraphProps = typeof __propDef.props;
export type ParagraphEvents = typeof __propDef.events;
export type ParagraphSlots = typeof __propDef.slots;
export default class Paragraph extends SvelteComponentTyped<ParagraphProps, ParagraphEvents, ParagraphSlots> {
}
export {};
