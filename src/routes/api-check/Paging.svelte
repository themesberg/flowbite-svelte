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

interface Component {
  path: string;
  name: string;
  category: string;
}

// console.log("DEBUG: data =", data.posts.apicheck);

// Flatten everything from apicheck and track categories
const components: Component[] = [];

Object.entries(data.posts.apicheck).forEach(([category, posts]) => {
  (posts as Post[]).forEach(({ path }) => {
    const raw = path.replace("/", "").replace(/-/g, " ");
    const name = raw.replace(/\b\w/g, (c) => c.toUpperCase());
    components.push({ path, name, category });
  });
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
  const { path, name, category } = components[i];
  
  // Build the correct path using the component's category
  const pathSegments = page.url.pathname.split("/").filter(Boolean);
  pathSegments.pop(); // Remove current component (e.g., "video")
  pathSegments.pop(); // Remove current category (e.g., "components")
  pathSegments.push(category); // Add new category (e.g., "forms")
  pathSegments.push(path.slice(1)); // Add new component (e.g., "checkbox")
  const href = "/" + pathSegments.join("/");
  
  console.log("DEBUG: sibling href =", href, "for component", name, "in category", category);
  
  return { href, name };
}
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