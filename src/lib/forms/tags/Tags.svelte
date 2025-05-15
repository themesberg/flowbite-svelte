<script lang="ts">
  import { type TagsProps, CloseButton } from "$lib";
  import { tags } from "./theme";

  let { value = $bindable([]), itemClass, spanClass, placeholder = "Enter tags", class: className, closeClass, inputClass, closeBtnSize = "xs", ...restProps }: TagsProps = $props();

  const { base, tag: tagCls, span: spanCls, close, input: inputCls } = $derived(tags());

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

<div {...restProps} class={base({ class: className })}>
  {#each value as tag, index}
    <div class={tagCls({ class: itemClass })}>
      <span class={spanCls({ class: spanClass })}>
        {tag}
      </span>
      <CloseButton
        size={closeBtnSize}
        class={close({ class: closeClass })}
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
    class={inputCls({ class: inputClass })}
  />
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TagsProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L843)
## Props
@prop value = $bindable([])
@prop itemClass
@prop spanClass
@prop placeholder = 'Enter tags'
@prop class:className
@prop closeClass
@prop inputClass
@prop closeBtnSize = "xs"
@prop ...restProps
-->
