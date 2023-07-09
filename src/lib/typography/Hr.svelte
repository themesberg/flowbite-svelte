<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let icon: boolean = false;
  export let divClass: string = 'inline-flex items-center justify-center w-full';
  export let hrClass: string = 'h-px my-8 bg-gray-200 border-0 dark:bg-gray-700';
  export let iconDivClass: string = 'absolute left-1/2 px-4 bg-white -translate-x-1/2 ';
  export let textSpanClass: string =
    'absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900 ';
  export let innerDivClass: string = 'absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900';

  let horizontalCls: string = twMerge(hrClass, $$props.classHr);
  let divCls = twMerge(divClass, $$slots && 'relative', $$props.classDiv);
  let innerDivCls = twMerge(innerDivClass, icon ? iconDivClass : textSpanClass, $$props.classInnerDiv);
</script>

{console.log($$slots.default)}

{#if $$slots.default}
  <div {...$$restProps} class={divCls}>
    <hr class={horizontalCls} />
    <div class={innerDivCls}>
      <slot />
    </div>
  </div>
{:else}
  <hr class={horizontalCls} />
{/if}

<!--
  @component
  ## Features
  [Go to Horizontal Line](https://flowbite-svelte.com/docs/typography/hr)
  - Setup
  - Default HR
  - Trimmed
  - Icon HR
  - HR with text
  - HR shape
  ## Props
  @prop icon: boolean;
  @prop divClass: string;
  @prop hrClass: string;
  @prop iconDivClass: string;
  @prop textSpanClass: string;
  @prop innerDivClass: string;
  ## Example
  ```
  <script>
    import { Hr, P } from 'flowbite-svelte'
  </script>
  
  <P>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
  <Hr class="my-8" />
  <P>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
  ```
-->
