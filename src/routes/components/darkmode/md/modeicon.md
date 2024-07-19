<script>
    import {Darkmode} from 'svelte-5-ui-lib'
    import { ThumbsUpSolid, ThumbsDownSolid } from 'flowbite-svelte-icons';
</script>

<Darkmode btnclass="text-lg">
    {#snippet lightIcon()}
    <ThumbsUpSolid color="red" />
    {/snippet}
    {#snippet darkIcon()}
    <ThumbsDownSolid color="green" />
    {/snippet}
</Darkmode>