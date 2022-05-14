<script lang="ts">
  export let total: number = 0;
</script>

<a
  class="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-xs font-medium text-white ring-2 ring-gray-300 hover:bg-gray-600  dark:ring-gray-500 "
  href={$$props.href}
>
  +{total}
</a>
