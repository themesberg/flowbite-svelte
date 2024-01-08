<script>import { twMerge } from "tailwind-merge";
let { children, footerType = "default", footerClass, ...attributes } = $props();
let footerCls = twMerge(footerType === "sitemap" && "bg-gray-800", footerType === "socialmedia" && "p-4 bg-white sm:p-6 dark:bg-gray-800", footerType === "logo" && "p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800", footerType === "default" && "p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800", footerClass);
</script>

<footer {...attributes} class={footerCls}>
  {@render children()}
</footer>