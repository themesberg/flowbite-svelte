<script lang="ts">
  import { AlignmentButtons, FontButtons, FormatButtons, ImageButtons } from "@flowbite-svelte-plugins/texteditor";
  import type { GroupEditorBasicProps } from "@flowbite-svelte-plugins/texteditor";

  let { editor, showToolbar = true }: GroupEditorBasicProps = $props();
</script>

{#if editor && showToolbar}
  <AlignmentButtons {editor} alignment="left" />
  <AlignmentButtons {editor} alignment="right" />
  <ImageButtons {editor} />
  <FontButtons {editor} format="fontSize" />
  <FormatButtons {editor} format="italic" />
  <FormatButtons {editor} format="link" />
  <FormatButtons {editor} format="removeLink" />
{/if}
