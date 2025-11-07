# Svelte Breadcrumb - Flowbite


The breadcrumb component is an important part of any website or application that can be used to show the current location of a page in a hierarchical structure of pages.

Flowbite includes two styles of breadcrumb elements, one that has a transparent background and a few more that come with a background in different colors.

## Setup

```svelte
<script lang="ts">
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
</script>
```

## Default Breadcrumb

Use the following breadcrumb example to show the hierarchical structure of pages.

```svelte
<script lang="ts">
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
</script>

<Breadcrumb aria-label="Default breadcrumb example">
  <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
  <BreadcrumbItem href="/">Projects</BreadcrumbItem>
  <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
</Breadcrumb>
```

## Solid Breadcrumb

You can alternatively also use the breadcrumb components with a solid background.

```svelte
<script lang="ts">
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
</script>

<Breadcrumb aria-label="Solid background breadcrumb example" solid>
  <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
  <BreadcrumbItem href="/">Projects</BreadcrumbItem>
  <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
</Breadcrumb>
```

## Icons

Use the `icon` snippet to change icons.

```svelte
<script lang="ts">
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
  import { HomeOutline, ChevronDoubleRightOutline } from "flowbite-svelte-icons";
</script>

<Breadcrumb aria-label="Solid background breadcrumb example" class="bg-gray-50 px-5 py-3 dark:bg-gray-900">
  <BreadcrumbItem href="/" home>
    {#snippet icon()}
      <HomeOutline class="me-2 h-4 w-4" />
    {/snippet}Home
  </BreadcrumbItem>
  <BreadcrumbItem href="/">
    {#snippet icon()}
      <ChevronDoubleRightOutline class="mx-2 h-5 w-5 dark:text-white" />
    {/snippet}
    Projects
  </BreadcrumbItem>
  <BreadcrumbItem>
    {#snippet icon()}
      <ChevronDoubleRightOutline class="mx-2 h-5 w-5 dark:text-white" />
    {/snippet}
    Flowbite Svelte
  </BreadcrumbItem>
</Breadcrumb>
```

## Class and olClass

```svelte
<script lang="ts">
  import { Breadcrumb, BreadcrumbItem, Button, type BreadcrumbProps } from "flowbite-svelte";
  let navClass: BreadcrumbProps["class"] = $state("");
  const changeNavClass = () => {
    navClass = navClass === "" ? "border border-red-500 p-2" : "";
  };
  let olClass: BreadcrumbProps["olClass"] = $state("");
  const changeOlClass = () => {
    olClass = olClass === "" ? "border border-blue-500 p-2" : "";
  };
</script>

<div class="h-20">
  <Breadcrumb class={navClass} {olClass}>
    <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
    <BreadcrumbItem href="/">Projects</BreadcrumbItem>
    <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
  </Breadcrumb>
</div>
<div class="flex flex-wrap justify-center gap-2 md:justify-start">
  <Button class="w-48" onclick={changeNavClass}>{navClass ? "Remove navClass" : "Add navClass"}</Button>
  <Button class="w-48" color="green" onclick={changeOlClass}>{olClass ? "Remove olClass" : "Add olClass"}</Button>
</div>
```

## Component data

### Breadcrumb

#### Types

[BreadcrumbProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L316)

#### Props

- children
- solid: false
- class: className
- classes
- olClass
- ariaLabel: "Breadcrumb"

### BreadcrumbItem

#### Types

[BreadcrumbItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L323)

#### Props

- children
- icon
- home: false
- href
- linkClass
- spanClass
- homeClass
- class: className
- classes


## References

- [Flowbite Breadcrumb](https://flowbite.com/docs/components/breadcrumb/)
