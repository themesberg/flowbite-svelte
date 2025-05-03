<script lang="ts">
  import { P, A, Layout, Popover } from "$lib";
  import { ChevronRightOutline } from "flowbite-svelte-icons";
</script>

<h1 class="my-4 text-3xl">Paragraph</h1>

<div class="example-container">
  <h2 class="my-4 text-2xl">Default paragraph</h2>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
  <P weight="light" color="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
</div>

<div class="example-container">
  <h2 class="my-4 text-2xl">Leading paragraph</h2>
  <P class="mb-3 md:text-xl" weight="light" size="lg" color="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work and deploy.</P>
  <P weight="light" color="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
</div>

<div class="example-container">
  <h2 class="my-4 text-2xl">First letter</h2>
  <P class="mb-3" color="text-gray-500 dark:text-gray-400" firstUpper>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
  <P weight="light" color="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
</div>

<div class="example-container">
  <h2 class="my-4 text-2xl">Paragraph link</h2>
  <P weight="light" color="text-gray-500 dark:text-gray-400">
    Track work across the enterprise through an open, collaborative platform. <A href="/">Link issues across Jira</A> and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.
  </P>
</div>

<div class="example-container">
  <h2 class="my-4 text-2xl">Paragraph bold</h2>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
    Track work across the enterprise through an open, collaborative platform. <strong class="font-semibold text-gray-900 dark:text-white">Link issues across Jira</strong>
    and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.
  </P>
</div>

<div class="example-container">
  <h2 class="my-4 text-2xl">Paragraph underline</h2>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
    Track work across the enterprise through an open, collaborative platform. <u class="underline">Link issues across Jira</u>
    and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.
  </P>
</div>

<div class="example-container">
  <h2 class="my-4 text-2xl">Paragraph italic</h2>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
    Track work across the enterprise through an open, collaborative platform. <em class="font-italic">Link issues across Jira</em>
    and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.
  </P>
</div>

<div class="example-container flex h-96 items-end">
  <h2 class="my-4 text-2xl">Paragraph popover</h2>
  <P weight="light" color="text-gray-500 dark:text-gray-400">
    Due to its central geographic location in Southern Europe, <A href="/" id="popover-image">Italy</A> has historically been home to myriad peoples and cultures. In addition to the various ancient peoples dispersed throughout what is now modern-day Italy, the most predominant being the Indo-European Italic peoples who gave the peninsula its name, beginning from the classical era, Phoenicians and Carthaginians founded colonies mostly in insular Italy
  </P>
  <Popover triggeredBy="#popover-image" class="w-96 text-sm font-light" defaultClass="">
    <div class="grid grid-cols-5">
      <div class="col-span-3 p-3">
        <div class="space-y-2">
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">About Italy</h3>
          <p class="text-gray-500 dark:text-gray-400">Italy is located in the middle of the Mediterranean Sea, in Southern Europe it is also considered part of Western Europe.</p>
          <A href="/">Read more <ChevronRightOutline class="ms-1.5 h-2 w-2" /></A>
        </div>
      </div>
      <img src="/images/image-1.webp" class="col-span-2 h-full rounded-e-lg" alt="Italy map" />
    </div>
  </Popover>
</div>

<div class="example-container">
  <h2 class="my-4 text-2xl">Layout</h2>

  <h2 class="my-4 text-2xl">One column</h2>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>

  <h2 class="my-4 text-2xl">Two columns even</h2>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
  <Layout class="gap-6">
    <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
    <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
  </Layout>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>

  <h2 class="my-4 text-2xl">Three columns even</h2>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
  <Layout class="grid-cols-1 gap-6 sm:grid-cols-3">
    <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
    <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
    <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
  </Layout>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>

  <h2 class="my-4 text-2xl">Two columns uneven</h2>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
  <Layout class="grid-cols-1 gap-6 sm:grid-cols-3">
    <div class="col-span-2">
      <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
      <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
    </div>
    <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
  </Layout>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
</div>

<div class="example-container">
  <h2 class="my-4 text-2xl">Text alignment</h2>

  <h2 class="my-4 text-2xl">Left</h2>
  <P align="left">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>

  <h2 class="my-4 text-2xl">Center</h2>
  <P align="center">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>

  <h2 class="my-4 text-2xl">Right</h2>
  <P align="right">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
</div>

<style>
  .example-container {
    margin-bottom: 2rem;
    padding: 1rem;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
  }
</style>
