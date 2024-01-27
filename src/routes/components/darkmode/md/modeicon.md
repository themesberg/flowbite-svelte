<script>
    import {Darkmode} from 'svelte-5-ui-lib'
    import { ThumbsUpSolid, ThumbsDownSolid } from 'flowbite-svelte-icons';
</script>


<Darkmode class="text-lg">
    <ThumbsUpSolid slot="lightIcon" color="red" />
    <ThumbsDownSolid slot="darkIcon" color="green" />
</Darkmode>