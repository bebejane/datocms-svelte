import { SvelteComponentTyped } from "svelte";
import type { Code } from 'datocms-structured-text-utils';
declare const __propDef: {
    props: {
        node: Code;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CodeProps = typeof __propDef.props;
export type CodeEvents = typeof __propDef.events;
export type CodeSlots = typeof __propDef.slots;
export default class Code extends SvelteComponentTyped<CodeProps, CodeEvents, CodeSlots> {
}
export {};
