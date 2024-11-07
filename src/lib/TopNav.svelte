<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { fade } from 'svelte/transition';
  const navOptions = [
    { path: '/', label: 'Home' },

    { path: '/projects', label: 'Code' },
    { path: '/films', label: 'Films' },
    { path: '/music', label: 'Music' },
    { path: '/contact', label: 'Contact' },
  ];
  let ready = false;
  let previousPath = $page.url.pathname;
  onMount(() => {
    console.log('ready');
    ready = true;
  });
</script>

<nav class="top-nav josefin-slab">
  <ul>
    {#each navOptions as item}
      <li>
        {#if $page.url.pathname === item.path}
          {#if ready}
            <a href={item.path} class="active" transition:fade={{ duration: 700 }}>{item.label}</a>
          {/if}
        {:else}
          <a href={item.path} transition:fade>{item.label}</a>
        {/if}
      </li>
    {/each}
  </ul>
</nav>

<style>
  .top-nav {
    font-weight: 200;
    font-size: 1.2rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #000;
    z-index: 1000;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
  }

  li {
    padding: 0;
    height: 100%;
    display: flex;
    align-items: center;
    flex: 1;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    padding: 1rem;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: black;
    justify-content: center;
    flex: 1;
  }

  a.active {
    background-color: white;
    color: black;
    transition: background-color 0.5s ease-out;
  }

  a:hover {
    text-decoration: underline;
  }
</style>
