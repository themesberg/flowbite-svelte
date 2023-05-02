<script lang="ts">
  export let outerClass: string = "w-full";
  export let innerClass: string = "grid max-w-xs grid-cols-3 gap-1 p-1 mx-auto my-2 bg-gray-100 rounded-lg dark:bg-gray-600";
</script>


<div class="{outerClass}" {...$$restProps}>
  <div class="{innerClass}" role="group">
      <slot />
  </div>
</div>