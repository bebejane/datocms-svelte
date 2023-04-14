<script>export let node;
$:
  ({ url } = node);
</script>

<a href={url}><slot /></a>
