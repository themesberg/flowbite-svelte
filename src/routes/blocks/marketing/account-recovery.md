---
layout: blockComponentLayout
title: Svelte Account Recovery Form - Flowbite Svelte Blocks
breadcrumb_title: Account Recovery Forms
no_of_components: 1 free component
dir: marketing
description: Get started with account recovery (aka. forgot password) pages to allow users to reset their password using an email based on multiple layouts and styles.
---

<script>
  import { TableProp, TableDefaultRow, CompoAttributesViewer } from '../utils'
  const components = 'ForgotPassword, ForgotPasswordHeader, Section'
</script>

## Default forgot password page

Use this example for users who forgot their password and send a recovery email to their address featuring the logo, email input, and submit button.

```svelte example
<script lang="ts">
  import { Section, ForgotPassword, ForgotPasswordHeader } from 'flowbite-svelte-blocks';
  import { Label, Input, Button, Checkbox } from 'flowbite-svelte';
</script>

<Section name="forgotpassword">
  <ForgotPasswordHeader src="/images/logo.svg" alt="logo" href="/">Flowbite</ForgotPasswordHeader>
  <ForgotPassword>
    <h1 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Forgot your password?</h1>
    <p class="font-light text-gray-500 dark:text-gray-400">Don't fret! Just type in your email and we will send you a code to reset your password!</p>
    <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5">
      <div>
        <Label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</Label>
        <Input type="email" name="email" id="email" placeholder="name@company.com" required />
      </div>
      <div class="flex items-start">
        <div class="flex items-center h-5">
          <Checkbox id="terms" aria-describedby="terms" required>I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="/">Terms and Conditions</a></Checkbox>
        </div>
      </div>
      <Button type="submit" color="red">Reset password</Button>
    </form>
  </ForgotPassword>
</Section>
```

<CompoAttributesViewer {components}/>
