<script>
  import { Breadcrumb, BreadcrumbItem, Button } from "$lib";
  import { HomeOutline, ChevronDoubleRightOutline } from "flowbite-svelte-icons";
  
  // For the class and olClass example
  let navClass = $state("");
  let olClass = $state("");
  
  const changeNavClass = () => {
    navClass = navClass === "" ? "border border-red-500 p-2" : "";
  };
  
  const changeOlClass = () => {
    olClass = olClass === "" ? "border border-blue-500 p-2" : "";
  };
</script>

<h1 class="text-3xl my-4">Breadcrumb</h1>

<h2 class="text-2xl my-4">Default Breadcrumb</h2>

<Breadcrumb aria-label="Default breadcrumb example">
  <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
  <BreadcrumbItem href="/">Projects</BreadcrumbItem>
  <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
</Breadcrumb>

<h2 class="text-2xl my-4">Solid Breadcrumb</h2>

<Breadcrumb aria-label="Solid background breadcrumb example" solid>
  <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
  <BreadcrumbItem href="/">Projects</BreadcrumbItem>
  <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
</Breadcrumb>

<h2 class="text-2xl my-4">Icons</h2>

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

<h2 class="text-2xl my-4">Class and olClass</h2>

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