<script lang="ts">
  import {
    Avatar,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Checkbox,
    Heading,
    Indicator,
    Input,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    Toolbar,
    ToolbarButton
  } from "flowbite-svelte";
  import { CogSolid, DotsVerticalOutline, DownloadSolid, EditOutline, ExclamationCircleSolid, PlusOutline, TrashBinSolid } from "flowbite-svelte-icons";
  import Users from "../../../data/users.json";
  import { DeleteModal, UserModal, mapUsersWithAvatars } from "flowbite-svelte-admin-dashboard";
  import MetaTag from "../../../utils/MetaTag.svelte";

  let openUser: boolean = $state(false); // modal control
  let openDelete: boolean = $state(false); // modal control
  let current_user: any = $state({});

  const users = mapUsersWithAvatars(Users);
  const path: string = "/crud/users";
  const description: string = "CRUD users examaple - Flowbite Svelte Admin Dashboard";
  const title: string = "Flowbite Svelte Admin Dashboard - CRUD Users";
  const subtitle: string = "CRUD Users";
</script>

<MetaTag {path} {description} {title} {subtitle} />

<main class="relative h-full w-full overflow-y-auto bg-white dark:bg-gray-800">
  <h1 class="hidden">CRUD: Users</h1>
  <div class="p-4">
    <Breadcrumb class="mb-5">
      <BreadcrumbItem home>Home</BreadcrumbItem>
      <BreadcrumbItem href="/crud/users">Users</BreadcrumbItem>
      <BreadcrumbItem>List</BreadcrumbItem>
    </Breadcrumb>
    <Heading tag="h1" class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">All users</Heading>

    <Toolbar embedded class="w-full py-4 text-gray-500  dark:text-gray-300">
      <Input placeholder="Search for users" class="me-4 w-80 border xl:w-96" />
      <div class="border-l border-gray-100 pl-2 dark:border-gray-700">
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
      </div>
      {#snippet end()}
        <div class="flex items-center space-x-2">
          <Button size="sm" class="gap-2 px-3 whitespace-nowrap" onclick={() => ((current_user = {}), (openUser = true))}>
            <PlusOutline size="sm" />Add user
          </Button>
          <Button size="sm" color="alternative" class="gap-2 px-3">
            <DownloadSolid size="md" class="-ml-1" />Export
          </Button>
        </div>
      {/snippet}
    </Toolbar>
  </div>
  <Table>
    <TableHead class="border-y border-gray-200 bg-gray-100 dark:border-gray-700">
      <TableHeadCell class="w-4 p-4"><Checkbox /></TableHeadCell>
      {#each ["Name", "Biography", "Position", "Country", "Status", "Actions"] as title}
        <TableHeadCell class="p-4 font-medium">{title}</TableHeadCell>
      {/each}
    </TableHead>
    <TableBody>
      {#each users as user}
        <TableBodyRow class="text-base">
          <TableBodyCell class="w-4 p-4"><Checkbox /></TableBodyCell>
          <TableBodyCell class="mr-12 flex items-center space-x-6 p-4 whitespace-nowrap">
            <Avatar src={user.avatar} />
            <div class="text-sm font-normal text-gray-500 dark:text-gray-300">
              <div class="text-base font-semibold text-gray-900 dark:text-white">{user.name}</div>
              <div class="text-sm font-normal text-gray-500 dark:text-gray-300">{user.email}</div>
            </div>
          </TableBodyCell>
          <TableBodyCell class="max-w-sm truncate overflow-hidden p-4 text-base font-normal text-gray-500 xl:max-w-xs dark:text-gray-300">
            {user.biography}
          </TableBodyCell>
          <TableBodyCell class="p-4">{user.position}</TableBodyCell>
          <TableBodyCell class="p-4">{user.country}</TableBodyCell>
          <TableBodyCell class="p-4 font-normal">
            <div class="flex items-center gap-2">
              <Indicator color={user.status === "Active" ? "green" : "red"} />
              {user.status}
            </div>
          </TableBodyCell>
          <TableBodyCell class="space-x-2 p-4">
            <Button size="sm" class="gap-2 px-3" onclick={() => ((current_user = user), (openUser = true))}>
              <EditOutline size="sm" /> Edit user
            </Button>
            <Button color="red" size="sm" class="gap-2 px-3" onclick={() => ((current_user = user), (openDelete = true))}>
              <TrashBinSolid size="sm" /> Delete user
            </Button>
          </TableBodyCell>
        </TableBodyRow>
      {/each}
    </TableBody>
  </Table>
</main>

<!-- Modals -->

<UserModal bind:open={openUser} data={current_user} />
<DeleteModal bind:open={openDelete} />
