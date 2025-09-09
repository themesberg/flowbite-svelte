<script lang="ts">
  import { type DesktopProps } from "$lib";
  import { warnThemeDeprecation } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { desktop } from ".";

  let { children, class: className, classes, divClass, div2Class, div3Class, div4Class, ...restProps }: DesktopProps = $props();

  warnThemeDeprecation("Desktop", { divClass, div2Class, div3Class, div4Class }, { divClass: "class", div2Class: "inner", div3Class: "bot", div4Class: "botUnder" });
  const styling = $derived(
    classes ?? {
      inner: div2Class,
      bot: div3Class,
      botUnder: div4Class
    }
  );

  const { base, inner, bot, botUnder } = desktop();
</script>

<div {...restProps} class={base({ class: clsx(className ?? divClass) })}>
  <div class={inner({ class: clsx(styling.inner) })}>
    {#if children}
      {@render children()}
    {/if}
  </div>
</div>
<div class={bot({ class: clsx(styling.bot) })}></div>
<div class={botUnder({ class: clsx(styling.botUnder) })}></div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DesktopProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L497)
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
