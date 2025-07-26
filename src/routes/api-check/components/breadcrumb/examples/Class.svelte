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