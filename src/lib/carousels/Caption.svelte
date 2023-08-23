<script lang="ts">
  export let caption: string = '';
  export let captionClass: string = '';
  export let pClass: string = 'text-gray-900 dark:text-white';
</script>

<div class={captionClass}>
  <p id="caption" class={pClass}>{caption}</p>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Component data
@prop export let caption: string = '';
@prop export let captionClass: string = '';
@prop export let pClass: string = 'text-gray-900 dark:text-white';
-->
