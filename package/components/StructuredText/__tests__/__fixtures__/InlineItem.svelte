<script>import { isInlineItem } from "datocms-structured-text-utils";
export let node;
export let link;
</script>

{#if link.__typename == 'DocPageRecord' && isInlineItem(node)}
	<a href={`/docs/${link.slug}`}>{link.title}</a>;
{/if}
