<script lang="ts">
	import HighlightCompo from '../../../utils/api-check/HighlightCompo.svelte';
	import CodeWrapper from '../../../utils/api-check/CodeWrapper.svelte';
	import H1 from '../../../utils/api-check/H1.svelte';
	import H2 from '../../../utils/api-check/H2.svelte';
	import * as ExampleComponents from './examples';
	const exampleModules = import.meta.glob('./examples/*.svelte', {
		query: '?raw',
		import: 'default',
		eager: true
	}) as Record<string, string>;

</script>

<H1>Alert</H1>
<H2>Default Alert</H2>
<CodeWrapper innerClass="space-y-4">
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Default.svelte'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Alert with Icon</H2>
<CodeWrapper innerClass="space-y-4">
  <ExampleComponents.Icon />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Icon.svelte'] as string} />
  {/snippet} 
</CodeWrapper>

<H2>Bordered alerts</H2>
<CodeWrapper innerClass="space-y-4">
  <ExampleComponents.Bordered />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Bordered.svelte'] as string} />
  {/snippet}
</CodeWrapper>


<H2>Alert with list</H2>
<CodeWrapper innerClass="space-y-4">
	<ExampleComponents.AlertWithList />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/AlertWithList.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Dismissable Alert</H2>
<CodeWrapper innerClass="space-y-4">
  <ExampleComponents.Dismissable />
  {#snippet codeblock()}
    <HighlightCompo
      codeLang="ts"
      code={exampleModules['./examples/Dismissable.svelte'] as string}
    />
  {/snippet}
</CodeWrapper>

<H2>Border Accent</H2>
<CodeWrapper innerClass="space-y-4">
  <ExampleComponents.BorderAccent />
  {#snippet codeblock()}
    <HighlightCompo
      codeLang="ts"
      code={exampleModules['./examples/BorderAccent.svelte'] as string}
    />
  {/snippet}
</CodeWrapper>

<H2>Additional content</H2>
<CodeWrapper innerClass="space-y-4">
	<ExampleComponents.AdditionalContent />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/AdditionalContent.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Custom color</H2>
<CodeWrapper>
	<ExampleComponents.CustomColor />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/CustomColor.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Event</H2>
<CodeWrapper>
	<ExampleComponents.Event />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Event.svelte'] as string} />
	{/snippet}
</CodeWrapper>
