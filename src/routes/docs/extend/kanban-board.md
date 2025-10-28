---
layout: componentLayout
title: Svelte Kanban Board
breadcrumb_title: Kanban Board
component_title: Kanban Board
dir: Extend
description: A fully responsive, drag-and-drop Kanban board component built with Svelte 5 and Tailwind CSS v4. Features vertical stacking on mobile, grid layout on larger screens, customizable column colors, card tags, and accessible ARIA labels. Styles are centralized using tailwind-variants for easy theming and maintainability.

---

<script lang="ts">
  import { TableProp, TableDefaultRow, CompoAttributesViewer, Seealso, GitHubCompoLinks, LlmLink } from '../../utils'
  import { P, A } from '$lib'

  const components = 'KanbanBoard'
  // const relatedLinks = [''];
</script>

## Setup

```svelte example hideOutput
<script lang="ts">
  import { KanbanBoard } from "flowbite-svelte";
</script>
```
## Default Kanban Board
Pass columns array with bindable prop, handle onMove and onAddCard callbacks. Supports drag-and-drop between columns with visual feedback.

```svelte example class="flex flex-col space-y-4"
{#include Default.svelte}
```