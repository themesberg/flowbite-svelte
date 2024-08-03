<script>
    import { List, Li } from 'svelte-5-ui-lib';
    import { CheckOutline } from 'flowbite-svelte-icons';
</script>

<List
tag="disc"
class="mb-8 space-y-4 text-gray-500 dark:text-gray-400"
>
<Li icon class="gap-3">
    <CheckOutline class="h-5 w-5 text-green-500 dark:text-green-400" />
    Individual configuration
</Li>
<Li icon class="gap-3">
    <CheckOutline class="h-5 w-5 text-green-500 dark:text-green-400" />
    No setup, or hidden fees
</Li>
<Li icon class="gap-3">
    <CheckOutline class="h-5 w-5 text-green-500 dark:text-green-400" />
    <span>Team size: <Span>1 developer</Span></span>
</Li>
<Li icon class="gap-3">
    <CheckOutline class="h-5 w-5 text-green-500 dark:text-green-400" />
    <span>Premium support: <Span>6 months</Span></span>
</Li>
<Li icon class="gap-3">
    <CheckOutline class="h-5 w-5 text-green-500 dark:text-green-400" />
    <span>Free updates: <Span>6 months</Span></span>
</Li>
</List>