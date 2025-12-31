<script lang="ts">
  import { testimonialPlaceholder } from "./theme";
  import clsx from "clsx";
  import type { TestimonialPlaceholderProps } from "$lib";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { class: className, classes, ...restProps }: TestimonialPlaceholderProps = $props();

  const theme = $derived(getTheme("testimonialPlaceholder"));

  const { base, primaryLine, secondaryLine, avatarIcon, authorInfo } = testimonialPlaceholder();
</script>

<div role="status" {...restProps} data-scope="testimonial-placeholder" data-part="base" class={base({ class: clsx(theme?.base, className) })}>
  <div
    data-part="secondary-line"
    class={secondaryLine({
      class: clsx("mx-auto mb-2.5 h-2.5 max-w-[640px]", theme?.secondaryLine, classes?.secondaryLine)
    })}
  ></div>
  <div
    data-part="secondary-line"
    class={secondaryLine({
      class: clsx("mx-auto h-2.5 max-w-[540px]", theme?.secondaryLine, classes?.secondaryLine)
    })}
  ></div>
  <div
    data-part="author-info"
    class={authorInfo({
      class: clsx(theme?.authorInfo, classes?.authorInfo)
    })}
  >
    <svg
      data-part="avatar-icon"
      class={avatarIcon({ class: clsx(theme?.avatarIcon, classes?.avatarIcon) })}
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
        clip-rule="evenodd"
      ></path>
    </svg>
    <div
      data-part="primary-line"
      class={primaryLine({
        class: clsx("me-3 h-2.5 w-20", theme?.primaryLine, classes?.primaryLine)
      })}
    ></div>
    <div
      data-part="primary-line"
      class={primaryLine({
        class: clsx("h-2 w-24", theme?.primaryLine, classes?.primaryLine)
      })}
    ></div>
  </div>
  <span class="sr-only">Loading...</span>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TestimonialPlaceholderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1416)
## Props
@prop class: className
@prop classes
@prop ...restProps
-->
