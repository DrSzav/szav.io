<script lang="ts">
  import { fade } from 'svelte/transition';
  import ProjectCard from '../../lib/ProjectCard.svelte';
  import tonepoemsPic from '../../assets/pics/tonepoems.png?enhanced';
  import taskWithLimitPic from '../../assets/pics/taskWithTimeLimit.png?enhanced';
  import TopNav from '../../lib/TopNav.svelte';
  import screamioPic from '../../assets/pics/screemio.png?enhanced';
  import szavPic from '../../assets/pics/szav.io.png?enhanced';

  const projects = [
    {
      imageSrc: tonepoemsPic,
      title: 'Tone Poems',
      subtitle: 'An interactive writing experience',
      description: `An interactive website for creating melodies with text/typing. 
     Tonepeoms is a project that I created a started a few years back showcasing my love for art + technology.
     \n This second iteration of the project is designed to be more accessible to musicians and non-musicians alike.
     \n Tone Poems showcases my love for music art and technology, I applied my understanding of audio engineering to create my very own web audio based synthesizer that works in tandem with a custom event looping class.
     \m The User interface is designed to be intuitively sleek, responsive, with enough animation to be visually engaging. Under the hood we’ll find Vue + Gridsome + Tailwind for a lightweight deployments on Netlify.
      
      `,
      keywords: [
        'Vue',
        'TailwindCSS',
        'Firestore',
        'Netlify',
        'WebAudio',
        'Gridsome',
        'SSR',
        'javascript',
        'html',
        'css',
        'nodejs',
      ],
      links: [
        { url: 'https://falsesoap.com', label: 'Website' },
        { url: 'https://github.com/falsesoap/tonepoems-gridsome', label: 'GitHub' },
      ],
    },
    {
      imageSrc: taskWithLimitPic,
      title: 'Task With Time Limit',
      subtitle: 'A utility for environments with limited execution time',
      description: `
It’s as simple as it sounds, it puts a time limit on a function call and throws an error because sometimes errors are good!

A little wrapper/utility function that I created primarily for serverless environments. This allows you to call an asynchronous function/promise/promise array and in the event that the function(s) exceed the time limit, force an error to be thrown. 

This is useful for AWS lambda or Google’s cloud functions etc, we can set our time limit to 850 seconds and perform logging/save progress/clean up when the lambda would just otherwise timeout. This is also my first npm package, perhaps something similar already exists, I hope this helps someone else in their micro-service architecture journey. `,
      keywords: ['npm', 'serverless', 'AWS lambda', 'Cloud Functions', 'microservices', 'promises', 'async'],
      links: [
        { url: 'https://www.npmjs.com/package/task-with-time-limit', label: 'NPM package' },
        { url: 'https://github.com/DrSzav/Task-With-Time-Limit', label: 'Github Repo' },
      ],
    },
    {
      title: 'Szav.io',
      imageSrc: szavPic,
      subtitle: 'The site that you are on right now!',
      keywords: ['Svelte', 'TailwindCSS', 'Vite', 'SSR', 'SvelteKit', 'javascript', 'html', 'css', 'nodejs'],
      description: `
      
It had been a minute since I had built something on the front-end. I know there are some extremely elegant templates, and CMS available but that somehow seemed wrong to me. I am a developer after all.

For this site I work with my beloved svelte which I discovered while investigating the “realworld” app. Svelte’s performance is definitely a plus but more importantly I find it to be less redundant and boilerplatey.Less code = less problems.

Tailwind because it's lightweight and offers the customizability to quickly make something beautiful and consistent.

I utilize Vite for the first time, not a bad experience so far, but most importantly I really wanted to make my own “perpallax” (parallax but perpendicular) effect, so when you scroll down, the images move horizontally. When you gotta have it, you gotta have it.

Special thanks to Enes Demir @mdenesfe for the Svelte Tailwind Starter Kit!
      `,
      links: [
        { url: 'https://szav.io', label: 'This Website' },
        { url: 'https://github.com/mdenesfe/svelte-tailwind-starter-kit', label: 'Svelte Tailwind Starter Kit' },
        { url: 'https://github.com/sveltejs/realworld', label: 'Svelte real world example' },
      ],
    },
    {
      imageSrc: screamioPic,
      title: 'Screaming Focus (work in progress)',
      subtitle: 'The worst productivity app ever created.',
      keywords: ['React-Native', 'Expo', 'iOS', 'productivity', 'mindfulness', ''],
      description: `
      Screaming focus is my attempt to combat the highly addictive nature of smart phones and apps these days. The dark patterns employed by tech giants has made smartphones one of the most addictive drugs on the market, affecting our memory, focus, sleep etc. What other drug is so openly accepted despite our awareness of these harmful affects and dopamine addiction cycles.

The app is simple: you set a timer, and then screams at you for touching your phone, moving your phone etc until the timer ends. Vibrating and screaming until you put your phone down. 

If regular pastel colored mindfulness apps aren’t doing the trick, then this app may be your path to clarity.
 `,
      links: [],
    },
  ];
</script>

<TopNav />
<div transition:fade>
  <h1
    transition:fade={{ duration: 700 }}
    class="faded-header text-3xl font-bold mb-1 p-4 sticky top-14 z-10 bg-white josefin-slab"
  >
    Szav's Projects:
  </h1>
  <div class="mt-12 flex-col items-center justify-center">
    <div class="flex flex-col items-center justify-center">
      {#each projects as project}
        <div class="m-4 flex flex-col items-center justify-center">
          <ProjectCard {...project} />
        </div>
      {/each}
    </div>
  </div>
</div>
