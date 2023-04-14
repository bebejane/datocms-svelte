<script context="module">import {
  isBlock,
  isBlockquote,
  isCode,
  isHeading,
  isInlineItem,
  isItemLink,
  isLink,
  isList,
  isListItem,
  isParagraph,
  isRoot,
  isSpan,
  isThematicBreak,
  RenderError
} from "datocms-structured-text-utils";
import Paragraph from "./nodes/Paragraph.svelte";
import Root from "./nodes/Root.svelte";
import Span from "./nodes/Span.svelte";
import Link from "./nodes/Link.svelte";
import List from "./nodes/List.svelte";
import Heading from "./nodes/Heading.svelte";
import Blockquote from "./nodes/Blockquote.svelte";
import ListItem from "./nodes/ListItem.svelte";
import ThematicBreak from "./nodes/ThematicBreak.svelte";
import Code from "./nodes/Code.svelte";
export const DEFAULT_COMPONENTS = [
  [isParagraph, Paragraph],
  [isRoot, Root],
  [isSpan, Span],
  [isLink, Link],
  [isList, List],
  [isHeading, Heading],
  [isBlockquote, Blockquote],
  [isListItem, ListItem],
  [isThematicBreak, ThematicBreak],
  [isCode, Code]
];
const throwRenderErrorForMissingComponent = (node) => {
  if (isInlineItem(node)) {
    throw new RenderError(
      `The Structured Text document contains an 'inlineItem' node, but no component for rendering is specified!`,
      node
    );
  }
  if (isItemLink(node)) {
    throw new RenderError(
      `The Structured Text document contains an 'itemLink' node, but no component for rendering is specified!`,
      node
    );
  }
  if (isBlock(node)) {
    throw new RenderError(
      `The Structured Text document contains a 'block' node, but no component for rendering is specified!`,
      node
    );
  }
};
const throwRenderErrorForMissingBlock = (node) => {
  throw new RenderError(
    `The Structured Text document contains a 'block' node, but cannot find a record with ID ${node.item} inside data.blocks!`,
    node
  );
};
const throwRenderErrorForMissingLink = (node) => {
  throw new RenderError(
    `The Structured Text document contains an 'itemLink' node, but cannot find a record with ID ${node.item} inside data.links!`,
    node
  );
};
const findBlock = (node, blocks) => (blocks || []).find(({ id }) => id === node.item);
const findLink = (node, links) => (links || []).find(({ id }) => id === node.item);
</script>

<script>import { hasChildren } from "datocms-structured-text-utils";
export let node;
export let blocks;
export let links;
export let components = [];
$:
  block = isBlock(node) && (findBlock(node, blocks) || throwRenderErrorForMissingBlock(node));
$:
  link = isItemLink(node) && (findLink(node, links) || throwRenderErrorForMissingLink(node)) || isInlineItem(node) && (findLink(node, links) || throwRenderErrorForMissingLink(node));
$:
  predicateComponentTuple = [...components, ...DEFAULT_COMPONENTS].find(([predicate, component2]) => predicate(node)) || throwRenderErrorForMissingComponent(node);
$:
  component = (predicateComponentTuple ?? [])[1];
</script>

{#if component}
	{#if isBlock(node)}
		<svelte:component this={component} {node} {block} />
	{:else if isInlineItem(node)}
		<svelte:component this={component} {node} {link} />
	{:else if isItemLink(node)}
		<svelte:component this={component} {node} {link}>
			{#if hasChildren(node)}
				{#each node.children as child}
					<svelte:self node={child} {blocks} {links} {components} />
				{/each}
			{/if}
		</svelte:component>
	{:else}
		<svelte:component this={component} {node}>
			{#if hasChildren(node)}
				{#each node.children as child}
					<svelte:self node={child} {blocks} {links} {components} />
				{/each}
			{/if}
		</svelte:component>
	{/if}
{/if}
