<script lang="ts">
  export let tinted: boolean = false;
</script>

<section class={tinted ? 'bg-gray-50 dark:bg-gray-800' : ''}>
  <div class="mx-auto max-w-8xl px-4 lg:px-20 py-8 {$$props.class ?? ''}">
    <slot />
  </div>
</section>
