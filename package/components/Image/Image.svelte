<script context="module">import IntersectionObserver from "svelte-intersection-observer";
const isWindowDefined = typeof window !== "undefined";
const noTypeCheck = (x) => x;
const imageAddStrategy = ({ lazyLoad, intersecting, loaded }) => {
  const isIntersectionObserverAvailable = isWindowDefined ? !!window.IntersectionObserver : false;
  if (!lazyLoad) {
    return true;
  }
  if (!isWindowDefined) {
    return false;
  }
  if (isIntersectionObserverAvailable) {
    return intersecting || loaded;
  }
  return true;
};
const imageShowStrategy = ({ lazyLoad, loaded }) => {
  const isIntersectionObserverAvailable = isWindowDefined ? !!window.IntersectionObserver : false;
  console.log("check", lazyLoad);
  if (!lazyLoad) {
    return true;
  }
  if (!isWindowDefined) {
    return false;
  }
  if (isIntersectionObserverAvailable) {
    return loaded;
  }
  return true;
};
const bogusBaseUrl = "https://example.com/";
const buildSrcSet = (src, width, candidateMultipliers) => {
  if (!(src && width)) {
    return void 0;
  }
  return candidateMultipliers.map((multiplier) => {
    const url = new URL(src, bogusBaseUrl);
    if (multiplier !== 1) {
      url.searchParams.set("dpr", `${multiplier}`);
      const maxH = url.searchParams.get("max-h");
      const maxW = url.searchParams.get("max-w");
      if (maxH) {
        url.searchParams.set("max-h", `${Math.floor(parseInt(maxH) * multiplier)}`);
      }
      if (maxW) {
        url.searchParams.set("max-w", `${Math.floor(parseInt(maxW) * multiplier)}`);
      }
    }
    const finalWidth = Math.floor(width * multiplier);
    if (finalWidth < 50) {
      return null;
    }
    return `${url.toString().replace(bogusBaseUrl, "/")} ${finalWidth}w`;
  }).filter(Boolean).join(",");
};
</script>

<script>import { createEventDispatcher } from "svelte";
import Sizer from "./Sizer.svelte";
import Placeholder from "./Placeholder.svelte";
import Source from "./Source.svelte";
const dispatch = createEventDispatcher();
let element;
let intersecting = false;
let loaded = false;
export let alt = null;
export let data;
let klass = null;
export { klass as class };
export let pictureClass = null;
export let fadeInDuration = 500;
export let intersectionThreshold = 0;
export let intersectionMargin = "0px";
let rawLazyLoad = true;
export { rawLazyLoad as lazyLoad };
export let style = {};
export let pictureStyle = null;
export let layout = "intrinsic";
export let objectFit = void 0;
export let objectPosition = void 0;
export let usePlaceholder = true;
export let sizes = null;
export let priority = false;
export let srcSetCandidates = [0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4];
$:
  ({ width, height, aspectRatio } = data);
$:
  lazyLoad = priority ? false : rawLazyLoad;
$:
  addImage = imageAddStrategy({
    lazyLoad,
    intersecting,
    loaded
  });
$:
  showImage = imageShowStrategy({
    lazyLoad,
    intersecting,
    loaded
  });
let transition = fadeInDuration > 0 ? `opacity ${fadeInDuration}ms` : void 0;
</script>

<IntersectionObserver
	{element}
	bind:intersecting
	threshold={intersectionThreshold}
	rootMargin={intersectionMargin}
>
	<div
		bind:this={element}
		class={klass}
		style:overflow="hidden"
		style:position={style.position ?? layout === 'fill' ? 'absolute' : 'relative'}
		style:width={style.width ?? layout === 'fixed' ? data.width : '100%'}
		style:max-width={style.maxWidth ?? layout === 'intrinsic' ? data.width : null}
		style:height={style.height ?? layout === 'fill' ? '100%' : null}
		data-testid="image"
	>
		{#if layout !== 'fill' && width}
			<Sizer {width} {height} {aspectRatio} />
		{/if}

		{#if usePlaceholder && (data.bgColor || data.base64)}
			<Placeholder
				base64={data.base64}
				backgroundColor={data.bgColor}
				{objectFit}
				{objectPosition}
				{showImage}
				{fadeInDuration}
			/>
		{/if}

		{#if addImage}
			<picture data-testid="picture">
				{#if data.webpSrcSet}
					<Source srcset={data.webpSrcSet} sizes={sizes ?? data.sizes ?? null} type="image/webp" />
				{/if}
				<Source
					srcset={data.srcSet ?? buildSrcSet(data.src, data.width, srcSetCandidates) ?? null}
					sizes={sizes ?? data.sizes ?? null}
				/>
				{#if data.src}
					<img
						{...noTypeCheck({
							// See: https://github.com/sveltejs/language-tools/issues/1026#issuecomment-1002839154
							fetchpriority: priority ? 'high' : undefined
						})}
						src={data.src}
						alt={alt ?? data.alt ?? ''}
						title={data.title ?? null}
						on:load={() => {
							dispatch('load');
							loaded = true;
						}}
						class={pictureClass}
						style={pictureStyle}
						style:opacity={showImage ? 1 : 0}
						style:transition
						style:position="absolute"
						style:left="0"
						style:top="0"
						style:width="100%"
						style:height="100%"
						style:object-fit={objectFit}
						style:object-position={objectPosition}
						data-testid="img"
					/>
				{/if}
			</picture>
		{/if}
	</div>
</IntersectionObserver>
