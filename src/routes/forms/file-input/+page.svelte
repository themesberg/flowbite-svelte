<script lang="ts">
  import {
    Select,
    Label,
    Fileupload,
    Helper,
    Radio,
    Listgroup,
    ListgroupItem
  } from '$lib';
  import { type ListGroupItemType } from '$lib/types';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  let files: FileList | undefined = $state();
  const sizes = ['sm', 'md', 'lg'];
  let size: Fileupload['size'] = $state('md');
</script>

<H1>File input</H1>

<H2>File upload example</H2>
<CodeWrapper>
  <Label class="mb-2 space-y-2">
    <span>Upload file</span>
    <Fileupload bind:files />
  </Label>
  <Label>File: {files}</Label>
</CodeWrapper>

<H2>Helper text</H2>
<CodeWrapper>
  <Label for="with_helper" class="pb-2">Upload file</Label>
  <Fileupload id="with_helper" class="mb-2" />
  <Helper>SVG, PNG, JPG or GIF (MAX. 800x400px).</Helper>
</CodeWrapper>

<H2>Multiple files</H2>
<CodeWrapper>
  <Label class="pb-2" for="multiple_files">Upload multiple files</Label>
  <Fileupload id="multiple_files" multiple bind:files />
</CodeWrapper>

<H2>Size</H2>
<CodeWrapper>
  <div class="h-16">
    <Fileupload id="small_size" {size} />
  </div>
  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Size:</Label>
    {#each sizes as sizeOption}
      <Radio
        labelClass="w-24 my-1"
        name="default_alert_color"
        bind:group={size}
        value={sizeOption}>{sizeOption}</Radio
      >
    {/each}
  </div>
</CodeWrapper>
