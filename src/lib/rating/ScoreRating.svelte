<script lang="ts">
  interface $$Props {
    ratings: { label: string; rating: number }[];
    ratings2: { label: string; rating: number }[];
    headerLabel: {
      desc1?: string;
      desc2?: string;
      desc3?: string;
      link?: { label: string; url: string };
    };
    desc1Class?: string;
    desc2Class?: string;
    desc3spanClass?: string;
    desc3pClass?: string;
    linkClass?: string;
    barColor?: string;
  }

  export let ratings: $$Props['ratings'] = [];
  export let ratings2: $$Props['ratings2'] = [];
  export let headerLabel: $$Props['headerLabel'];
  export let desc1Class: $$Props['desc1Class'] = 'bg-primary-100 w-8 text-primary-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-primary-200 dark:text-primary-800';
  export let desc2Class: $$Props['desc2Class'] = 'ms-2 w-24 font-medium text-gray-900 dark:text-white';
  export let desc3spanClass: $$Props['desc3spanClass'] = 'mx-2 w-1 h-1 bg-gray-900 rounded-full dark:bg-gray-500';
  export let desc3pClass: $$Props['desc3pClass'] = 'text-sm  w-24 font-medium text-gray-500 dark:text-gray-400';
  export let linkClass: $$Props['linkClass'] = 'ms-auto w-32 text-sm font-medium text-primary-600 hover:underline dark:text-primary-500';
  export let barColor: $$Props['barColor'] = 'bg-primary-600 h-2.5 rounded dark:bg-primary-500';
</script>

<div class="flex items-center mb-5">
  {#if headerLabel.desc1}
    <p class={desc1Class}>{headerLabel.desc1}</p>
  {/if}
  {#if headerLabel.desc2}
    <p class={desc2Class}>{headerLabel.desc2}</p>
  {/if}
  {#if headerLabel.desc3}
    <span class={desc3spanClass}></span>
    <p class={desc3pClass}>{headerLabel.desc3}</p>
  {/if}
  {#if headerLabel.link}
    <a href={headerLabel.link.url} class={linkClass}>{headerLabel.link.label}</a>
  {/if}
</div>
<div class="gap-8 sm:grid sm:grid-cols-2">
  <div>
    {#each ratings as { label, rating }}
      <dl>
        <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</dt>
        <dd class="flex items-center mb-3">
          <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
            <div class={barColor} style="width: {rating * 10}%"></div>
          </div>
          <span class="text-sm font-medium text-gray-500 dark:text-gray-400">{rating}</span>
        </dd>
      </dl>
    {/each}
  </div>
  <div>
    {#each ratings2 as { label, rating }}
      <dl>
        <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</dt>
        <dd class="flex items-center mb-3">
          <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
            <div class={barColor} style="width: {rating * 10}%"></div>
          </div>
          <span class="text-sm font-medium text-gray-500 dark:text-gray-400">{rating}</span>
        </dd>
      </dl>
    {/each}
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let ratings: $$Props['ratings'] = [];
@prop export let ratings2: $$Props['ratings2'] = [];
@prop export let headerLabel: $$Props['headerLabel'];
@prop export let desc1Class: $$Props['desc1Class'] = 'bg-primary-100 w-8 text-primary-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-primary-200 dark:text-primary-800';
@prop export let desc2Class: $$Props['desc2Class'] = 'ms-2 w-24 font-medium text-gray-900 dark:text-white';
@prop export let desc3spanClass: $$Props['desc3spanClass'] = 'mx-2 w-1 h-1 bg-gray-900 rounded-full dark:bg-gray-500';
@prop export let desc3pClass: $$Props['desc3pClass'] = 'text-sm  w-24 font-medium text-gray-500 dark:text-gray-400';
@prop export let linkClass: $$Props['linkClass'] = 'ms-auto w-32 text-sm font-medium text-primary-600 hover:underline dark:text-primary-500';
@prop export let barColor: $$Props['barColor'] = 'bg-primary-600 h-2.5 rounded dark:bg-primary-500';
-->
