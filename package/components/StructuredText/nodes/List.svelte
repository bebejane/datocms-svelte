<script>export let node;
$:
  ({ style } = node);
</script>

{#if style === 'numbered'}
	<ol><slot /></ol>
{:else}
	<ul><slot /></ul>
{/if}
