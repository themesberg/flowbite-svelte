<script>
  import { Listgroup } from 'svelte-5-ui-lib';
  import { AdjustmentsHorizontalSolid, DownloadSolid, MessagesSolid, UserCircleSolid } from 'flowbite-svelte-icons';
  let icons = [
    { name: 'Profile', icon: UserCircleSolid },
    { name: 'Settings', icon: AdjustmentsHorizontalSolid },
    { name: 'Messages', icon: MessagesSolid },
    { name: 'Download', icon: DownloadSolid }
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
