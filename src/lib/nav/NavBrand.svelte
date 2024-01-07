<script>
    let { siteName, closeNav } = $props()
</script>

<a href="/" onclick={closeNav} class="flex items-center space-x-3 rtl:space-x-reverse">
    <span
        class="self-center whitespace-nowrap text-2xl font-semibold text-primary-900 sm:text-3xl dark:text-white"
         >{siteName}</span
    >
</a>