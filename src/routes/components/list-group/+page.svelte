<script lang="ts">
  import { Listgroup } from '$lib';
  import { AdjustmentsHorizontalSolid, DownloadSolid, MessagesSolid, UserCircleSolid } from 'flowbite-svelte-icons';
  import type { ListGroupItemType } from '$lib/types';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'list-group';
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

  let iconList = [
    { name: 'Profile', Icon: UserCircleSolid, mycustomfield: 'data1' },
    {
      name: 'Settings',
      Icon: AdjustmentsHorizontalSolid,
      mycustomfield: 'data2'
    },
    { name: 'Messages', Icon: MessagesSolid, mycustomfield: 'data3' },
    { name: 'Download', Icon: DownloadSolid, mycustomfield: 'data4' }
  ];
  const handleClick = (e?: MouseEvent) => {
    if (e?.target instanceof HTMLElement) {
      alert('mycustomfield: ' + e.target.attributes.getNamedItem('mycustomfield')?.value);
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

<CodeWrapper innerClass="flex justify-center">
  <Listgroup items={simpleList} class="w-48" />
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/default-list-group.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>List group with links</H2>

<CodeWrapper innerClass="flex justify-center">
  <Listgroup active items={links} class="w-48" />
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/list-group-with-links.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>List group with buttons</H2>
<CodeWrapper innerClass="flex justify-center">
  <Listgroup active items={buttons} class="w-48" onclick={handleClick} />
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/list-group-with-buttons.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>List group with icons</H2>
<CodeWrapper innerClass="flex justify-center">
  <Listgroup active items={iconList} class="w-48" onclick={handleClick2} />
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/list-group-with-icons.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
