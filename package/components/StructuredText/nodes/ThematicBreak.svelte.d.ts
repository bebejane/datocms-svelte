import { SvelteComponentTyped } from "svelte";
import type { ThematicBreak } from 'datocms-structured-text-utils';
declare const __propDef: {
    props: {
        node: ThematicBreak;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ThematicBreakProps = typeof __propDef.props;
export type ThematicBreakEvents = typeof __propDef.events;
export type ThematicBreakSlots = typeof __propDef.slots;
export default class ThematicBreak extends SvelteComponentTyped<ThematicBreakProps, ThematicBreakEvents, ThematicBreakSlots> {
}
export {};
