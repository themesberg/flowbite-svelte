<script>
    import { List, Li } from 'svelte-5-ui-lib';
    import { CheckOutline } from 'flowbite-svelte-icons';
</script>

<List tag="ul" class="mb-8 space-y-4 text-gray-500 dark:text-gray-400" list="none">
    <Li icon liclass="gap-3">
        <CheckOutline class="w-3.5 h-3.5 text-green-500 dark:text-green-400" />
        Individual configuration
    </Li>
    <Li icon liclass="gap-3">
        <CheckOutline class="w-3.5 h-3.5 text-green-500 dark:text-green-400" />
        No setup, or hidden fees
    </Li>
    <Li icon liclass="gap-3">
        <CheckOutline class="w-3.5 h-3.5 text-green-500 dark:text-green-400" />
        <span>Team size: <Span>1 developer</Span></span>
    </Li>
    <Li icon liclass="gap-3">
        <CheckOutline class="w-3.5 h-3.5 text-green-500 dark:text-green-400" />
        <span>Premium support: <Span>6 months</Span></span>
    </Li>
    <Li icon liclass="gap-3">
        <CheckOutline class="w-3.5 h-3.5 text-green-500 dark:text-green-400" />
        <span>Free updates: <Span>6 months</Span></span>
    </Li>
</List>