<script lang="ts">
  import { Listgroup } from '$lib';
  let buttons = [
    { name: 'Profile', mycustomfield: 'data1', current: true },
    { name: 'Settings', mycustomfield: 'data2' },
    { name: 'Messages', mycustomfield: 'data3' },
    {
      name: 'Download',
      mycustomfield: 'data4',
      disabled: true,
      attrs: { type: 'submit' }
    }
  ];

  const handleClick = (e?: MouseEvent) => {
    if (e?.target instanceof HTMLElement) {
      alert('mycustomfield: ' + e.target.attributes.getNamedItem('mycustomfield')?.value);
    } else {
      console.warn('Unexpected event target type. Cannot access attributes.');
    }
  };
</script>

<div class="flex justify-center">
  <Listgroup active items={buttons} class="w-48" onclick={handleClick} />
</div>