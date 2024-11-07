<script lang="ts">
  import { fade } from 'svelte/transition';
  export let title = '';
  export let url;
  export let phone;
  export let email;

  if (email) {
    email = `mailto: ${email}`;
  }
  if (phone) {
    phone = `tel: ${phone}`;
  }
</script>

<div transition:fade={{ duration: 700 }} class="contact-card p-1 bg-black shadow-md mb-4 dosis-bold w-full">
  <a
    href={url || phone || email}
    target="_blank"
    rel="noopener noreferrer"
    class="text-2xl flex text-white hover:underline w-screen justify-center rajdhani-semibold"
  >
    {title}
  </a>
</div>

<style>
  /* Optional: Add hover effects or animations */
  .contact-card a:hover {
    color: #1e40af; /* Darker shade of blue */
  }
  .contact-card:hover {
    transform: scale(1.5);
    transition: transform 0.3s ease;

    /*  scale: 1.1; */
  }
  .contact-card {
    transition: transform 0.3s ease;
    /*  scale: 1.1; */
  }
</style>
