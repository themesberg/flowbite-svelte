<script>
    import { Listgroup } from 'svelte-5-ui-lib';
    let buttons = [
		{ name: 'Profile', mycustomfield: 'data1', current: true },
		{ name: 'Settings', mycustomfield: 'data2' },
		{ name: 'Messages', mycustomfield: 'data3' },
		{ name: 'Download', mycustomfield: 'data4', disabled: true, attrs: {type: 'submit'} }
	];
</script>


<Listgroup btn items={buttons} defaultclass="w-48" onclick={(e) => alert('mycustomfield: ' + e.target.attributes.mycustomfield.value)} />
