<script>import { defaultMetaTransformer } from "datocms-structured-text-generic-html-renderer";
import { isItemLink } from "datocms-structured-text-utils";
export let node;
export let link;
$:
  ({ meta } = node);
$:
  transformedMeta = meta ? defaultMetaTransformer({ node, meta }) : null;
</script>

{#if link.__typename == 'DocPageRecord' && isItemLink(node)}
	<a {...transformedMeta} href={`/docs/${link.slug}`}>
		<slot />
	</a>
{/if}
