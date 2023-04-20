---
layout: componentLayout
title: Svelte Snapshot - Flowbite
breadcrumb_title: Svelte Snapshot
component_title: Snapshot
dir: Examples
description: Svelte Snapshot with Flowbite Svete
---

<script>
  import { Input, Label, A } from '$lib';

  let formData = {
    first_name: '',
    last_name: '',
    company: '',
    website: '',
    email: ''
  };
  export const snapshot = {
    capture: () => formData,
    restore: (value) => (formData = value)
  };
</script>

Imagine a scenario where a user has filled out a form, but before submitting it, clicks on a link and
then hits the back button on their browser. In such cases, the values they entered in the form will
vanish into thin air. However, if it's important to retain this input, you can create a snapshot of the
DOM state, which can be reinstated when the user returns to the previous page.

You can achieve this by using <A href="https://kit.svelte.dev/docs/snapshots">SvelteKit snapshots</A>,
which enable you to preserve the state of the form input even if the user navigates away from the page
and then returns or refreshes the page.

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
    <div>
        <Label for="company" class="mb-2">Company</Label>
        <Input type="text" id="company" placeholder="Flowbite" required bind:value={formData.company} />
    </div>
    <div>
        <Label for="website" class="mb-2">Website URL</Label>
        <Input type="url" id="website" placeholder="flowbite.com" bind:value={formData.website} />
    </div>
    </div>
    <div class="mb-6">
    <Label for="email" class="mb-2">Email address</Label>
    <Input
        type="email"
        id="email"
        placeholder="john.doe@company.com"
        required
        bind:value={formData.email} />
    </div>
</form>
