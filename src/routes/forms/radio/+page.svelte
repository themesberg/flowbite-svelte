<script>
    import { Radio, Helper, RadioButton, ButtonGroup } from '$lib';
    let colors = "text-purple-500";
    let technology = 'svelte';
    let inline1 = 'second';
    import { ArrowRightOutline, ListMusicSolid, ListOrdoredSolid, ListSolid } from 'flowbite-svelte-icons';
    let radioGroup = "notes";

    import HighlightCompo from '../../utils/HighlightCompo.svelte';
	import CodeWrapper from '../../utils/CodeWrapper.svelte';
	import H1 from '../../utils/H1.svelte';
	import H2 from '../../utils/H2.svelte';
	const modules = import.meta.glob('./md/*.md', { as: 'raw', eager: true });
</script>

<H1>Radio, Helper, and RadioButton</H1>

<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md']} />

<H2>Radio examples</H2>
<CodeWrapper class="flex flex-col gap-4">
<Radio name="example">Default radio</Radio>
<Radio name="example">Checked state</Radio>
</CodeWrapper>

<HighlightCompo code={modules['./md/radio-examples.md']} />

<H2>Disabled state</H2>
<CodeWrapper class="flex flex-col gap-4">
<Radio name="disabled-state" disabled>Disabled radio</Radio>
<Radio name="disabled-state" disabled>Disabled checked</Radio>
</CodeWrapper>

<HighlightCompo code={modules['./md/disabled-state.md']} />

<H2>Radio with a link</H2>
<CodeWrapper>
<Radio name="with-link">
    I agree with the <a href="/" class="text-primary-600 dark:text-primary-500 hover:underline ms-1"> terms and conditions </a>.
</Radio>
</CodeWrapper>

<HighlightCompo code={modules['./md/radio-with-a-link.md']} />

<H2>Helper text</H2>
<CodeWrapper>
<Radio aria-describedby="helper-checkbox-text">Free shipping via Flowbite</Radio>
<Helper id="helper-checkbox-text" pclass="ps-6">For orders shipped from $25 in books or $29 in other categories</Helper>
</CodeWrapper>

<HighlightCompo code={modules['./md/helper-text.md']} />

<H2>Bordered</H2>
<CodeWrapper>
    <div class="grid grid-cols-2 gap-6">
        <div class="rounded border border-gray-200 dark:border-gray-700">
          <Radio name="bordered" labelclass="p-4">Default radio</Radio>
        </div>
        <div class="rounded border border-gray-200 dark:border-gray-700">
          <Radio name="bordered" labelclass="p-4">Checked state</Radio>
        </div>
    </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/bordered.md']} />

<H2>Radio list group</H2>
<CodeWrapper>
    <p class="mb-4 font-semibold text-gray-900 dark:text-white">
        Technology <span class="capitalize">{technology}</span>
      </p>
      <ul class="w-48 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600">
        <li><Radio labelclass="p-3" bind:group={technology} value="svelte">Svelte</Radio></li>
        <li><Radio labelclass="p-3" bind:group={technology} value="vue js">Vue JS</Radio></li>
        <li><Radio labelclass="p-3" bind:group={technology} value="react">React</Radio></li>
        <li><Radio labelclass="p-3" bind:group={technology} value="angular">Angular</Radio></li>
    </ul>
</CodeWrapper>

<HighlightCompo code={modules['./md/radio-list-group.md']} />

<H2>Horizontal list group</H2>
<CodeWrapper>
<p class="mb-4 font-semibold text-gray-900 dark:text-white">Identification</p>
<ul class="items-center w-full rounded-lg border border-gray-200 sm:flex dark:bg-gray-800 dark:border-gray-600 divide-x rtl:divide-x-reverse divide-gray-200 dark:divide-gray-600">
  <li class="w-full"><Radio name="hor-list" labelclass="p-3">Svelte</Radio></li>
  <li class="w-full"><Radio name="hor-list" labelclass="p-3">Vue JS</Radio></li>
  <li class="w-full"><Radio name="hor-list" labelclass="p-3">React</Radio></li>
  <li class="w-full"><Radio name="hor-list" labelclass="p-3">Angular</Radio></li>
</ul>
</CodeWrapper>
<HighlightCompo code={modules['./md/horizontal-list-group.md']} />

<H2>Inline layout</H2>
<CodeWrapper>
    <div class="flex gap-3">
        <Radio group={inline1} name="inline-layout" value="first">Inline 1</Radio>
        <Radio group={inline1} name="inline-layout" value="second">Inline 2 checked</Radio>
        <Radio group={inline1} name="inline-layout" value="third">Inline 3</Radio>
        <Radio group={inline1} name="inline-layout" value="fourth" disabled>Inline disabled</Radio>
    </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/inline-layout.md']} />

<H2>Colors</H2>
<CodeWrapper>
    <p class="mb-4 font-semibold {colors}">Select color</p>
<div class="flex gap-4">
  <Radio bind:group={colors} color="red" value="text-red-500">Red</Radio>
  <Radio bind:group={colors} color="green" value="text-green-500">Green</Radio>
  <Radio bind:group={colors} color="purple" value="text-purple-500">Purple</Radio>
  <Radio bind:group={colors} color="teal" value="text-teal-500">Teal</Radio>
  <Radio bind:group={colors} color="yellow" value="text-yellow-500">Yellow</Radio>
  <Radio bind:group={colors} color="orange" value="text-orange-500">Orange</Radio>
</div>
</CodeWrapper>

<HighlightCompo code={modules['./md/colors.md']} />

<H2>Advanced layout</H2>
<CodeWrapper>
<p class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Choose technology:</p>
<div class="grid gap-6 w-full md:grid-cols-2">
  <Radio name="custom" custom>
    <div class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div>
        <div class="w-full text-lg font-semibold">0-50 MB</div>
        <div class="w-full">Good for small websites</div>
      </div>
      <ArrowRightOutline class="ms-3 w-6 h-6" />
    </div>
  </Radio>
  <Radio name="custom" custom>
    <div for="hosting-big" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div class="block">
        <div class="w-full text-lg font-semibold">500-1000 MB</div>
        <div class="w-full">Good for large websites</div>
      </div>
      <ArrowRightOutline class="ms-3 w-6 h-6" />
    </div>
  </Radio>
</div>
</CodeWrapper>
<HighlightCompo code={modules['./md/advanced-layout.md']} />

<H2>Radio button</H2>
<CodeWrapper class="space-y-4">
<div>
    <RadioButton value={"notes"} bind:group={radioGroup}><ListMusicSolid /></RadioButton>
    <RadioButton value={"numbers"} bind:group={radioGroup}><ListOrdoredSolid /></RadioButton>
    <RadioButton value={"bullets"} bind:group={radioGroup}><ListSolid /></RadioButton>
</div>
  
  <ButtonGroup>
    <RadioButton value={"notes"} bind:group={radioGroup}><ListMusicSolid /></RadioButton>
    <RadioButton value={"numbers"} bind:group={radioGroup}><ListOrdoredSolid /></RadioButton>
    <RadioButton value={"bullets"} bind:group={radioGroup}><ListSolid /></RadioButton>
  </ButtonGroup>
  
  <p>List style: {radioGroup}</p>
</CodeWrapper>
<HighlightCompo code={modules['./md/radio-button.md']} />