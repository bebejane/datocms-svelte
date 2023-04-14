<script>import { isStructuredText } from "datocms-structured-text-utils";
import Node from "./Node.svelte";
export let data = null;
export let components = [];
$:
  node = data != null && (isStructuredText(data) ? data.value : data).document;
$:
  blocks = isStructuredText(data) ? data?.blocks : void 0;
$:
  links = isStructuredText(data) ? data?.links : void 0;
</script>

{#if node}
	<Node {node} {blocks} {links} {components} />
{/if}
