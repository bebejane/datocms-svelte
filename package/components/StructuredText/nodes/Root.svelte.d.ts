import { SvelteComponentTyped } from "svelte";
import type { Root } from 'datocms-structured-text-utils';
declare const __propDef: {
    props: {
        node: Root;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type RootProps = typeof __propDef.props;
export type RootEvents = typeof __propDef.events;
export type RootSlots = typeof __propDef.slots;
export default class Root extends SvelteComponentTyped<RootProps, RootEvents, RootSlots> {
}
export {};
