<script lang="ts">
  import { Listgroup, ListgroupItem, Avatar } from '$lib';
  import type { ListGroupItemType } from '$lib/types';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import H3 from '../../utils/H3.svelte';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
  let simpleList = ['Profile', 'Settings', 'Messages', 'Download'];
  let links: ListGroupItemType[] = [
    { name: 'Avatar', href: '/components/avatar' },
    { name: 'List group', href: '/components/list-group', current: true },
    { name: 'Banner', href: '/components/banner' },
    { name: 'Breadcrumbs', href: '/components/breadcrumb', target: '_blank' }
  ];
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
  import {
    AdjustmentsHorizontalSolid,
    DownloadSolid,
    MessagesSolid,
    UserCircleSolid,
    TrashBinSolid
  } from 'flowbite-svelte-icons';
  let icons = [
    { name: 'Profile', icon: UserCircleSolid, mycustomfield: 'data1' },
    {
      name: 'Settings',
      icon: AdjustmentsHorizontalSolid,
      mycustomfield: 'data2'
    },
    { name: 'Messages', icon: MessagesSolid, mycustomfield: 'data3' },
    { name: 'Download', icon: DownloadSolid, mycustomfield: 'data4' }
  ];
  const handleClick = (e?: MouseEvent) => {
    if (e?.target instanceof HTMLElement) {
      alert(
        'mycustomfield: ' +
          e.target.attributes.getNamedItem('mycustomfield')?.value
      );
    } else {
      console.warn('Unexpected event target type. Cannot access attributes.');
    }
  };
  const handleClick2 = (e?: MouseEvent) => {
    if (e?.target instanceof HTMLElement) {
      console.log(e.target.attributes.getNamedItem('mycustomfield')?.value);
    } else {
      console.warn('Unexpected event target type. Cannot access attributes.');
    }
  };
</script>

<H1>List group</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default list group</H2>

<CodeWrapper class="flex justify-center">
  <Listgroup items={simpleList} class="w-48" />
</CodeWrapper>

<HighlightCompo code={modules['./md/default-list-group.md'] as string} />

<H2>List group with links</H2>

<CodeWrapper class="flex justify-center">
  <Listgroup active items={links} class="w-48" />
</CodeWrapper>

<HighlightCompo code={modules['./md/list-group-with-links.md'] as string} />

<H2>List group with buttons</H2>
<CodeWrapper class="flex justify-center">
  <Listgroup active items={buttons} class="w-48" onclick={handleClick} />
</CodeWrapper>

<HighlightCompo code={modules['./md/list-group-with-buttons.md'] as string} />

<H2>List group with icons</H2>
<CodeWrapper class="flex justify-center">
  <Listgroup active items={icons} class="w-48" onclick={handleClick2} />
</CodeWrapper>

<HighlightCompo code={modules['./md/list-group-with-icons.md'] as string} />
