import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        srcset: string | null;
        sizes: string | null;
        type?: string | null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SourceProps = typeof __propDef.props;
export type SourceEvents = typeof __propDef.events;
export type SourceSlots = typeof __propDef.slots;
export default class Source extends SvelteComponentTyped<SourceProps, SourceEvents, SourceSlots> {
}
export {};
