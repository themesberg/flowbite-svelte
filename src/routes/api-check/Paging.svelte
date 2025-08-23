<script lang="ts">
import { page } from "$app/state";
import { PaginationItem } from "$lib";
import ArrowLeft from "../utils/icons/ArrowLeft.svelte";
import ArrowRight from "../utils/icons/ArrowRight.svelte";

let { children = undefined } = $props();

const { data, url, params } = page;

interface Post {
  path: string;
}

// Flatten everything from apicheck
const components = (Object.values(data.posts.apicheck) as Post[][])
  .flat()
  .map(({ path }) => {
    const raw = path.replace("/", "").replace(/-/g, " ");
    const name = raw.replace(/\b\w/g, (c) => c.toUpperCase());
    return { path, name };
  });

// Make these values reactive with a state that updates when URL changes
let currentComponent = $state();
let index = $state(-1);

// Initialize and watch for URL changes
$effect(() => {
  const newComponent = page.url.pathname.split("/").filter(Boolean).pop();
  console.log("DEBUG: $effect triggered, url =", page.url.pathname, "component =", newComponent);
  
  if (newComponent !== currentComponent) {
    currentComponent = newComponent;
    index = currentComponent ? components.findIndex((x) => x.path.slice(1) === currentComponent) : -1;
    console.log("DEBUG: URL changed, new component =", currentComponent, "new index =", index);
  }
});

function sibling(next: boolean) {
  const i = next ? index + 1 : index - 1;
  const { path, name } = components[i];
  
  // For /api-check/components/avatar, we want /api-check/components/alert (for example)
  // So we need to replace just the last segment
  const pathSegments = page.url.pathname.split("/").filter(Boolean);
  pathSegments.pop(); // Remove current component (e.g., "avatar")
  pathSegments.push(path.slice(1)); // Add new component (e.g., "alert")
  const href = "/" + pathSegments.join("/");
  
  console.log("DEBUG: sibling href =", href, "for component", name);
  
  return { href, name };
}

// Debug logging
// console.log("DEBUG: url.pathname =", page.url.pathname);
// console.log("DEBUG: currentComponent =", currentComponent);
// console.log("DEBUG: index =", index);
// console.log("DEBUG: components length =", components.length);
// if (index >= 0) {
//   console.log("DEBUG: current component in list =", components[index]);
// }
</script>

<div class="flex flex-col items-start gap-4 py-4">
  {#if index >= 0}
    <div class="flex flex-row justify-between gap-2.5 self-stretch">
      {#if index > 0}
        {@const { name, href } = sibling(false)}
        <PaginationItem
          {href}
          class="hover:text-primary-700 dark:hover:text-primary-700 flex items-center gap-2.5"
          onclick={(e) => {
            console.log("DEBUG: clicked previous link, href =", href);
            console.log("DEBUG: current URL before navigation =", window.location.href);
          }}
        >
          <ArrowLeft />
          {name}
        </PaginationItem>
      {:else}
        <div></div>
      {/if}

      <div class="hidden sm:block">
        {@render children?.()}
      </div>

      {#if index < components.length - 1}
        {@const { name, href } = sibling(true)}
        <PaginationItem
          {href}
          class="hover:text-primary-700 dark:hover:text-primary-700 flex items-center gap-2.5"
          onclick={(e) => {
            console.log("DEBUG: clicked next link, href =", href);
            console.log("DEBUG: current URL before navigation =", window.location.href);
          }}
        >
          {name}
          <ArrowRight />
        </PaginationItem>
      {:else}
        <div></div>
      {/if}
    </div>
  {:else}
    <!-- Debug info when no index found -->
    <pre class="text-xs text-red-600">No match: component={currentComponent}</pre>
  {/if}

  <div class="sm:hidden">
    {@render children?.()}
  </div>
</div>