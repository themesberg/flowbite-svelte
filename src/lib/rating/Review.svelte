<script lang="ts">
  import clsx from "clsx";
  import { review as reviewVariants } from "./theme";
  import type { ReviewProps } from "$lib/types";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { children, address, item1, item2, item3, review, class: className, classes }: ReviewProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("review"));

  const { base, userInfo, userDetails, addressWrapper, avatar, metadata, metadataItem } = $derived(reviewVariants());
</script>

{#if review}
  <article data-scope="review" data-part="base" class={base({ class: clsx(theme?.base, className) })}>
    <div>
      <div data-part="user-info" class={userInfo({ class: clsx(theme?.userInfo, styling?.userInfo) })}>
        <img data-part="avatar" class={avatar({ class: clsx(theme?.avatar, styling?.avatar) })} src={review.imgSrc} alt={review.imgAlt} />
        <div data-part="user-details" class={userDetails({ class: clsx(theme?.userDetails, styling?.userDetails) })}>
          <p>{review.name}</p>
          {#if review.address}
            {#if address}
              <div data-part="address-wrapper" class={addressWrapper({ class: clsx(theme?.addressWrapper, styling?.addressWrapper) })}>
                {@render address()}
              </div>
            {/if}
          {/if}
        </div>
      </div>
      {#if review.item1 || review.item2 || review.item3}
        <ul data-part="metadata" class={metadata({ class: clsx(theme?.metadata, styling?.metadata) })}>
          {#if review.item1}
            <li data-part="metadata-item" class={metadataItem({ class: clsx(theme?.metadataItem, styling?.metadataItem) })}>
              {#if item1}
                {@render item1()}
              {/if}
            </li>
          {/if}
          {#if review.item2}
            <li data-part="metadata-item" class={metadataItem({ class: clsx(theme?.metadataItem, styling?.metadataItem) })}>
              {#if item2}
                {@render item2()}
              {/if}
            </li>
          {/if}
          {#if review.item3}
            <li data-part="metadata-item" class={metadataItem({ class: clsx(theme?.metadataItem, styling?.metadataItem) })}>
              {#if item3}
                {@render item3()}
              {/if}
            </li>
          {/if}
        </ul>
      {/if}
    </div>

    <div class="col-span-2 mt-6 md:mt-0">
      <div class="mb-5 flex items-start">
        <div class="pe-4">
          {#if review.reviewDate}
            <footer>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                Reviewed: {review.reviewDate}
              </p>
            </footer>
          {/if}
          <h4 class="text-xl font-bold text-gray-900 dark:text-white">
            {review.title}
          </h4>
        </div>
        <p class="bg-primary-700 inline-flex items-center rounded-sm p-1.5 text-sm font-semibold text-white">
          {review.rating}
        </p>
      </div>
      {@render children()}
    </div>
  </article>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ReviewProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1288)
## Props
@prop children
@prop address
@prop item1
@prop item2
@prop item3
@prop review
@prop classes
-->
