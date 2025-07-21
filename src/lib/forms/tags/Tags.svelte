<script lang="ts">
  import clsx from "clsx";
  import { type TagsProps, CloseButton, P } from "$lib";
  import { tags, type TagsTheme } from "./theme";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";

  let {
    value = $bindable([]),
    placeholder = "Enter tags",
    class: className,
    classes,
    itemClass,
    spanClass,
    closeClass,
    inputClass,
    closeBtnSize = "xs",
    unique = false,
    availableTags = [],
    showHelper = false,
    showAvailableTags = false,
    allowNewTags = false,
    ...restProps
  }: TagsProps = $props();

  warnThemeDeprecation(
    "Tags",
    { itemClass, spanClass, closeClass, inputClass },
    { itemClass: "tag", spanClass: "span", closeClass: "close", inputClass: "input" }
  );
  let styling = $derived({
    tag: itemClass,
    span: spanClass,
    close: closeClass,
    input: inputClass
  });

  const theme = getTheme("tags");

  const { base, tag: tagCls, span: spanCls, close, input: inputCls, info, warning, error } = $derived(tags());

  let contents: string = $state("");
  let errorMessage: string = $state("");

  const handleKeys = (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    event.preventDefault();
    const newTag = contents.trim();

    if (newTag.length === 0) return;

    const isInAvailable =
      availableTags.length === 0 ||
      availableTags.some((tag) => tag.toLowerCase() === newTag.toLowerCase());

    const alreadyExists = value.some(
      (tag) => tag.toLowerCase() === newTag.toLowerCase()
    );

    if (!allowNewTags && !isInAvailable) {
      errorMessage = `"${newTag}" is not in the available tags.`;
      return;
    }

    if (unique && alreadyExists) {
      errorMessage = `"${newTag}" is already added.`;
      return;
    }

    value.push(newTag);
    value = value;
    contents = "";
    errorMessage = "";
  }

  if (event.key === "Backspace" && contents.length === 0) {
    event.preventDefault();
    contents = value.pop() ?? "";
    value = value;
    errorMessage = "";
  }
};


  const deleteField = (index: number) => {
    value.splice(index, 1);
    value = value;
    errorMessage = "";
  };
</script>

{#if showHelper && contents.trim().length > 0 && availableTags.length > 0 && !allowNewTags}
  {#if value.some((tag) => tag.toLowerCase() === contents.trim().toLowerCase())}
    <P class={clsx(warning(), classes?.warning)}>"{contents.trim()}" is already added.</P>
  {:else if !availableTags.some((tag) => tag.toLowerCase() === contents.trim().toLowerCase())}
    <P class={clsx(error(), classes?.error)}>"{contents.trim()}" is not in the available tags.</P>
  {/if}
{/if}

<div
  {...restProps}
  class={base({
    class: clsx(
      (theme as TagsTheme)?.base,
      className,
      availableTags.length > 0 ? "overflow-auto" : "overflow-x-auto"
    )
  })}
>
  {#each value as tag, index}
    <div class={tagCls({ class: clsx((theme as TagsTheme)?.tag, styling.tag) })}>
      <span class={spanCls({ class: clsx((theme as TagsTheme)?.span, styling.span) })}>
        {tag}
      </span>
      <CloseButton
        size={closeBtnSize}
        class={close({ class: clsx((theme as TagsTheme)?.close, styling.close) })}
        onclick={() => deleteField(index)}
      />
    </div>
  {/each}
  <div class="relative w-full">
    <input
      onkeydown={handleKeys}
      bind:value={contents}
      placeholder={value.length === 0 ? placeholder : ""}
      type="text"
      autocomplete="new-password"
      class={inputCls({ class: clsx(styling.input) })}
    />
    {#if availableTags.length > 0 && contents.trim() !== ""}
      <ul class="absolute z-10 mt-1 max-h-48 w-full overflow-auto rounded border border-gray-300 bg-white shadow">
        {#each availableTags.filter(
          (tag) =>
            tag.toLowerCase().includes(contents.trim().toLowerCase()) &&
            (!unique || !value.some((t) => t.toLowerCase() === tag.toLowerCase()))
        ) as suggestion}
          <li>
            <button
              type="button"
              class="block w-full cursor-pointer px-3 py-2 text-left hover:bg-gray-100"
              onclick={() => {
                value.push(suggestion);
                value = value;
                contents = "";
              }}
            >
              {suggestion}
            </button>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</div>
