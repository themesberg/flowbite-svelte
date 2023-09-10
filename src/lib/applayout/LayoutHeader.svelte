<script lang="ts">
  import { twMerge } from "tailwind-merge";
  $: headerClass = twMerge('flex-none z-10', $$props.class);

</script>

<header id="header" {...$$restProps} class={headerClass}>
  <slot />
</header>