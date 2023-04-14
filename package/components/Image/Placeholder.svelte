<script>export let base64 = null;
export let backgroundColor = null;
export let objectFit;
export let objectPosition;
export let showImage;
export let fadeInDuration = 0;
let transition = fadeInDuration > 0 ? `opacity ${fadeInDuration}ms` : void 0;
let opacity = showImage ? 1 : 0;
$:
  console.log("opacity", opacity, showImage);
</script>

<img
	class="placeholder"
	aria-hidden="true"
	alt=""
	src={base64}
	style:background-color={backgroundColor}
	style:object-fit={objectFit}
	style:object-position={objectPosition}
	style:transition
	style:opacity
/>

<style>
	.placeholder {
		position: absolute;
		width: 100%;
		top: 0;
		scale: 110%;
	}
</style>
