<script lang="ts">
  import { Button, Dropdown, DropdownDivider, DropdownHeader, DropdownFooter, DropdownUl, DropdownLi, uiHelpers } from "$lib";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  import { blur, fly, slide, scale } from "svelte/transition";
  import { sineIn, linear } from "svelte/easing";
  import { page } from "$app/stores";
  let activeUrl = $state($page.url.pathname);
  $effect(() => {
    activeUrl = $page.url.pathname;
  });
</script>
