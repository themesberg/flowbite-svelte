<!-- Frontmatter goes here -->
<script context="module">
  export const metadata = {
    title: 'Svelte Snapshot',
    dir: 'Examples',
    description: 'Svelte Snapshot with Flowbite Svete',
    breadcrumb_title: 'Svelte Snapshot'
  }
</script>

<script lang="ts">
  import { MetaTag } from '../../utils'
  import type { Snapshot } from "../$types"; 
  import { Input, Label, A, Breadcrumb, BreadcrumbItem, Heading, P } from '$lib'
  const dir ='Examples'
  const breadcrumb_title = 'Svelte Snapshot'
  const title = 'Svelte Snapshot'

  let formData = {
      first_name:'',
      last_name: ''
    }
  export const snapshot: Snapshot = { 
    capture: () => formData, 
    restore: (value) => (formData = value)
  };
  const description = 'Svelte Snapshots with Flowbite Svelte'
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description}/>
<Breadcrumb class="pt-24 py-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

<P>Imagine a scenario where a user has filled out a form, but before submitting it, clicks on a link and then hits the back button on their browser. In such cases, the values they entered in the form will vanish into thin air. However, if it's important to retain this input, you can create a snapshot of the DOM state, which can be reinstated when the user returns to the previous page. </P>
<P>You can achieve this by using <A href="https://kit.svelte.dev/docs/snapshots">SvelteKit snapshots</A>, which enable you to preserve the state of the form input even if the user navigates away from the page and then returns or refreshes the page.</P>

<form class="p-16">
  <div class="grid gap-6 mb-6 md:grid-cols-2">
    <div>
      <Label for="first_name" class="mb-2">First name</Label>
      <Input type="text" id="first_name" placeholder="John" required bind:value={formData.first_name} />
    </div>
    <div>
      <Label for="last_name" class="mb-2">Last name</Label>
      <Input type="text" id="last_name" placeholder="Doe" required bind:value={formData.last_name} />
    </div>
</form>

