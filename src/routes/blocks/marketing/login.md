---
layout: componentLayout
title: Svelte Login Forms - Flowbite Svelte Blocks
breadcrumb_title: Login Forms
no_of_components: 1 free component
dir: marketing
pkg: Flowbite Svelte Blocks
description: The login page can be used to allow users to authenticate inside your application based on a collection of templates from Flowbite and coded with Tailwind CSS.
---

<script>
  import { TableProp, TableDefaultRow, CompoAttributesViewer } from '../utils'
  const components = 'Register, Section'
</script>

## Default login page

This example includes a form with an email and password input accompanied by the logo and other helper texts and links to other authentication pages.

```svelte example
<script lang="ts">
  import { Section, Register } from "flowbite-svelte-blocks";
  import { Button, Checkbox, Label, Input } from "flowbite-svelte";
</script>

<Section name="login">
  <Register href="/">
    {#snippet top()}
      <img class="mr-2 h-8 w-8" src="/images/logo.svg" alt="logo" />
      Flowbite
    {/snippet}
    <div class="space-y-4 p-6 sm:p-8 md:space-y-6">
      <form class="flex flex-col space-y-6" action="/">
        <h3 class="p-0 text-xl font-medium text-gray-900 dark:text-white">Change Password</h3>
        <Label class="space-y-2">
          <span>Your email</span>
          <Input type="email" name="email" placeholder="name@company.com" required />
        </Label>
        <Label class="space-y-2">
          <span>Your password</span>
          <Input type="password" name="password" placeholder="•••••" required />
        </Label>
        <div class="flex items-start">
          <Checkbox>Remember me</Checkbox>
          <a href="/" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Forgot password?</a>
        </div>
        <Button type="submit" class="w-full1">Sign in</Button>
        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet? <a href="/" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Sign up</a>
        </p>
      </form>
    </div>
  </Register>
</Section>
```

<CompoAttributesViewer {components}/>
