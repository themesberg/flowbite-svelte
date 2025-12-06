<script lang="ts">
  import { testimonialPlaceholder } from "./theme";
  import clsx from "clsx";
  import type { TestimonialPlaceholderProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { class: className, classes, ...restProps }: TestimonialPlaceholderProps = $props();

  const theme = getTheme("testimonialPlaceholder");

  const { base, lineA, lineB, svg, content } = testimonialPlaceholder();
</script>

<div role="status" {...restProps} class={base({ class: clsx(theme?.base, className) })}>
  <div
    class={lineB({
      class: clsx("mx-auto mb-2.5 h-2.5 max-w-[640px]", theme?.lineB, classes?.lineB)
    })}
  ></div>
  <div
    class={lineB({
      class: clsx("mx-auto h-2.5 max-w-[540px]", theme?.lineB, classes?.lineB)
    })}
  ></div>
  <div
    class={content({
      class: clsx(theme?.content, classes?.content)
    })}
  >
    <svg class={svg({ class: clsx(theme?.svg, classes?.svg) })} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
        clip-rule="evenodd"
      ></path>
    </svg>
    <div
      class={lineA({
        class: clsx("me-3 h-2.5 w-20", theme?.lineA, classes?.lineA)
      })}
    ></div>
    <div
      class={lineA({
        class: clsx("h-2 w-24", theme?.lineA, classes?.lineA)
      })}
    ></div>
  </div>
  <span class="sr-only">Loading...</span>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TestimonialPlaceholderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1556)
## Props
@prop class: className
@prop classes
@prop ...restProps
-->
