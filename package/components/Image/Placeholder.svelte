<script>export let base64 = null;
export let backgroundColor = null;
export let objectFit;
export let objectPosition;
export let showImage;
export let fadeInDuration = 0;
let transition = fadeInDuration > 0 ? `opacity ${fadeInDuration}ms` : void 0;
let opacity = showImage ? 0 : 1;
</script>

<img
	class="placeholder"
	aria-hidden="true"
	alt=""
	src={base64}
	style:backgroundColor
	style:objectFit
	style:objectPosition
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
