<script>
    let {children} = $props();
    
</script>

<ul
    class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 bg-transparent p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900"
>

{@render children()}

</ul>