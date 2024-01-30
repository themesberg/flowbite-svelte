<script>
    import { Listgroup } from 'svelte-5-ui-lib';
	import { AdjustmentsHorizontalSolid, DownloadSolid, MessagesSolid, UserCircleSolid } from 'flowbite-svelte-icons';
	let icons = [
		{ name: 'Profile', icon: UserCircleSolid },
		{ name: 'Settings', icon: AdjustmentsHorizontalSolid },
		{ name: 'Messages', icon: MessagesSolid },
		{ name: 'Download', icon: DownloadSolid }
	];
</script>

<Listgroup btn items={icons} defaultclass="w-48" onclick={(e)=> console.log(e.target.attributes.name.value)} />
