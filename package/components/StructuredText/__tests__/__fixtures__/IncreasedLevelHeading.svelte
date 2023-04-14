<script>export let node;
$:
  ({ level = 1 } = node);
$:
  element = `h${level + 1}`;
</script>

<svelte:element this={element}><slot /></svelte:element>
