<script lang="ts">
  import { Textarea, Button } from "flowbite-svelte";

  let textareaRef = $state() as HTMLTextAreaElement;
  let textContent = $state("This is some example text that will be selected when you click the button.");
</script>

<Textarea bind:elementRef={textareaRef} bind:value={textContent} placeholder="Type something here..." class="w-full" />
<Button
  onclick={() => {
    textareaRef?.focus();
    textareaRef?.setSelectionRange(0, textareaRef.value.length);
  }}
>
  Select All Text
</Button>