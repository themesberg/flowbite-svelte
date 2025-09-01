---
layout: componentLayout
title: Svelte PhoneInput - Flowbite
breadcrumb_title: Svelte Phone Input
component_title: Phone Input
dir: Forms
description: Use the phone number input component to set a phone number inside a form field and use a dropdown menu to select the country code based on various styles, sizes and colors
---

<script lang="ts">
  import { TableProp, TableDefaultRow,  CompoAttributesViewer, GitHubCompoLinks, Seealso, LlmLink } from '../../utils'
  import { A } from '$lib'

  const components = 'PhoneInput'
  const relatedLinks = ['/docs/forms/input-field','/docs/forms/floating-label', '/docs/extend/tags' ]
</script>

The phone number input component can be used to set a phone number inside a form field by using the native type="tel" attribute and also use a dropdown menu to select the country code.

The examples are built with the utility classes from Tailwind CSS and they are fully responsive, dark mode compatible and support RTL layouts and can be used for any type of web project.

## Setup

```svelte example hideOutput
<script lang="ts">
  import { PhoneInput, Label, Helper } from "flowbite-svelte";
</script>
```

## Default phone input

Use this component to set a phone number inside an input field.

```svelte example
{#include Default.svelte}
```

## Phone input country code

This example can be used to select the country code from a dropdown menu and set the phone number inside an input field.

```svelte example class="h-64"
{#include CountryCode.svelte}
```

## Floating label input

Set a phone number inside an input field with a floating label inspired by Material UI from Google.

```svelte example
{#include Floating.svelte}
```

## Verification code input

Use this example to send a verification code to the user’s phone number for authentication.

```svelte example class="h-64"
{#include Verification.svelte}
```

## Phone number select

Use this example to select one of your saved phone numbers from an application with a copy-paste feature.

```svelte example
{#include Select.svelte}
```

## Authentication form

Use this example to authenticate users with a login form using a phone number instead of an email address.

```svelte example
{#include Authentication.svelte}
```

## Advanced phone verification

Use this example to verify a phone number via SMS or phone call using a dropdown component.

```svelte example class="h-64"
{#include Advanced.svelte}
```

## Classes

The PhoneInput component provides customizable styling through six distinct class slots: `defaultDiv` for the icon container positioning, `phonesvg` for the phone icon styling, `defaultInput` for the standard input field appearance, `floatingSpan` for floating label positioning, `floatingInput` for the floating variant input styling, and `labelFloating` for animated label transitions. Each class can be overridden using the classes prop to customize the component's appearance.

```svelte example hideScript
{#include Classes.svelte}
```

## See also

<Seealso links={relatedLinks} />

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>

## References

- [Flowbite Phone Input](https://flowbite.com/docs/forms/phone-input/)

## GitHub Links

<GitHubCompoLinks {components}/>

## Machine-Readable LLM Files

<LlmLink />
