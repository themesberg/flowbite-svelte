<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let liClass: string = 'mr-4 last:mr-0 md:mr-6';
  export let aClass: string = 'hover:underline';
  export let href: string = '';
  export let target: string | undefined = undefined;

  let liCls: string = twMerge(liClass, $$props.classLi);
  let aCls: string = twMerge(aClass, $$props.classA);
</script>

<li class={liCls}>
  <a {...$$restProps} {href} class={aCls} {target}>
    <slot />
  </a>
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Component data
@prop export let liClass: string = 'mr-4 last:mr-0 md:mr-6';
@prop export let aClass: string = 'hover:underline';
@prop export let href: string = '';
@prop export let target: string | undefined = undefined;
-->
