---
layout: componentLayout
title: Svelte Register Forms - Flowbite Svelte Blocks
breadcrumb_title: Register Forms
no_of_components: 1 free component
dir: marketing
pkg: Flowbite Svelte Blocks
description: Use a collection of register pages to let your users create an account on your website based on multiple layouts, social media authentication, and more.
---

<script>
  import { TableProp, TableDefaultRow, CompoAttributesViewer } from '../utils'
  const components = 'Register, Section'
</script>

## Default register page

This example can be used to allow users to create an account on your website using their email address and password and also a checkbox with the terms and conditions as a requirement.

```svelte example
<script lang="ts">
  import { Section, Register } from "flowbite-svelte-blocks";
  import { Button, Checkbox, Label, Input } from "flowbite-svelte";
</script>

<Section name="register">
  <Register href="/">
    {#snippet top()}
      <img class="mr-2 h-8 w-8" src="/images/logo.svg" alt="logo" />
      Flowbite
    {/snippet}
    <div class="space-y-4 p-6 sm:p-8 md:space-y-6">
      <form class="flex flex-col space-y-6" action="/">
        <h3 class="p-0 text-xl font-medium text-gray-900 dark:text-white">Create and account</h3>
        <Label class="space-y-2">
          <span>Your email</span>
          <Input type="email" name="email" placeholder="name@company.com" required />
        </Label>
        <Label class="space-y-2">
          <span>Your password</span>
          <Input type="password" name="password" placeholder="•••••" required />
        </Label>
        <Label class="space-y-2">
          <span>Confirm password</span>
          <Input type="password" name="confirm-password" placeholder="•••••" required />
        </Label>
        <div class="flex items-start">
          <Checkbox>
            I accept the <a class="text-primary-600 dark:text-primary-500 font-medium hover:underline" href="/">Terms and Conditions</a>
          </Checkbox>
        </div>
        <Button type="submit" class="w-full1">Create an account</Button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
          Already have an account? <a href="/" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Login here</a>
        </div>
      </form>
    </div>
  </Register>
</Section>
```

<CompoAttributesViewer {components}/>
