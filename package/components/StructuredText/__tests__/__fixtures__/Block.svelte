<script>import { isBlock } from "datocms-structured-text-utils";
export let node;
export let block;
</script>

{#if block.__typename == 'QuoteRecord' && isBlock(node)}
	<figure>
		<blockquote>{block.quote}</blockquote>
		<figcaption>{block.author}</figcaption>
	</figure>
{/if}
