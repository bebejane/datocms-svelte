import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        lines?: string[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type LinesProps = typeof __propDef.props;
export type LinesEvents = typeof __propDef.events;
export type LinesSlots = typeof __propDef.slots;
export default class Lines extends SvelteComponentTyped<LinesProps, LinesEvents, LinesSlots> {
}
export {};
