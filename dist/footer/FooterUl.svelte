<script>import { twMerge } from "tailwind-merge";
let { ulClass, children, ...attributes } = $props();
</script>

<ul {...attributes} class={twMerge('text-gray-600 dark:text-gray-400', ulClass)}>
  {@render children()}
</ul>