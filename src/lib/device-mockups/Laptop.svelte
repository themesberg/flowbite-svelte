<script lang="ts">
  import { type LaptopProps } from "$lib";
  import { themeDeprecated } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { laptop } from ".";

  let { children, class: className, classes, divClass, div2Class, div3Class, div4Class, ...restProps }: LaptopProps = $props();

  themeDeprecated("Laptop", { divClass, div2Class, div3Class, div4Class });
  let styling = $derived(
    classes ?? {
      inner: div2Class,
      bot: div3Class,
      botCen: div4Class
    }
  );

  const { base, inner, bot, botCen } = laptop();
</script>

<div {...restProps}>
  <div class={base({ class: clsx(className ?? divClass) })}>
    <div class={inner({ class: clsx(styling.inner) })}>
      {#if children}
        {@render children()}
      {/if}
    </div>
  </div>

  <div class={bot({ class: clsx(styling.bot) })}>
    <div class={botCen({ class: clsx(styling.botCen) })}></div>
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[LaptopProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L486)
## Props
@prop children
@prop class: className
@prop classes
@prop divClass
@prop div2Class
@prop div3Class
@prop div4Class
@prop ...restProps
-->
