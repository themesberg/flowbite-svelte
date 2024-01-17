<script lang="ts">
    interface Props{
      children: any;
      class?: string | undefined;
    }
    import { twMerge } from "tailwind-merge";
    let { children, class:classname } = $props<Props>();
</script>

<div class={twMerge('max-w-4xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 rounded-md border border-gray-200 dark:border-gray-600', classname)}>
{@render children()}
</div>