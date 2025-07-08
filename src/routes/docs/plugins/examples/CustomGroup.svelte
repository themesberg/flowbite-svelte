<script lang="ts">
  import { type GroupEditorBasicProps, AlignmentButton, FontButton, FormatButton, ImageButton } from '@flowbite-svelte-plugins/texteditor';

  let { editor, showToolbar = true }: GroupEditorBasicProps = $props();
</script>

{#if editor && showToolbar}
  <AlignmentButton {editor} alignment="left" />
  <AlignmentButton {editor} alignment="right" />
  <ImageButton {editor} />
  <FontButton {editor} format="fontSize" />
  <FormatButton {editor} format="italic" />
  <FormatButton {editor} format="link" />
  <FormatButton {editor} format="removeLink" />
{/if}
