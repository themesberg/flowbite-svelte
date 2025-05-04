<script>
  import { A, Badge, Span, Mark, Heading, Secondary, Breadcrumb, BreadcrumbItem, P, Button } from "$lib";

  import { ArrowRightOutline, ChevronRightOutline } from "flowbite-svelte-icons";
  const components = "Heading, P, A, Mark, Secondary";
</script>

<h1 class="my-4 text-3xl">Heading</h1>
<h2 class="text-2xl">Default heading</h2>

<div class="border rounded p-4 my-4">
  <div class="text-center">
    <Heading tag="h1" class="mb-4 text-4xl font-extrabold  md:text-5xl lg:text-6xl">We invest in the world’s potential</Heading>
    <P class="mb-6 text-lg sm:px-16 lg:text-xl xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</P>
    <Button href="/">
      Learn more
      <ArrowRightOutline class="ms-2 h-6 w-6" />
    </Button>
  </div>
</div>

<h2 class="text-2xl">Second-level heading</h2>
Use this example of a second-level H2 heading as the main subtitle for each section of your web page.

<div class="border rounded p-4 my-4">
  <Heading tag="h2" class="text-4xl font-extrabold ">Payments tool for companies</Heading>
  <P class="my-4 text-gray-500">Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.</P>
  <P class="mb-4">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.</P>
  <A>
    Read more
    <ChevronRightOutline class="ms-2 h-3.5 w-3.5" />
  </A>
</div>

<h2 class="text-2xl">Highlighted heading</h2>

<div class="border rounded p-4 my-4">
  <Heading tag="h1" class="mb-4">Get back to growth with <Span highlight="blue">the world's #1</Span> CRM.</Heading>
  <P>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</P>
</div>

<h2 class="text-2xl">Heading mark</h2>
This example can be used to mark one part of the heading text with a solid background for highlighting.

<div class="border rounded p-4 my-4">
  <Heading tag="h1" class="mb-4">Regain <Mark>control</Mark> over your days</Heading>
  <P>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</P>
</div>

<h2 class="text-2xl">Heading gradient</h2>
Use this example to highlight a portion of the heading text by using a gradient style.

<div class="border rounded p-4 my-4">
  <Heading tag="h1" class="mb-4 text-3xl font-extrabold  md:text-5xl lg:text-6xl">
    <Span gradient="tealToLime">Better Data</Span> Scalable AI.
  </Heading>
  <P>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</P>
</div>

<h2 class="text-2xl">Heading underline</h2>

<div class="border rounded p-4 my-4">
  <Heading tag="h1" class="mb-4">
    We invest in the <Span underline class="decoration-blue-400 decoration-8 dark:decoration-blue-600">world’s potential</Span>
  </Heading>
  <P>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</P>
</div>

<h2 class="text-2xl">Breadcrumb context</h2>
Get started with this example to position a breadcrumb component above the heading component.

<div class="border rounded p-4 my-4">
  <Breadcrumb class="mb-4">
    <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
    <BreadcrumbItem href="/">Settings</BreadcrumbItem>
    <BreadcrumbItem>Team</BreadcrumbItem>
  </Breadcrumb>
  <Heading tag="h2" class="mb-4">Team management</Heading>
</div>

<h2 class="text-2xl">Badge context</h2>
Use this example to show a badge component inside the heading text element as a secondary indicator.

<div class="border rounded p-4 my-4">
  <Heading tag="h1" class="flex items-center text-5xl">
    Flowbite <Badge class="ms-2 text-2xl font-semibold">PRO</Badge>
  </Heading>
</div>

<h2 class="text-2xl">Secondary text</h2>
This example can be used to add a secondary text inside the main heading component.

<div class="border rounded p-4 my-4">
  <Heading tag="h1" class="text-5xl font-extrabold">
    Flowbite <Secondary class="ms-2">This is secondary text</Secondary>
  </Heading>
</div>

<h2 class="text-2xl">Sizes</h2>
<h3 class="text-xl">Heading one (H1)</h3>

<div class="border rounded p-4 my-4">
  <Heading tag="h1">Heading 1</Heading>
</div>

<h3 class="text-xl">Heading two (H2)</h3>
The `tag="h2"` can be used as subtitles of the page’s sections.

<div class="border rounded p-4 my-4">
  <Heading tag="h2">Heading 2</Heading>
</div>

<h3 class="text-xl">Heading three (H3)</h3>
The `tag="h3"` can be used as subtitles of the page’s sections.

<div class="border rounded p-4 my-4">
  <Heading tag="h3">Heading 3</Heading>
</div>

<h3 class="text-xl">Heading four (H4)</h3>
The `tag="h4"` can be used as subtitles of the page’s sections.

<div class="border rounded p-4 my-4">
  <Heading tag="h4">Heading 4</Heading>
</div>

<h3 class="text-xl">Heading five (H5)</h3>
The `tag="h5"` can be used as subtitles of the page’s sections.

<div class="border rounded p-4 my-4">
  <Heading tag="h5">Heading 5</Heading>
</div>

<h3 class="text-xl">Heading six (H6)</h3>
The `tag="h6"` can be used as subtitles of the page’s sections.

<div class="border rounded p-4 my-4">
  <Heading tag="h6">Heading 6</Heading>
</div>
