# Svelte Horizontal Line (HR) - Flowbite


The `Hr` component can be used to separate content using a horizontal line by adding space between elements based on multiple styles, variants, and layouts.

## Setup

```html
<script>
  import { Hr } from "flowbite-svelte";
</script>
```

## Default HR

```svelte
<script>
  import { Hr, P } from "flowbite-svelte";
</script>

<P>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
<Hr class="my-8" />
<P>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
```

## Trimmed

Use this example to show a shorter version of the horizontal line.

```svelte
<script>
  import { Hr, P } from "flowbite-svelte";
</script>

<P>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
<Hr class="mx-auto my-4 h-1 w-48 rounded-sm md:my-10" />
<P>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
```

## Icon HR

This example can be used to set a custom SVG icon in the middle of the HR element.

```svelte
<script>
  import { Hr, P } from "flowbite-svelte";
  import { QuoteSolid } from "flowbite-svelte-icons";
</script>

<div class="text-center">
  <P>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
  <Hr class="my-8 h-1 w-64">
    <QuoteSolid class="h-6 w-6 text-gray-700 dark:text-gray-300" />
  </Hr>
  <P>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
</div>
```

## HR with text

Use this example to add a text in the middle of the HR component.

```svelte
<script>
  import { Hr, P } from "flowbite-svelte";
</script>

<div class="text-center">
  <P>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
  <Hr class="my-8 w-64">or</Hr>
  <P>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
</div>
```

## HR shape

This example can be used to separate content with a HR tag as a shape instead of a line.

```svelte
<script>
  import { Hr, P, Blockquote } from "flowbite-svelte";
</script>

<P>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
<Hr class="mx-auto my-8 h-8 w-8" />
<Blockquote alignment="center">
  <p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
</Blockquote>
```

## Component data

### Hr

#### Types

[HrProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1894)

#### Props

- children
- divClass
- innerDivClass
- class: className
- classes


## References

<GitHubCompoLinks {components}/>
