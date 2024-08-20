<script lang="ts">
  import { Label, label, Radio } from '$lib';

  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const colors = Object.keys(label.variants.color);
  let defaultColor: Label['color'] = $state('gray');
</script>

<H1>Label</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Color</H2>
<CodeWrapper>
  <Label class="text-lg font-bold" color={defaultColor}>{defaultColor.charAt(0).toUpperCase() + defaultColor.slice(1)}</Label>
  <div class="flex flex-wrap space-x-4">
    <Label class="m-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 my-1" name="default_alert_color" bind:group={defaultColor} color={colorOption as Label['color']} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/color.md'] as string} />
