---
layout: blockComponentLayout
title: Svelte Contact Form - Flowbite Svelte Blocks
breadcrumb_title: Contact Forms
no_of_components: 1 free component
dir: marketing
description: The contact section is an important part of your website where the user can reach out to your team by interacting with the form elements and submitting the data.
---

<script>
  import { TableProp, TableDefaultRow, CompoAttributesViewer } from '../utils'
  const components = 'Contact, Section'
</script>

## Default contact form

Use this example of a contact form coded with Tailwind CSS including the email, subject, and message that can be delivered by clicking on the form submission button.

```svelte example
<script lang="ts">
  import { Section, Contact } from 'flowbite-svelte-blocks';
  import { Label, Input, Textarea, Button } from 'flowbite-svelte';
</script>

<Section name="contact">
  <Contact>
    <svelte:fragment slot="h2">Contact Us</svelte:fragment>
    <svelte:fragment slot="paragraph">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</svelte:fragment>
    <form class="space-y-8">
      <div>
        <Label for="email" class="block mb-2">Your email</Label>
        <Input id="email" name="email" placeholder="name@flowbite.com" required />
      </div>
      <div>
        <Label for="subject" class="block mb-2">Subject</Label>
        <Input id="subject" name="subject" placeholder="Let us know how we can help you" required />
      </div>
      <div>
        <Textarea id="subject" name="subject" placeholder="Leave a comment..." label="Your message" />
      </div>
      <Button>Send message</Button>
    </form>
  </Contact>
</Section>
```

<CompoAttributesViewer {components}/>
