<script lang="ts">
  import { type SidebarBrandProps as Props, sitebarbrand } from '.';

  let { children, site, imgClass, spanClass, class: className, ...restProps }: Props = $props();

  const { base, img, span } = $derived(sitebarbrand());
</script>

<a {...restProps} href={site?.href ? site.href : '/'} class={base({ className })}>
  {#if site}
    <img src={site.img} class={img({ class: imgClass })} alt={site.name} />
    <span class={span({ class: spanClass })}>{site.name}</span>
  {:else if children}
    {@render children()}
  {/if}
</a>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop site
@prop imgClass
@prop spanClass
@prop class: className
@prop ...restProps
-->
