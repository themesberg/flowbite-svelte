<script>
    import { Spinner, Button } from '$lib'
    import HighlightCompo from '../components/HighlightCompo.svelte';
    import CodeWrapper from '../components/CodeWrapper.svelte';
    const modules = import.meta.glob('./md/*.md', { as: 'raw', eager: true })
</script>

<h1>Spinner</h1>

<h2>Setup</h2>

<HighlightCompo code={modules['./md/setup.md']} />

<h2>Default spinner</h2>

<CodeWrapper>
<Spinner />
</CodeWrapper>

<HighlightCompo code={modules['./md/defaultspinner.md']} />

<h2>Colors</h2>

<CodeWrapper>
<Spinner />
<Spinner color="gray" />
<Spinner color="green" />
<Spinner color="red" />
<Spinner color="yellow" />
<Spinner color="pink" />
<Spinner color="purple" />
</CodeWrapper>

<HighlightCompo code={modules['./md/colors.md']} />

<h2>Sizes</h2>

<CodeWrapper>
<Spinner size={4} />
<Spinner size="6" />
<Spinner size={8} />
</CodeWrapper>

<HighlightCompo code={modules['./md/sizes.md']} />

<h2>Alignment</h2>

<CodeWrapper>
<div class="text-left"><Spinner /></div>
<div class="text-center"><Spinner /></div>
<div class="text-right"><Spinner /></div>
</CodeWrapper>

<HighlightCompo code={modules['./md/alignment.md']} />

<h2>Button</h2>

<CodeWrapper>
<div class="flex flex-wrap items-center gap-2">
    <Button>
      <Spinner class="me-3" size="4" color="white" />
      Loading ...
    </Button>
    <Button outline color="dark">
      <Spinner class="me-3" size="4" />
      Loading ...
    </Button>
</div>
</CodeWrapper>

<HighlightCompo code={modules['./md/button,md']} />