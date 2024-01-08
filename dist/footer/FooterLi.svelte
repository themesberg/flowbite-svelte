<script>import { twMerge } from "tailwind-merge";
let { children, liClass, aClass, href, target, ...attributes } = $props();
let liCls = twMerge("me-4 last:me-0 md:me-6", liClass);
let aCls = twMerge("hover:underline", aClass);
</script>

<li class={liCls}>
  <a {...attributes} {href} class={aCls} {target}>
    {@render children()}
  </a>
</li>