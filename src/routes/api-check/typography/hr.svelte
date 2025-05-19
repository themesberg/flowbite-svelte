<script>
  import { Hr, P, Blockquote } from "$lib";
  import { QuoteSolid } from "flowbite-svelte-icons";
  const components = "Hr";
</script>

<h1 class="my-4 text-3xl">Hr</h1>
<h2 class="text-2xl">Default HR</h2>

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <P>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
  <Hr class="my-8" />
  <P>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
</div>

<h2 class="text-2xl">Trimmed</h2>

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <P>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
  <Hr class="mx-auto my-4 h-1 w-48 rounded-sm md:my-10" />
  <P>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
</div>

<h2 class="text-2xl">Icon HR</h2>

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <div class="text-center">
    <P>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
    <Hr class="my-8 h-1 w-64">
      <QuoteSolid class="h-6 w-6 text-gray-700 dark:text-gray-300" />
    </Hr>
    <P>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
  </div>
</div>

<h2 class="text-2xl">HR with text</h2>
Use this example to add a text in the middle of the HR component.

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <div class="text-center">
    <P>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
    <Hr class="my-8 w-64">or</Hr>
    <P>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
  </div>
</div>

<h2 class="text-2xl">HR shape</h2>
This example can be used to separate content with a HR tag as a shape instead of a line.

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <P>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
  <Hr class="mx-auto my-8 h-8 w-8" />
  <Blockquote alignment="center">
    <p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
  </Blockquote>
</div>
