import { SvelteComponentTyped } from "svelte";
export declare const DEFAULT_COMPONENTS: PredicateComponentTuple[];
import { type Node, type StructuredText } from 'datocms-structured-text-utils';
import type { PredicateComponentTuple } from '../..';
declare const __propDef: {
    props: {
        node: Node;
        blocks: StructuredText['blocks'];
        links: StructuredText['links'];
        components?: PredicateComponentTuple[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type NodeProps = typeof __propDef.props;
export type NodeEvents = typeof __propDef.events;
export type NodeSlots = typeof __propDef.slots;
export default class Node extends SvelteComponentTyped<NodeProps, NodeEvents, NodeSlots> {
}
export {};
