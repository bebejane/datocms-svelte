import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | null | undefined;
        width: number;
        height: number | null | undefined;
        aspectRatio: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SizerProps = typeof __propDef.props;
export type SizerEvents = typeof __propDef.events;
export type SizerSlots = typeof __propDef.slots;
export default class Sizer extends SvelteComponentTyped<SizerProps, SizerEvents, SizerSlots> {
}
export {};
