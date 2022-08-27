<script>
	import { Htwo, ExampleDiv, CompoDescription, TableProp, TableDefaultRow } from '../utils';
	import 'prism-themes/themes/prism-holi-theme.css';
	import { Datepicker, Breadcrumb, BreadcrumbItem, Alert } from '$lib';
	import { Home } from 'svelte-heros';

	import componentProps from '../props/Datepicker.json';
	let items = componentProps.props;

	let propHeader = ['Name', 'Type', 'Default'];
	let divClass = 'w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4';
	let theadClass = 'text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white';
</script>

<Breadcrumb>
	<BreadcrumbItem href="/" home>Home</BreadcrumbItem>
	<BreadcrumbItem>Datepicker</BreadcrumbItem>
</Breadcrumb>

<div class="p-8">
	<Alert color="red">
		<span class="font-medium"
			>⚠️ Datepicker component is experimental and only works with SvelteKit.
		</span></Alert
	>
</div>

<h1 class="text-3xl w-full dark:text-white pb-4">Datepicker</h1>

<CompoDescription
	>Start receiving date and time data from your users using this free datepicker element based on
	Tailwind utility-classes and vanilla JavaScript</CompoDescription
>

<Htwo label="Setup" />

<pre class="language-html"><code class="language-html">
&lt;script&gt;
 import &#123;Datepicker&#125; from 'flowbite-svelte';
&lt;/script&gt;

</code></pre>

<h3 class="dark:text-white">Use rel="external"</h3>

<p class="dark:text-white">
	This component is importing Flowbite datepicker javascript in the svelte:head section. When you
	are linking to a page using this component, use rel="external".
</p>

<pre class="language-html"><code class="language-html">
&lt;a href="/datepicker" rel="external"&gt;Datepicker page&lt:/a&gt;
	
</code></pre>

<Htwo label="Datepicker example" />

<p class="dark:text-white">
	Use the following example of an input element to create a datepicker component. All you need to do
	is to add the datepicker data attribute to any input element.
</p>

<ExampleDiv>
	<Datepicker />
</ExampleDiv>

<pre class="language-html"><code class="language-html">
&lt;Datepicker /&gt;

</code></pre>

<Htwo label="Name and other attributes" />

<p class="dark:text-white">
	The component has $$...restProps attributes that can be used to pass any other attribute.
</p>

<ExampleDiv>
	<Datepicker name="start" />
</ExampleDiv>

<pre class="language-html"><code class="language-html">
&lt;Datepicker name="start" /&gt;
	
	</code></pre>

<Htwo label="Date range picker" />

<p class="dark:text-white">
	Use the <code>range</code> prop and the following markup to initialize two datepickers as a range.
</p>

<p class="dark:text-white">
	The range picker has input name of <code>start</code> and <code>end</code>.
</p>

<ExampleDiv>
	<Datepicker range />
</ExampleDiv>

<pre class="language-html"><code class="language-html">
&lt;Datepicker range /&gt;

</code></pre>

<Htwo label="Action buttons" />

<p class="dark:text-white">
	By adding the <code>datepickerButtons</code> prop you will enable the today and clear buttons with
	the following features:
</p>

<ul class="dark:text-white">
	<li>Clicking on the today button will browse back to the current day/month/year</li>
	<li>Clicking on the clear button will reset all selections</li>
</ul>

<ExampleDiv>
	<Datepicker datepickerButtons />
</ExampleDiv>

<pre class="language-html"><code class="language-html">
&lt;Datepicker datepickerButtons /&gt;

</code></pre>

<Htwo label="Date format" />

<p class="dark:text-white">
	If you want to use a custom format such as mm/dd/yyyythen you can use the
	<code>datepickerFormat="format"</code> prop to change it.
</p>

<ExampleDiv>
	<Datepicker datepickerFormat="dd/mm/yyyy" />
</ExampleDiv>

<pre class="language-html"><code class="language-html">
&lt;Datepicker datepickerFormat="dd/mm/yyyy" /&gt;

</code></pre>

<Htwo label="Orientation" />

<p class="dark:text-white">
	You can override the default positioning algorithm by using the
	<code>datepickerOrientation="top | right | bottom | left"</code>
	prop. You can even combine right with bottom or left with top.
</p>

<ExampleDiv>
	<Datepicker datepickerOrientation="bottom right" />
</ExampleDiv>

<pre class="language-html"><code class="language-html">
&lt;Datepicker datepickerOrientation="bottom right" /&gt;

</code></pre>

<Htwo label="Title" />

<p class="dark:text-white">
	You can also add a title to the datepicker by using the <code>datepicker-title="title"</code> prop.
</p>

<ExampleDiv>
	<Datepicker datepickerTitle="My Vacation" />
</ExampleDiv>

<pre class="language-html"><code class="language-html">
&lt;Datepicker datepickerTitle="My Vacation" /&gt;

</code></pre>

<Htwo label="Props" />

<p class="dark:text-white">
	The component has the following props, type, and default values. See
	<a href="/pages/types">types page</a>
	for type information.
</p>

<TableProp header={propHeader} {divClass} {theadClass}>
	<TableDefaultRow {items} rowState="hover" />
</TableProp>
