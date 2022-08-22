---
layout: typographyLayout
---

<script>
	import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow } from '../../utils'
	import { Hr, Heading, P, A, QuoteLeft, Blockquote, Breadcrumb, BreadcrumbItem } from '$lib';
	import { Home, ArrowRight, ChevronRight } from 'svelte-heros';
	
	import componentProps1 from '../../props/Hr.json'
  let items1 = componentProps1.props
	let propHeader = ['Name', 'Type', 'Default']
  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  let icon = QuoteLeft
</script>

<Breadcrumb class="pb-8">
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem href="/typography/">Typography</BreadcrumbItem>
	<BreadcrumbItem>Horizontal Line (HR)</BreadcrumbItem>
</Breadcrumb>

<Heading class="w-full mb-2" tag="h1" customSize="text-3xl">Horizontal Line (HR)</Heading>

<CompoDescription>Create a horizontal line using the `Hr` component to separate content such as paragraphs, blockquotes, and other elements</CompoDescription>

<ExampleDiv>
  <GitHubSource href="typography/Hr.svelte">Hr</GitHubSource>
</ExampleDiv>

The `Hr` component can be used to separate content using a horizontal line by adding space between elements based on multiple styles, variants, and layouts.

<Heading tag="h2" class='htwo mb-4 mt-8' customSize="text-2xl font-semibold">Setup</Heading>

```html
<script>
  import { Hr } from 'flowbite-svelte'
</script>
```

<Heading tag="h2" class='htwo mb-4 mt-8' customSize="text-2xl font-semibold">Default HR</Heading>

<ExampleDiv>
<P>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
<Hr class="my-8" height="h-px" />
<P>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
</ExampleDiv>

```html
<P>Track work across the enterprise through ...</P>
<Hr class="my-8" height="h-px" />
<P>Deliver great service experiences fast ...</P>
```

<Heading tag="h2" class='htwo mb-4 mt-8' customSize="text-2xl font-semibold">Trimmed</Heading>

Use this example to show a shorter version of the horizontal line.

<ExampleDiv>
<P>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
<Hr class="my-4 mx-auto md:my-10" width="w-48" height="h-1"/>
<P>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
</ExampleDiv>

```html
<P>Track work across the enterprise through ...</P>
<Hr class="my-4 mx-auto md:my-10" width="w-48" height="h-1"/>
<P>Deliver great service experiences fast ...</P>
```

<Heading tag="h2" class='htwo mb-4 mt-8' customSize="text-2xl font-semibold">Icon HR</Heading>

This example can be used to set a custom SVG icon in the middle of the HR element.

<ExampleDiv>
<div class="text-center">
<P>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
<Hr {icon} class="my-4 mx-auto md:my-10" width="w-48" height="h-1"/>
<P>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
</div>
</ExampleDiv>

```html
<div class="text-center">
<P>Track work across the enterprise through ...</P>
<Hr {icon} class="my-4 mx-auto md:my-10" width="w-48" height="h-1"/>
<P>Deliver great service experiences fast ...</P>
</div>
```

<Heading tag="h2" class='htwo mb-4 mt-8' customSize="text-2xl font-semibold">HR with text</Heading>

Use this example to add a text in the middle of the HR component.

<ExampleDiv>
<div class="text-center">
<P>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
<Hr text="or" class="my-8" width="w-64" height="h-px"/>
<P>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
</div>
</ExampleDiv>

```html
<div class="text-center">
<P>Track work across the enterprise through ...</P>
<Hr text="or" class="my-8" width="w-64" height="h-px"/>
<P>Deliver great service experiences fast ...</P>
</div>
```

<Heading tag="h2" class='htwo mb-4 mt-8' customSize="text-2xl font-semibold">HR shape</Heading>

This example can be used to separate content with a HR tag as a shape instead of a line.

<ExampleDiv>
<P>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
<Hr class="my-8 mx-auto" width="w-8" height="h-8"/>
<Blockquote alignment="center"><p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p></Blockquote>
</ExampleDiv>

```html
<P>Track work across the enterprise through ...</P>
<Hr class="my-8 mx-auto" width="w-8" height="h-8"/>
<Blockquote alignment="center"><p>"Flowbite is just awesome ..."</p></Blockquote>
```

<Heading tag="h2" class='htwo mb-4 mt-8' customSize="text-2xl font-semibold">
Props</Heading>

The component has the following props, type, and default values. See <A href="/pages/types">types page</A> for type information.

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items1} rowState='hover' />
</TableProp>
