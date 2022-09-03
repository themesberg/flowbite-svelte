<script>
  import {
    Htwo,
    ExampleDiv,
    GitHubSource,
    CompoDescription,
    TableProp,
    TableDefaultRow
  } from '../../utils';
  import { P, Heading, Breadcrumb, BreadcrumbItem } from '$lib';
</script>

<Breadcrumb class="pb-8">
  <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
  <BreadcrumbItem href="/typography/">Typography</BreadcrumbItem>
  <BreadcrumbItem>Paragraphs</BreadcrumbItem>
</Breadcrumb>

<Heading class="w-full mb-2" tag="h1" customSize="text-3xl">Text</Heading>

<CompoDescription>
  Use the paragraph component to create multiple blocks of text separated by blank lines and write
  content based on multiple layouts and styles
</CompoDescription>

<ExampleDiv>
  <GitHubSource href="buttongroups/A.svelte">P</GitHubSource>
  <GitHubSource href="buttongroups/Span.svelte">Span</GitHubSource>
</ExampleDiv>

The paragraph element is one of the most commonly used HTML tags on a document page because it is
used to write longer blocks of text separated by a blank line and can massively improve the on-page
SEO of the page when used correctly. Get started with a collection of paragraph components based on
multiple styles, layouts, colors and sizes to use for your website.

<Htwo label="Default paragraph" />

Use this example of a paragraph element to use inside article content or a landing page.

<ExampleDiv>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
    Track work across the enterprise through an open, collaborative platform. Link issues across
    Jira and ingest data from other software development tools, so your IT support and operations
    teams have richer contextual information to rapidly respond to requests, incidents, and changes.
  </P>
  <P weight="light" color="text-gray-500 dark:text-gray-400">
    Deliver great service experiences fast - without the complexity of traditional ITSM
    solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
    with a complete audit trail for every change.
  </P>
</ExampleDiv>
