# Svelte Tabs - Flowbite


The tabs component can be used either as an extra navigational hierarchy complementing the main navbar or you can also use it to change content inside a container just below the tabs using the data attributes from Flowbite.

## Setup

```svelte
<script lang="ts">
  import { Tabs, TabItem } from "flowbite-svelte";
</script>
```

## Default tabs

Use the following default tabs component example to show a dynamic content in your webpage.

<p class="my-2"></p>

If your tab title is a simple string set the `title` property on `TabItem`, otherwise when more control is needed overwrite the `title` slot.

<p class="my-2"></p>

The last tab in that example shows not only how to show a disabled tab, but how to use the `title` slot entry as well.

```svelte
<script lang="ts">
  import { Tabs, TabItem } from "flowbite-svelte";
</script>

<Tabs>
  <TabItem open title="Profile">
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Profile:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem title="Settings">
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Settings:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem title="Users">
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Users:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem title="Dashboard">
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Dashboard:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem disabled>
    {#snippet titleSlot()}
      <span class="text-gray-400 dark:text-gray-500">Disabled</span>
    {/snippet}
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Disabled:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
</Tabs>
```

## Tabs with underline

You can control the style of tabs component by settings the `activeClasses` and `inactiveClasses` on the `TabItem` elements. See the `Custom style` section below for more details.

<p class="my-2"></p>

However tabs component comes with several pre-defined styles that are accessible to you by setting the `tabStyle` property. This will set the `activeClasses` and `inactiveClasses` properties for you.

<p class="my-2"></p>

Use the `tabStyle="underline"` to achieve this alternative tabs component style with an underline instead of a background when hovering and being active on a certain page.

```svelte
<script lang="ts">
  import { Tabs, TabItem } from "flowbite-svelte";
</script>

<Tabs tabStyle="underline">
  <TabItem open title="Profile">
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Profile:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem title="Dashboard">
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Dashboard:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem title="Settings">
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Settings:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem title="Users">
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Users:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem disabled>
    {#snippet titleSlot()}
      <span class="text-gray-400 dark:text-gray-500">Disabled</span>
    {/snippet}
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Disabled:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
</Tabs>
```

## Tabs with icons

This is an example of the tabs component where you can also use a SVG powered icon to complement the text within the navigational tabs. Use icon components for a simple syntax. See <a href="/icons">Icons</a> for more details.

```svelte
<script lang="ts">
  import { Tabs, TabItem } from "flowbite-svelte";
  import { UserCircleSolid, GridSolid, AdjustmentsVerticalSolid, ClipboardSolid } from "flowbite-svelte-icons";
</script>

<Tabs tabStyle="underline">
  <TabItem open>
    {#snippet titleSlot()}
      <div class="flex items-center gap-2">
        <UserCircleSolid size="md" />
        Profile
      </div>
    {/snippet}
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Profile:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem>
    {#snippet titleSlot()}
      <div class="flex items-center gap-2">
        <GridSolid size="md" />
        Dashboard
      </div>
    {/snippet}
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Dashboard:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem>
    {#snippet titleSlot()}
      <div class="flex items-center gap-2">
        <AdjustmentsVerticalSolid size="md" />
        Settings
      </div>
    {/snippet}
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Settings:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem>
    {#snippet titleSlot()}
      <div class="flex items-center gap-2">
        <ClipboardSolid size="md" />
        Contacts
      </div>
    {/snippet}
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Contacts:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
</Tabs>
```

## Pills tabs

If you want to use pills as a style for the tabs component use `tabStyle="pill"`.

```svelte
<script lang="ts">
  import { Tabs, TabItem } from "flowbite-svelte";
</script>

<Tabs tabStyle="pill">
  <TabItem open>
    {#snippet titleSlot()}
      <span>Profile</span>
    {/snippet}
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Profile:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem>
    {#snippet titleSlot()}
      <span>Dashboard</span>
    {/snippet}
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Dashboard:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem>
    {#snippet titleSlot()}
      <span>Settings</span>
    {/snippet}
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Settings:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem>
    {#snippet titleSlot()}
      <span>Users</span>
    {/snippet}
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Users:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
</Tabs>
```

## Full width tabs

If you want to show the tabs on the full width relative to the parent element use `tabStyle="full"` prop.

```svelte
<script lang="ts">
  import { Tabs, TabItem } from "flowbite-svelte";
</script>

<Tabs tabStyle="full" class="flex divide-x divide-gray-200 rounded-lg shadow-sm rtl:divide-x-reverse dark:divide-gray-700">
  <TabItem class="w-full" open>
    {#snippet titleSlot()}
      <span>Profile</span>
    {/snippet}
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Profile:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem class="w-full">
    {#snippet titleSlot()}
      <span>Dashboard</span>
    {/snippet}
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Dashboard:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem class="w-full">
    {#snippet titleSlot()}
      <span>Settings</span>
    {/snippet}
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Settings:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem class="w-full">
    {#snippet titleSlot()}
      <span>Users</span>
    {/snippet}
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Users:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
</Tabs>
```

## Tabs with selected and key

You can control which tab is active using the selected prop on `<Tabs>` together with a key on each `<TabItem>`.

```svelte
<script lang="ts">
  import { Tabs, TabItem, Button, P } from "flowbite-svelte";

  let selectedKey = $state("settings");
</script>

<Tabs bind:selected={selectedKey}>
  <TabItem key="profile" title="Profile">
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Profile:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem key="settings" title="Settings">
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Settings:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem key="users" title="Users">
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Users:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
</Tabs>

<P class="mt-4 text-sm">
  Currently selected `key`: <strong>{selectedKey}</strong>
</P>

<!-- Programmatic tab switching -->
<div class="mt-4 space-x-2">
  <Button onclick={() => (selectedKey = "profile")}>Go to Profile</Button>
  <Button onclick={() => (selectedKey = "settings")}>Go to Settings</Button>
  <Button onclick={() => (selectedKey = "users")}>Go to Users</Button>
</div>
```

## Components in tab contents

You can add other components to the `TabItem` component. Here we are adding a timeline component in the tab 1:

```svelte
<script lang="ts">
  import { Tabs, TabItem, Timeline, TimelineItem, Button } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
</script>

<Tabs>
  <TabItem open>
    {#snippet titleSlot()}
      <span>Profile</span>
    {/snippet}
    <Timeline>
      <TimelineItem title="Application UI code in Tailwind CSS" date="February 2022">
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </p>
        <Button color="alternative">
          Learn more
          <ArrowRightOutline class="ms-2 h-5 w-5" />
        </Button>
      </TimelineItem>
      <TimelineItem title="Application UI code in Tailwind CSS" date="March 2022">
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
          All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.
        </p>
      </TimelineItem>
      <TimelineItem title="Application UI code in Tailwind CSS" date="April 2022">
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
      </TimelineItem>
    </Timeline>
  </TabItem>
  <TabItem>
    {#snippet titleSlot()}
      <span>Dashboard</span>
    {/snippet}
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Dashboard:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem>
    {#snippet titleSlot()}
      <span>Settings</span>
    {/snippet}
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Settings:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem>
    {#snippet titleSlot()}
      <span>Users</span>
    {/snippet}
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Users:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
</Tabs>
```

## Using Svelte's snapshot to preserve the input

Use the following example to preserve the input value. First fill out the form, navigate to a different page, and then use your browser’s back button. You’ll notice that your input is preserved automatically.

```svelte
<script lang="ts">
  import { Tabs, TabItem, Label, Button, Input, Textarea, A } from "flowbite-svelte";
  import type { Snapshot } from "../../../$types";
  let name = $state("");
  let email = $state("");
  let comment = $state("");
  export const snapshot: Snapshot<{ name: string; email: string; comment: string }> = {
    capture: () => ({ name, email, comment }),
    restore: (value) => {
      name = value.name;
      email = value.email;
      comment = value.comment;
    }
  };
  const handleSubmit = (e: Event): void => {
    e.preventDefault();

    alert(`Submitted:\nName: ${name}\nEmail: ${email}\nComment: ${comment}`);
  };
</script>

<A href="/">Go home</A>

<Tabs role="tablist">
  <TabItem open title="Profile">
    <form method="POST">
      <Label for="name">Name</Label>
      <Input id="name" bind:value={name} type="text" />
      <label for="email">Email</label>
      <Input id="email" bind:value={email} type="email" />
      <label for="comment">Comment</label>
      <Textarea id="comment" bind:value={comment} class="w-full" />
      <Button onclick={handleSubmit} class="mt-4">Submit</Button>
    </form>
  </TabItem>
  <TabItem title="Settings">
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Settings:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
</Tabs>
```


## Active class

Use the following example to add active class.

```svelte
<script lang="ts">
  import { Tabs, TabItem } from "flowbite-svelte";
</script>

<Tabs classes={{ active: "p-4 text-white bg-blue-500 rounded-t-lg dark:bg-blue-600 dark:text-white" }}>
  <TabItem open title="Profile">
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Profile:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem title="Settings">
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Settings:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem title="Users">
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Users:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem title="Dashboard">
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Dashboard:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem disabled>
    {#snippet titleSlot()}
      <span class="text-gray-400 dark:text-gray-500">Disabled</span>
    {/snippet}
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Disabled:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
</Tabs>
```


## Component data

### TabItem

#### Types

[TabitemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1771)

#### Props

- children
- titleSlot
- open: $bindable(false)
- title: "Tab title"
- key
- activeClass
- inactiveClass
- class: className
- classes
- disabled
- tabStyle

### Tabs

#### Types

[TabsProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1762)

#### Props

- children
- selected: $bindable()
- tabStyle: "none"
- ulClass
- contentClass
- divider: true
- class: className
- classes


## References

- [Flowbite Tabs](https://flowbite.com/docs/components/tabs/)
