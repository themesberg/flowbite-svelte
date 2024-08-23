<script>
  import { Listgroup } from 'svelte-5-ui-lib';
  import { AdjustmentsHorizontalSolid, DownloadSolid, MessagesSolid, UserCircleSolid } from 'flowbite-svelte-icons';
  let iconList = [
    { name: 'Profile', Icon: UserCircleSolid, mycustomfield: 'data1' },
    { name: 'Settings', Icon: AdjustmentsHorizontalSolid, mycustomfield: 'data2' },
    { name: 'Messages', Icon: MessagesSolid, mycustomfield: 'data3' },
    { name: 'Download', Icon: DownloadSolid, mycustomfield: 'data4' }
  ];
  const handleClick2 = (e?: MouseEvent) =>{
    if (e?.target instanceof HTMLElement) {
      console.log(e.target.attributes.getNamedItem('mycustomfield')?.value);
    } else {
      console.warn('Unexpected event target type. Cannot access attributes.');
      }
  }
</script>

  <Listgroup btn items={iconList} defaultclass="w-48" onclick={handleClick2} />
