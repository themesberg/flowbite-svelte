<script>
  import { Toast } from "flowbite-svelte";
</script>

<Toast classes={{ content: "w-full text-sm font-normal flex items-center justify-between" }}>
  Conversation archived.
  <a class="text-primary-600 hover:bg-primary-100 dark:text-primary-500 ms-auto rounded-lg p-1.5 font-medium dark:hover:bg-gray-700" href="/">Undo</a>
</Toast>
