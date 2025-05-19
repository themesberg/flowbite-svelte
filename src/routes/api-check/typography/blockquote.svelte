<script lang="ts">
  import { P, A, Heading, Blockquote, Rating } from "$lib";
  import { QuoteSolid } from "flowbite-svelte-icons";
  const components = "Blockquote";
</script>

<h1 class="my-4 text-3xl">Blockquote</h1>

<h2 class="text-2xl">Default blockquote</h2>
<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <Blockquote size="xl">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote>
</div>

<h2 class="text-2xl">Solid background</h2>

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <P color="text-gray-500 dark:text-gray-400">Does your user know how to exit out of screens? Can they follow your intended user journey and buy something from the site you’ve designed? By running a usability test, you’ll be able to see how users will interact with your design once it’s live.</P>
  <Blockquote border bg class="my-4 p-4">
    <P size="xl" height="relaxed">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</P>
  </Blockquote>
  <P color="text-gray-500 dark:text-gray-400">First of all you need to understand how Flowbite works. This library is not another framework. Rather, it is a set of components based on Tailwind CSS that you can just copy-paste from the documentation.</P>
</div>

<h2 class="text-2xl">Blockquote icon</h2>

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <Blockquote size="xl">
    <QuoteSolid class="h-10 w-10 text-gray-400 dark:text-gray-600" />
    "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."
  </Blockquote>
</div>

<h2 class="text-2xl">Paragraph context</h2>

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <P class="mb-3" color="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
  <div class="grid grid-cols-1 md:grid-cols-2 md:gap-6">
    <P class="mb-3" color="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
    <Blockquote class="mb-3" size="xl">" Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application. "</Blockquote>
  </div>
  <P class="mb-3" color="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
</div>

<h2 class="text-2xl">User testimonial</h2>

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <figure class="mx-auto max-w-(--breakpoint-md) text-center">
    <QuoteSolid class="mx-auto mb-3 h-12 w-12 text-gray-400 dark:text-gray-600" />
    <Blockquote alignment="center" size="2xl">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote>
    <figcaption class="mt-6 flex items-center justify-center space-x-3 rtl:space-x-reverse">
      <img class="h-6 w-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="Micheal Gough profile" />
      <div class="flex items-center divide-x-2 divide-gray-500 rtl:divide-x-reverse dark:divide-gray-700">
        <cite class="pe-3 font-medium text-gray-900 dark:text-white">Micheal Gough</cite>
        <cite class="ps-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</cite>
      </div>
    </figcaption>
  </figure>
</div>

<h2 class="text-2xl">User Review</h2>

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <figure class="max-w-(--breakpoint-md)">
    <div class="mb-4 flex items-center text-yellow-300">
      <Rating total={5} rating={4.66} size={24} />
    </div>
    <Blockquote italic={false} size="2xl">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote>
    <figcaption class="mt-6 flex items-center space-x-3 rtl:space-x-reverse">
      <img class="h-6 w-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green profile" />
      <div class="flex items-center divide-x-2 divide-gray-300 rtl:divide-x-reverse dark:divide-gray-700">
        <cite class="pe-3 font-medium text-gray-900 dark:text-white">Bonnie Green</cite>
        <cite class="ps-3 text-sm font-light text-gray-500 dark:text-gray-400">CTO at Flowbite</cite>
      </div>
    </figcaption>
  </figure>
</div>

<h2 class="text-2xl">Alignment</h2>
<h3 class="text-xl">Left</h3>

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <Blockquote size="xl">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote>
</div>

<h3 class="text-xl">Center</h3>

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <Blockquote alignment="center" size="xl">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote>
</div>

<h3 class="text-xl">Right</h3>

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <Blockquote alignment="right" size="xl">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote>
</div>

<h2 class="text-2xl">Sizes</h2>
<h3 class="text-xl">Small</h3>
<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <Blockquote size="lg">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote>
</div>

<h3 class="text-xl">Medium</h3>

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <Blockquote size="xl">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote>
</div>

<h3 class="text-xl">Large</h3>

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <Blockquote size="2xl">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote>
</div>
