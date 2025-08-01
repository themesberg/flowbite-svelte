<script>
  import { Label, Input, Helper } from "flowbite-svelte";
</script>

<Label class="mb-2 block">Your email</Label>
<Input id="email" name="email" required placeholder="name@flowbite.com" />
<Helper class="mt-2 text-sm">
  We’ll never share your details. Read our <a href="/" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Privacy Policy</a>
  .
</Helper>
