<script lang="ts">
  import clsx from "clsx";
  import { type TagsProps, CloseButton } from "$lib";
  import { tags, type TagsTheme } from "./theme";
  import { getTheme } from "$lib/theme/themeUtils";

  let { value = $bindable([]), itemClass, spanClass, placeholder = "Enter tags", class: className, closeClass, inputClass, closeBtnSize = "xs", ...restProps }: TagsProps = $props();

  const theme = getTheme("tags");

  const { base, tag: tagCls, span: spanCls, closebutton, input: inputCls } = $derived(tags());

  let contents: string = $state("");

  const handleKeys = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (contents.length > 0 && contents.trim().length > 0) {
        value.push(contents.trim());
        value = value;
        contents = "";
      }
    }

    if (event.key === "Backspace") {
      if (contents.length === 0) {
        event.preventDefault();
        contents = value.pop() ?? "";
        value = value;
      }
    }
  };

  const deleteField = (index: number) => {
    value.splice(index, 1);
    value = value;
  };
</script>

<div {...restProps} class={base({ class: clsx((theme as TagsTheme)?.base, className) })}>
  {#each value as tag, index}
    <div class={tagCls({ class: clsx((theme as TagsTheme)?.tag, itemClass) })}>
      <span class={spanCls({ class: clsx((theme as TagsTheme)?.span, spanClass) })}>
        {tag}
      </span>
      <CloseButton
        size={closeBtnSize}
        class={closebutton({ class: clsx((theme as TagsTheme)?.closebutton, closeClass) })}
        onclick={() => {
          deleteField(index);
        }}
      />
    </div>
  {/each}

  <input
    onkeydown={(event) => {
      handleKeys(event);
    }}
    bind:value={contents}
    placeholder={value.length === 0 ? placeholder : ""}
    type="text"
    autocomplete="new-password"
    class={inputCls({ class: clsx(inputClass) })}
  />
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TagsProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L885)
## Props
@prop value = $bindable([])
@prop itemClass
@prop spanClass
@prop placeholder = "Enter tags"
@prop class: className
@prop closeClass
@prop inputClass
@prop closeBtnSize = "xs"
@prop ...restProps
-->
