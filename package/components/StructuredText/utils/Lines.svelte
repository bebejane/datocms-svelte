<script>export let lines = [];
$:
  [first, ...rest] = lines;
</script>

{first}

{#if rest.length > 0}
	<br />
	<svelte:self lines={rest} />
{/if}
