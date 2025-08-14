---
layout: componentLayout
title: Svelte Reset Password Forms - Flowbite Svelte Blocks
breadcrumb_title: Reset Password Forms
no_of_components: 1 free component
dir: marketing
pkg: Flowbite Svelte Blocks
description: Use a collection of reset password forms based on multiple layouts to let your users change their password after going through the account recovery email.
---

<script>
  import { TableProp, TableDefaultRow, CompoAttributesViewer } from '../utils'
  const components = 'Register, Section'
</script>

## Default reset password page

Use this example with an email input and two password input fields to let the user change their password after receiving the account recovery email.

```svelte example
<script lang="ts">
  import { Section, Register } from "flowbite-svelte-blocks";
  import { Button, Checkbox, Label, Input } from "flowbite-svelte";
</script>

<Section name="reset">
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
        <Label class="space-y-2">
          <span>Confirm password</span>
          <Input type="password" name="confirm-password" placeholder="•••••" required />
        </Label>
        <div class="flex items-start">
          <Checkbox>
            I accept the <a class="text-primary-600 dark:text-primary-500 font-medium hover:underline" href="/">Terms and Conditions</a>
          </Checkbox>
        </div>
        <Button type="submit" class="w-full1">Reset passwod</Button>
      </form>
    </div>
  </Register>
</Section>
```

<CompoAttributesViewer {components}/>
