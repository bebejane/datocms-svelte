<script>export let node;
$:
  ({ code, language } = node);
</script>

<pre class={language}>{code}</pre>
