import { SvelteComponentTyped } from "svelte";
import { type StructuredText, type Document } from 'datocms-structured-text-utils';
import type { PredicateComponentTuple } from '../..';
declare const __propDef: {
    props: {
        /** The actual field value you get from DatoCMS **/ data?: StructuredText<import("datocms-structured-text-utils").Record, import("datocms-structured-text-utils").Record> | Document | null | undefined;
        components?: PredicateComponentTuple[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type StructuredTextProps = typeof __propDef.props;
export type StructuredTextEvents = typeof __propDef.events;
export type StructuredTextSlots = typeof __propDef.slots;
export default class StructuredText extends SvelteComponentTyped<StructuredTextProps, StructuredTextEvents, StructuredTextSlots> {
}
export {};
