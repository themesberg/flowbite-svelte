<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  interface Props{
    aClass?:string| undefined;
    spanClass?: string| undefined;
    imgClass?: string| undefined;
    href?: string| undefined;
    src?: string| undefined;
    alt?: string| undefined;
    name?: string| undefined;
    target?: string | undefined;
  }
  let {aClass, spanClass, imgClass, href, src, alt, name, target, ...attributes} = $props<Props>();

  let aCls: string = twMerge('flex items-center', aClass);
  let spanCls: string = twMerge('self-center text-2xl font-semibold whitespace-nowrap dark:text-white', spanClass);
  let imgCls: string = twMerge('me-3 h-8',imgClass);
</script>

{#if href}
  <a {...attributes} {href} {target} class={aCls}>
    <img {src} class={imgCls} {alt} />
    <span class={spanCls}>{name}</span>
    <slot />
  </a>
{:else}
  <img {src} class={imgCls} {alt} />
{/if}