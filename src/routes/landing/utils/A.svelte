<script lang="ts">
  export let href: string;
</script>

<a {href} class="underline text-lg font-medium hover:no-underline text-gray-900 dark:text-white"><slot /></a>
