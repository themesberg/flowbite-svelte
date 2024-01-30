<script>
    import { Listgroup } from 'svelte-5-ui-lib';
    let simpleList = ['Profile', 'Settings', 'Messages', 'Download'];
</script>

<Listgroup items={simpleList} defaultclass="w-48" />