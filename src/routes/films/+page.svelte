<script lang="ts">
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import ProjectCard from '../../lib/ProjectCard.svelte';
  import tonepoemsPic from '../../assets/pics/tonepoems.png?enhanced';
  import TopNav from '../../lib/TopNav.svelte';

  let ready = false;
  onMount(() => {
    console.log('ready');
    ready = true;
  });

  const projects = [
    {
      ytSrc: 'https://www.youtube.com/embed/-eycN16121A?si=8516u6rfOidQiol6',
      title: 'Extract 1',
      subtitle: 'Otherworldly outlaws finally found the big score!',
      description: `I've always had a fascination and appreciation of science fiction, and I refuse to let a low budget limit my possibilities.
      
      With a fog machine, a tea pot, and a garden hose and a little imagintaion, you can make anything possible! Extract 1 also features a strong musical motif written by yours truly.
      
      I also explored a more improvised approach to film making, normally I depend on planning but wityh everyone's busy schedules in can be near impossible to know who will be available, and I have to make a film every month. No Excuses.
      `,
    },
    {
      ytSrc: 'https://www.youtube-nocookie.com/embed/4KsFaifasFU?si=zkS8Rjhu6C-b1KNs',
      title: 'El Frio',
      subtitle: 'A refrigerator may possess more than just ice.',
      description: `The bare minimum need to make a film, 1 actor. El Frio is chilling commentary on the isolation and perversion with technology. A topic that has become more pronounced than ever before following the COVID pandemic.
      
      the music score features cold and hypnotic synthesizers with chromatic changes that fuel a sense of uneasiness. `,
    },
  ];
</script>

<TopNav />
{#if ready}
  <div transition:fade={{ duration: 700 }}>
    <h1
      transition:fade={{ duration: 700 }}
      class="faded-header text-3xl font-bold mb-6 p-4 sticky top-14 z-10 bg-white josefin-slab"
    >
      Short Films:
    </h1>
    <div class="m-4 mt-32">
      <p class="sm:mx-16 mx:4 rounded p-8 text-2xl text-white text-gray-700 bg-black josefin-slab-light">
        I absolutley love filmmaking, editing, film scoring, sound design, and so that's what I do in my sparetime. I
        often work with untrained actors i.e. friends, friends of friends etc. When there is a camera running people
        feel emboldened to be more playful, to be serious, to use their imaginations and get creative. This year (2024)
      </p>
    </div>
    <div class="m-4 mt-4">
      <p class="sm:mx-16 mx:4 rounded p-8 text-2xl text-white text-gray-700 bg-black josefin-slab-light">
        This year (2024) I started a new challenge: A film a month. No excuses. Each month I film, plan, edit, compose
        music, engineer audio, and each month I release something. There is a beauty and practicality to being
        consitent. The way you innovate changes when you do something regularly! Also completing this challenge each
        month I have learned not to think to much about the lack of special fx, professional actors etc. I appreciate
        that I can do what I love!
      </p>
    </div>
    <div class="mt-8 flex-col items-center justify-center">
      <div class="flex flex-col items-center justify-center">
        {#each projects as project}
          <div class="m-4 my-16 flex flex-col items-center justify-center">
            <ProjectCard {...project} />
          </div>
        {/each}
      </div>
    </div>
  </div>
{/if}
