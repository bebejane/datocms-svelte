import { SvelteComponentTyped } from "svelte";
import type { Heading } from 'datocms-structured-text-utils';
declare const __propDef: {
    props: {
        node: Heading;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type IncreasedLevelHeadingProps = typeof __propDef.props;
export type IncreasedLevelHeadingEvents = typeof __propDef.events;
export type IncreasedLevelHeadingSlots = typeof __propDef.slots;
export default class IncreasedLevelHeading extends SvelteComponentTyped<IncreasedLevelHeadingProps, IncreasedLevelHeadingEvents, IncreasedLevelHeadingSlots> {
}
export {};
