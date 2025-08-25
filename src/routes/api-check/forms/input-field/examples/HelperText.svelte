<script lang="ts">
  import { Input, Label, Helper } from "flowbite-svelte";
</script>

<Label class="flex flex-col gap-2">
  <span>Your email</span>
  <Input id="email" name="email" required placeholder="name@flowbite.com" />
  <Helper class="text-sm">
    We’ll never share your details. Read our <a href="/" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Privacy Policy</a>
    .
  </Helper>
</Label>
