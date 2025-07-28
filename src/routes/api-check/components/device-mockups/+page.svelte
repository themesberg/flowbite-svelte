<script lang="ts">
	import HighlightCompo from '../../../utils/api-check/HighlightCompo.svelte';
	import CodeWrapper from '../../../utils/api-check/CodeWrapper.svelte';
	import H1 from '../../../utils/api-check/H1.svelte';
	import H2 from '../../../utils/api-check/H2.svelte';

	import * as ExampleComponents from './examples/';
	const exampleModules = import.meta.glob('./examples/*.svelte', {
		query: '?raw',
		import: 'default',
		eager: true
	}) as Record<string, string>;
</script>

<H1>Device Mockups</H1>
<H2>Default</H2>
<CodeWrapper>
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Default.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>iPhone 12 mockup (iOS)</H2>
<CodeWrapper>
  <ExampleComponents.Iphone />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Iphone.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Google Pixel mockup (Android) </H2>
<CodeWrapper>
  <ExampleComponents.Pixel />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Pixel.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Tablet mockup</H2>
<CodeWrapper>
  <ExampleComponents.Tablet />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Tablet.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Laptop mockup</H2>
<CodeWrapper>
  <ExampleComponents.Laptop />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Laptop.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Desktop mockup</H2>
<CodeWrapper>
  <ExampleComponents.Desktop />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Desktop.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Smartwatch mockup</H2>
<CodeWrapper>
  <ExampleComponents.Smartwatch />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Smartwatch.svelte'] as string} />
	{/snippet}
</CodeWrapper>