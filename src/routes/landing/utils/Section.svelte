<script lang="ts">
  export let tinted: boolean = false;
</script>

<section class="{tinted ? 'bg-gray-50 dark:bg-gray-800' : ''} mx-auto max-w-8xl">
  <div class="mx-auto px-4 lg:px-20 py-8 {$$props.class ?? ''}">
    <slot />
  </div>
</section>
