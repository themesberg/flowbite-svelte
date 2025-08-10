<script lang="ts">
  import { Breadcrumb, BreadcrumbItem, Button, Checkbox, Drawer, Heading, Input, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Toolbar, ToolbarButton } from "flowbite-svelte";
  import { CogSolid, DotsVerticalOutline, EditOutline, ExclamationCircleSolid, TrashBinSolid } from "flowbite-svelte-icons";
  import type { Component } from "svelte";
  import Products from "../../../data/product.json";
  import MetaTag from "../../../utils/MetaTag.svelte";
  import { DeleteDrawer, ProductDrawer } from "flowbite-svelte-admin-dashboard";

  // import Product from './Product.svelte';

  let hidden: boolean = $state(true); // modal control
  let DrawerComponent: Component = $state(ProductDrawer); // drawer component

  const toggle = (component: Component) => {
    DrawerComponent = component;
    hidden = !hidden;
  };

  const path: string = "/crud/products";
  const description: string = "CRUD products examaple - Flowbite Svelte Admin Dashboard";
  const title: string = "Flowbite Svelte Admin Dashboard - CRUD Products";
  const subtitle: string = "CRUD Products";
</script>

<MetaTag {path} {description} {title} {subtitle} />

<main class="relative h-full w-full overflow-y-auto bg-white dark:bg-gray-800">
  <h1 class="hidden">CRUD: Products</h1>
  <div class="p-4">
    <Breadcrumb class="mb-5">
      <BreadcrumbItem home>Home</BreadcrumbItem>
      <BreadcrumbItem href="/crud/products">E-commerce</BreadcrumbItem>
      <BreadcrumbItem>Products</BreadcrumbItem>
    </Breadcrumb>
    <Heading tag="h1" class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">All products</Heading>

    <Toolbar embedded class="w-full py-4 text-gray-500 dark:text-gray-300">
      <Input placeholder="Search for products" class="me-6 w-80 border xl:w-96" />
      <ToolbarButton color="dark" class="m-0 rounded p-1 hover:bg-gray-100 focus:ring-0 dark:hover:bg-gray-700">
        <CogSolid size="lg" />
      </ToolbarButton>
      <ToolbarButton color="dark" class="m-0 rounded p-1 hover:bg-gray-100 focus:ring-0 dark:hover:bg-gray-700">
        <TrashBinSolid size="lg" />
      </ToolbarButton>
      <ToolbarButton color="dark" class="m-0 rounded p-1 hover:bg-gray-100 focus:ring-0 dark:hover:bg-gray-700">
        <ExclamationCircleSolid size="lg" />
      </ToolbarButton>
      <ToolbarButton color="dark" class="m-0 rounded p-1 hover:bg-gray-100 focus:ring-0 dark:hover:bg-gray-700">
        <DotsVerticalOutline size="lg" />
      </ToolbarButton>
      {#snippet end()}
        <div class="space-x-2">
          <Button class="whitespace-nowrap" onclick={() => toggle(ProductDrawer)}>Add new product</Button>
        </div>
      {/snippet}
    </Toolbar>
  </div>
  <Table>
    <TableHead class="border-y border-gray-200 bg-gray-100 dark:border-gray-700">
      <TableHeadCell class="w-4 p-4"><Checkbox /></TableHeadCell>
      {#each ["Product Name", "Technology", "Description", "ID", "Price", "Discount", "Actions"] as title}
        <TableHeadCell class="ps-4 font-normal">{title}</TableHeadCell>
      {/each}
    </TableHead>
    <TableBody>
      {#each Products as product}
        <TableBodyRow class="text-base">
          <TableBodyCell class="w-4 p-4"><Checkbox /></TableBodyCell>
          <TableBodyCell class="flex items-center space-x-6 p-4 whitespace-nowrap">
            <div class="text-sm font-normal text-gray-500 dark:text-gray-300">
              <div class="text-base font-semibold text-gray-900 dark:text-white">
                {product.name}
              </div>
              <div class="text-sm font-normal text-gray-500 dark:text-gray-300">
                {product.category}
              </div>
            </div>
          </TableBodyCell>
          <TableBodyCell class="p-4">{product.technology}</TableBodyCell>
          <TableBodyCell class="max-w-sm truncate overflow-hidden p-4 text-base font-normal text-gray-500 xl:max-w-xs dark:text-gray-300">{product.description}</TableBodyCell>
          <TableBodyCell class="p-4">#{product.id}</TableBodyCell>
          <TableBodyCell class="p-4">{product.price}</TableBodyCell>
          <TableBodyCell class="p-4">{product.discount}</TableBodyCell>
          <TableBodyCell class="space-x-2">
            <Button size="sm" class="gap-2 px-3" onclick={() => toggle(ProductDrawer)}>
              <EditOutline size="sm" /> Update
            </Button>
            <Button color="red" size="sm" class="gap-2 px-3" onclick={() => toggle(DeleteDrawer as Component)}>
              <TrashBinSolid size="sm" /> Delete item
            </Button>
          </TableBodyCell>
        </TableBodyRow>
      {/each}
    </TableBody>
  </Table>
</main>

<Drawer placement="right" bind:hidden>
  <DrawerComponent bind:hidden />
</Drawer>
