<script>
  export let title;
  export let subtitle;
  export let description;
  export let imageSrc = false;
  export let ytSrc = null;
  export let soundCloudSrc = null;
  export let links = [];
  export let keywords = [];
  export let iframeSrc = null;
  export let iframeTitle = null;
</script>

<div class="project-card">
  <div class="content flex flex-col items-center justify-center">
    <h1 class="text-2xl font-bold text-center">{title}</h1>
    <h2 class="text-xl font-bold text-gray-500 rajdhani-semibold">{subtitle}</h2>
    {#if imageSrc}
      <enhanced:img src={imageSrc} alt={title} class="mx-auto rounded-lg border-1 border-gray-200" />
    {/if}

    {#if ytSrc}
      <div class="iframe-container my-4 border-2 border-black rounded-md">
        <iframe
          src={ytSrc + '&rel=0'}
          title="youtube embedded player"
          frameborder="0"
          width="500"
          height="315"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    {/if}

    <p class="text-2xl text-gray-700 rajdhani-light whitespace-pre-line">{description}</p>
    <!-- THe links should show the url to the right and also be styled a little nicer-->
    <div class="flex flex-row flex-wrap">
      {#each links as link}
        <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label} : {link.url}</a>
      {/each}
    </div>

    <div class="flex flex-row flex-wrap mt-4">
      {#each keywords as keyword}
        <span class="bg-gray-200 text-gray-800 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full">{keyword}</span
        >
      {/each}
    </div>
  </div>
</div>

<style>
  .project-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    max-width: 580px;
  }

  .media {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  .content {
    padding: 16px;
  }

  h3 {
    margin-top: 0;
  }

  a {
    display: inline-block;
    margin-top: 8px;
    color: #0066cc;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>
