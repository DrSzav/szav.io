<script lang="ts">
  import ProjectCard from '../../lib/ProjectCard.svelte';
  import tonepoemsPic from '../../assets/pics/tonepoems.png?enhanced';
  import TopNav from '../../lib/TopNav.svelte';

  const projects = [
    {
      imageSrc: tonepoemsPic,
      title: 'Tone Poems',
      description: 'An interactive writing experience, that allows you to compose music with your words.',
      linkUrl: 'https://falsesoap.com',
    },
    {
      imageSrc: tonepoemsPic,
      title: 'Tone Poems',
      description: 'An interactive writing experience, that allows you to compose music with your words.',
      linkUrl: 'https://falsesoap.com',
    },
    {
      imageSrc: tonepoemsPic,
      title: 'Tone Poems',
      description: 'An interactive writing experience, that allows you to compose music with your words.',
      linkUrl: 'https://falsesoap.com',
    },
    {
      imageSrc: tonepoemsPic,
      title: 'Tone Poems',
      description: 'An interactive writing experience, that allows you to compose music with your words.',
      linkUrl: 'https://falsesoap.com',
    },
    {
      imageSrc: tonepoemsPic,
      title: 'Tone Poems',
      description: 'An interactive writing experience, that allows you to compose music with your words.',
      linkUrl: 'https://falsesoap.com',
    },
  ];
</script>

<TopNav />
<h1 class="text-3xl font-bold mb-6 p-4 sticky top-12 z-10 bg-white">Coding Projects:</h1>
<div class="mt-64 flex-col items-center justify-center">
  <div class="flex flex-col items-center justify-center">
    {#each projects as project}
      <div class="m-4 flex flex-col items-center justify-center">
        <ProjectCard {...project} />
      </div>
    {/each}
  </div>
</div>
