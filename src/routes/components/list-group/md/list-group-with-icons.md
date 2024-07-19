<script>
  import { Listgroup } from 'svelte-5-ui-lib';
  import { AdjustmentsHorizontalSolid, DownloadSolid, MessagesSolid, UserCircleSolid } from 'flowbite-svelte-icons';
  let icons = [
    { name: 'Profile', icon: UserCircleSolid, mycustomfield: 'data1' },
    { name: 'Settings', icon: AdjustmentsHorizontalSolid, mycustomfield: 'data2' },
    { name: 'Messages', icon: MessagesSolid, mycustomfield: 'data3' },
    { name: 'Download', icon: DownloadSolid, mycustomfield: 'data4' }
  ];
  const handleClick2 = (e?: MouseEvent) =>{
    if (e?.target instanceof HTMLElement) {
      console.log(e.target.attributes.getNamedItem('mycustomfield')?.value);
    } else {
      console.warn('Unexpected event target type. Cannot access attributes.');
      }
  }
</script>

  <Listgroup
    btn
    items={icons}
    defaultclass="w-48"
    onclick={handleClick2}
  />
