<script lang="ts">
  interface Props {
    ratings?: { label: string | undefined | null; rating: number }[];
    ratings2?: { label: string | undefined | null; rating: number }[];
    headerLabel?: {
      desc1?: string | undefined | null;
      desc2?: string | undefined | null;
      desc3?: string | undefined | null;
      link?: { label: string | undefined | null; url: string };
    };
  }

  let { ratings, ratings2, headerLabel }: Props = $props();

  const desc1Cls: string =
    'bg-primary-100 w-8 text-primary-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-primary-200 dark:text-primary-800';
  const desc2Cls: string = 'ms-2 font-medium text-gray-900 dark:text-white';
  const desc3spanCls: string =
    'w-1 h-1 mx-2 mb-4 bg-gray-900 rounded-full dark:bg-gray-500';
  const desc3pCls: string =
    'text-sm  w-24 font-medium text-gray-500 dark:text-gray-400';
  const linkCls: string =
    'ms-auto w-32 text-sm font-medium text-primary-600 hover:underline dark:text-primary-500';
  const barColor: string = 'bg-primary-600 h-2.5 rounded dark:bg-primary-500';
</script>

<div class="mb-5 flex items-center">
  {#if headerLabel}
    {#if headerLabel.desc1}
      <p class={desc1Cls}>{headerLabel.desc1}</p>
    {/if}
    {#if headerLabel.desc2}
      <p class={desc2Cls}>{headerLabel.desc2}</p>
    {/if}
    {#if headerLabel.desc3}
      <span class={desc3spanCls}></span>
      <p class={desc3pCls}>{headerLabel.desc3}</p>
    {/if}
    {#if headerLabel.link}
      <a href={headerLabel.link.url} class={linkCls}>{headerLabel.link.label}</a
      >
    {/if}
  {/if}
</div>
<div class="gap-8 sm:grid sm:grid-cols-2">
  <div>
    {#if ratings}
      {#each ratings as { label, rating }}
        <dl>
          <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
            {label}
          </dt>
          <dd class="mb-3 flex items-center">
            <div class="me-2 h-2.5 w-full rounded bg-gray-200 dark:bg-gray-700">
              <div class={barColor} style="width: {rating * 10}%"></div>
            </div>
            <span class="text-sm font-medium text-gray-500 dark:text-gray-400"
              >{rating}</span
            >
          </dd>
        </dl>
      {/each}
    {/if}
  </div>
  <div>
    {#if ratings2}
      {#each ratings2 as { label, rating }}
        <dl>
          <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
            {label}
          </dt>
          <dd class="mb-3 flex items-center">
            <div class="me-2 h-2.5 w-full rounded bg-gray-200 dark:bg-gray-700">
              <div class={barColor} style="width: {rating * 10}%"></div>
            </div>
            <span class="text-sm font-medium text-gray-500 dark:text-gray-400"
              >{rating}</span
            >
          </dd>
        </dl>
      {/each}
    {/if}
  </div>
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop ratings
@prop ratings2
@prop headerLabel
-->
