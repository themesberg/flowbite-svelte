<script lang="ts">
  import { Label, Fileupload, fileupload, Helper, Radio, Button } from '$lib';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'forms/fileupload';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  let files: FileList | undefined = $state();
  const sizes = Object.keys(fileupload.variants.size);
  let size: Fileupload['size'] = $state('md');
  let helperState = $state(false);
  const changeHelperState = () => {
    helperState = !helperState;
  };
  let fileNames = $state(true);
  const changeBindFile = () => {
    fileNames = !fileNames;
  };
  let multiple = $state(false);
  const changeMultiple = () => {
    multiple = !multiple;
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      let fileSlot = '';
      if (size !== 'md') props.push(` size="${size}"`);
      if (multiple) props.push(' multiple');
      if (fileNames) props.push(' bind:files');
      if (fileNames) {
        fileSlot = `{#each files as file}
        <p>{file.name}</p>
      {/each}`;
      }
      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

      return `<Fileupload${propsString} />${helperState ? `\n<Helper>Helper text</Helper>` : ''}
${fileNames ? `{#each files as file}<p>{file.name}</p>{/each}` : ''}`;
    })()
  );
  // $inspect('files', files);
</script>

<H1>File input</H1>

<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Interactive Fileupload Builder</H2>
<CodeWrapper>
  <div class="h-32">
    <Fileupload id="small_size" {size} class="mb-2" {multiple} bind:files />
    {#if helperState}
      <Helper>SVG, PNG, JPG or GIF (MAX. 800x400px).</Helper>
    {/if}
    {#if fileNames && files}
      <div class="h-16 overflow-y-scroll">
        {#each files as file}
          <p>{file.name}</p>
        {/each}
      </div>
    {/if}
  </div>
  <div class="mb-4 mt-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Size:</Label>
    {#each sizes as sizeOption}
      <Radio labelClass="w-24 my-1" name="file_input_size" bind:group={size} value={sizeOption}>{sizeOption}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap gap-2">
    <Button class="w-40" onclick={changeHelperState}>{helperState ? 'Remove helper' : 'Add helper'}</Button>
    <Button class="w-40" color="emerald" onclick={changeBindFile}>{fileNames ? 'Hide file names' : 'Show file names'}</Button>
    <Button class="w-40" color="sky" onclick={changeMultiple}>{multiple ? 'Remove multiple' : 'Add multiple'}</Button>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName}/>
