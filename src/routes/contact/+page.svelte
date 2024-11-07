<script lang="ts">
  import ContactLink from '../../lib/ContactLink.svelte';
  import TopNav from '../../lib/TopNav.svelte';
</script>

<TopNav />
<h1 class="text-3xl font-bold mb-6 p-4 sticky top-14 z-10 bg-white josefin-slab">Stay in touch!</h1>
<div class="mt-4 flex-col items-center justify-center">
  <div class="flex flex-col items-center justify-center">
    <section class="mt-16 w-screen">
      <ContactLink url="https://www.linkedin.com/in/szavio-petrus-raaum-871bb4118/" title="LinkedIn" />
      <ContactLink url="https://www.instagram.com/falsesoap" title="Instagram" />
      <ContactLink url="https://www.youtube.com/@ReplenishTheResource" title="Youtube" />
      <ContactLink phone="6513543296" title="Phone" />
      <ContactLink email="szavio@gmail.com" title="Email" />
      <ContactLink title="thanks" />
      <ContactLink title="for" />
      <ContactLink title="visiting!" />
      <ContactLink />
      <ContactLink />
    </section>
  </div>
</div>
