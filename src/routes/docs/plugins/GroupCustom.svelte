<script lang="ts">
  import { type GroupEditorBasicProps, AlignmentButtons, FontButtons, FormatButtons, ImageButtons } from '@flowbite-svelte-plugins/texteditor';

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