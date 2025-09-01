---
layout: componentLayout
title: Svelte Timeline - Flowbite
breadcrumb_title: Svelte Timeline
component_title: Timeline
dir: Components
description: Get started with the responsive timeline component to show data in a chronological order with support for multiple styles, sizes, and variants
thumbnailSize: w-64
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase, LlmLink } from '../../utils'
  import { Badge } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

The timeline component can be used to show series of data in a chronological order for use cases such as activity feeds, user actions, application updates, and more.

## Setup

```svelte example hideOutput
<script lang="ts">
  import { Timeline, TimelineItem, Activity, ActivityItem, Group, GroupItem } from "flowbite-svelte";
</script>
```

## Default timeline

The default has no icon slot. If you prefer to have icons, use `order='vertical'` or `order='horizontal'`.

```svelte example
{#include Default.svelte}
```

## Vertical Timeline

Use this vertical timeline component with icons and badges to show a more advanced set of data.

```svelte example
{#include Vertical.svelte}
```

## Horizontal Timeline

Use this horizontally aligned timeline component to show a series of data in a chronological order.

```svelte example
{#include Horizontal.svelte}
```

## Activity Log

This component can be used to show the timline of a user’s activity history inside your application by using an avatar, datetime, description, and links to specific pages.

<Badge large>Warning: the ActivityItem title and text are using @html.</Badge>

```svelte example
{#include Activity.svelte}
```

## Grouped timeline

Use this component to group multiple data entries inside a single date and show elements like the avatar, title, description, tag and link to a relevant page.

<Badge large>Warning: the GroupItem title is using @html.</Badge>

```svelte example
{#include Grouped.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Timeline](https://flowbite.com/docs/components/timeline/)

## GitHub Links

<GitHubCompoLinks />

## Machine-Readable LLM Files

<LlmLink />
