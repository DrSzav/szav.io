<script>
  import { onMount } from 'svelte';

  let allPictures = [];
  let scrollY = 0;
  let containerWidth;
  let xMultiplier = 1;
  export let xFlip = false;
  if (xFlip) {
    xMultiplier = -1;
  }
  $: offset = scrollY * 2 * xMultiplier || 0;
  $: translateX = -offset + 800;
  $: imageWidth = Math.min(500, containerWidth || 500);
  $: imageHeight = imageWidth * 0.75; // Assuming a 4:3 aspect ratio
  $: translateY = -scrollY * 0.5 + 100; // New: Calculate vertical translation based on scroll

  onMount(async () => {
    const imageModules = import.meta.glob('../assets/pics/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}', {
      eager: true,
      query: {
        enhanced: true,
      },
    });

    allPictures = Object.entries(imageModules).map(([path, module]) => ({
      url: module.default,
      alt: path.split('/').pop().split('.')[0],
    }));
  });
</script>

<svelte:window bind:scrollY />

{#if allPictures.length > 0}
  <div class="carousel-container" bind:clientWidth={containerWidth}>
    <div class="carousel" style="transform: translateX({translateX}px) translateY({translateY}px);">
      {#each allPictures as picture, index}
        <div
          class="carousel-item"
          style="
            width: {imageWidth}px; 
            height: {imageHeight}px;
            transform: translateY({200 + index * 150}px);
          "
        >
          <div class="image-wrapper">
            <enhanced:img src={picture.url} alt={picture.alt} />
          </div>
        </div>
      {/each}
    </div>
  </div>
{/if}

<div class="spacer"></div>

<style>
  .carousel-container {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel {
    display: flex;
    height: 100%;
    transition: transform 0.3s ease;
  }

  .carousel-item {
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease;
    padding: 10px; /* Add padding around the image */
  }

  .image-wrapper {
    width: 100%;
    height: 100%;
    border-radius: 10px; /* Add curved edges */
    overflow: hidden; /* Ensure the image doesn't overflow the curved edges */
  }

  :global(.carousel-item img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .spacer {
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 200vh; /* Increased to 2 times the viewport height */
    pointer-events: none;
  }
</style>
