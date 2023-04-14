<script context="module"></script>

<script>export let data = [];
</script>

<svelte:head>
	{#each data as { tag, attributes, content }}
		{#if content}
			<svelte:element this={tag} {...attributes}>{content}</svelte:element>
		{:else}
			<svelte:element this={tag} {...attributes} />
		{/if}
	{/each}
</svelte:head>
