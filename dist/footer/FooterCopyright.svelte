<script>import { twMerge } from "tailwind-merge";
let { spanClass, aClass, href, by, target, copyrightMessage = "All Rights Reserved.", ...attributes } = $props();
const year = (/* @__PURE__ */ new Date()).getFullYear();
let spanCls = twMerge("block text-sm text-gray-500 sm:text-center dark:text-gray-400", spanClass);
let aCls = twMerge("hover:underline", aClass);
</script>

<span class={spanCls}>
  &copy; {year}
  {#if href}
    <a {...attributes} {href} {target} class={aCls}>
      {by}
    </a>
  {:else}
    <span class="ms-1">{by}</span>
  {/if}
  {copyrightMessage}
</span>