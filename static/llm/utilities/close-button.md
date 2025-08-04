# Svelte Close Button - Flowbite


## CloseButton

Use `CloseButton` component to close a component.

```svelte
<script>
  import { CloseButton } from "flowbite-svelte";
  let visible = $state(true);
</script>

{#if visible}
  <div id="banner" tabindex="-1" class="z-50 flex w-full items-start justify-between gap-8 border border-b border-gray-200 bg-gray-50 px-4 py-3 sm:items-center lg:py-4 dark:border-gray-700 dark:bg-gray-800">
    <p class="text-sm font-light text-gray-500 dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, ipsa culpa ea laudantium earum quis? Neque unde aliquam enim, distinctio repellendus delectus? Illo numquam ex fugit dolor esse, cumque nesciunt?</p>
    <CloseButton onclick={() => (visible = false)} />
  </div>
{/if}
```

## See also

- [Buttons](https://flowbite-svelte.com/llm/components/buttons.md)
- [Button group](https://flowbite-svelte.com/llm/components/button-group.md)
- [List group](https://flowbite-svelte.com/llm/components/list-group.md)
- [Close button](https://flowbite-svelte.com/llm/utilities/close-button.md)
- [Radio#radiobutton](https://flowbite-svelte.com/llm/forms/radio#radiobutton.md)
- [Checkbox#checkboxbutton](https://flowbite-svelte.com/llm/forms/checkbox#checkboxbutton.md)

## Component data

### CloseButton

#### Types

[CloseButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L111)

#### Props

- children
- color: "gray"
- onclick: onclickorg
- name: "Close"
- ariaLabel
- size: "md"
- class: className
- svgClass

