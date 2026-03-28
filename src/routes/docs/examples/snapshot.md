---
layout: componentLayout
title: Svelte Snapshot - Flowbite
breadcrumb_title: Svelte Snapshot
component_title: Snapshot
dir: Examples
description: Svelte Snapshot with Flowbite svelte
---

<script lang="ts">
  import { Input, Label, A } from '$lib';

  let formData = {
    first_name: '',
    last_name: '',
    company: '',
    website: '',
    email: ''
  };
</script>

Imagine a scenario where a user has filled out a form, but before submitting it, clicks on a link and then hits the back button on their browser. In such cases, the values they entered in the form will vanish into thin air. However, if it's important to retain this input, you can create a snapshot of the DOM state, which can be reinstated when the user returns to the previous page.

You can achieve this by using <A href="https://kit.svelte.dev/docs/snapshots">SvelteKit snapshots</A>, which enable you to preserve the state of the form input even if the user navigates away from the page and then returns or refreshes the page.

The key requirement is that `export const snapshot` must live directly in your `+page.svelte` file — SvelteKit only picks up snapshots from the page module, not from child components.

```svelte
<script lang="ts">
  import type { Snapshot } from '@sveltejs/kit';

  let formData = $state({
    first_name: '',
    last_name: '',
    company: '',
    website: '',
    email: ''
  });

  export const snapshot: Snapshot<typeof formData> = {
    capture: () => ({ ...formData }),
    restore: (value) => Object.assign(formData, value)
  };
</script>

<form>
  <!-- bind form fields to formData -->
</form>
```

Please check [Snapshot example page](/docs/examples/snapshot-example).