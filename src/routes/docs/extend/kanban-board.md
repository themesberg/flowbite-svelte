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
  import { type KanbanCardType, type KanbanColumnType, KanbanBoard } from  'flowbite-svelte';
</script>
```
## Default Kanban Board
Pass columns array with bindable prop, handle onMove and onAddCard callbacks. Supports drag-and-drop between columns with visual feedback.

```svelte example class="flex flex-col space-y-4"
{#include Default.svelte}
```

## Custom Styling

```svelte example class="flex flex-col space-y-4"
{#include CustomStyling.svelte}
```

## Using LocalStorage

```svelte example class="flex flex-col space-y-4"
{#include LocalStorage.svelte}
```

## With API Integration (Demo Only)

**⚠️ Note:** The API endpoints in this example use simple in-memory storage for demonstration purposes. This is **not suitable for production** as it has limitations:
- Data resets on server restart
- Not safe for concurrent requests
- Doesn't scale across multiple server instances

For production, use a proper database (PostgreSQL, MongoDB, Supabase, etc.) with proper transaction handling.


```svelte example class="flex flex-col space-y-4"
{#include ApiIntegration.svelte}
```
