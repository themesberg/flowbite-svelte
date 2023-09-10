<script lang="ts">
  import { twMerge } from "tailwind-merge";
  const sidebarRight = 'flex-none overflow-x-hidden overflow-y-auto w-auto';
  $: sidebarRightClass = twMerge(sidebarRight, $$props.class);
</script>

<aside id="sidebar-right" class={sidebarRightClass} {...$$restProps} >
  <slot />
</aside>