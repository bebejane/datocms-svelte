import { SvelteComponentTyped } from "svelte";
import type * as CSS from 'csstype';
declare const __propDef: {
    props: {
        base64?: string | null | undefined;
        backgroundColor?: string | null | undefined;
        objectFit: CSS.Properties['objectFit'];
        objectPosition: CSS.Properties['objectPosition'];
        showImage: boolean;
        fadeInDuration?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PlaceholderProps = typeof __propDef.props;
export type PlaceholderEvents = typeof __propDef.events;
export type PlaceholderSlots = typeof __propDef.slots;
export default class Placeholder extends SvelteComponentTyped<PlaceholderProps, PlaceholderEvents, PlaceholderSlots> {
}
export {};
