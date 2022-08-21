---
layout: modalLayout
---

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
  import { Popover, Avatar, Breadcrumb, BreadcrumbItem, Button } from '$lib'
  import { QuestionMarkCircle, ChevronRight } from 'svelte-heros';
  import { Home } from 'svelte-heros';
  
  import componentProps from '../props/Popover.json'

  let props = componentProps.props
  let propHeader = ['Name', 'Type', 'Default']
  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  let click = false;
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Popover</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Popover</h1>

<CompoDescription>Use the popover component to show detailed information inside a pop-up box relative to the element that is being clicked or hovered based on multiple styles</CompoDescription>

<ExampleDiv>
<GitHubSource href="popover/Popover.svelte">Popover</GitHubSource>
</ExampleDiv>

Get started with the popover component to show any type of content inside a pop-up box when hovering or clicking over a trigger element. There are multiple examples that you can choose from, such as showing more information about a user profile, company profile, password strength, and more.

Make sure that you have the Flowbite JavaScript included in your project to enable the popover interactivity by following the quickstart guide.

<Htwo label="Setup" />

```html
<script>
  import { Popover } from 'flowbite-svelte'
</script>
```

<Htwo label="Default popover" />

<ExampleDiv  class="flex h-44 items-end justify-center">
  <Popover class="w-64 text-sm font-light " title="Popover title">
    <Button slot="trigger">Default popover</Button>
      And here's some amazing content. It's very engaging. Right?
  </Popover>
</ExampleDiv>

```html
<Popover class="w-64 text-sm font-light " title="Popover title">
  <Button slot="trigger">Default popover</Button>
    And here's some amazing content. It's very engaging. Right?
</Popover>
```

<Htwo label="User profile" />

Use this example to show more information about a user profile when hovering over the trigger component.

<ExampleDiv class="flex h-72 items-end justify-center">
  <Popover class="w-64 text-sm font-light text-gray-500 bg-white dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
    <div class="p-3">
        <div class="flex justify-between items-center mb-2">
            <Avatar href="/" src="/images/profile-picture-1.webp" alt="Jese Leos" />
            <Button size="xs">Follow</Button>
        </div>
        <div class="text-base font-semibold leading-none text-gray-900 dark:text-white">
            <a href="/">Jese Leos</a>
        </div>
        <div class="mb-3 text-sm font-normal">
            <a href="/" class="hover:underline">@jeseleos</a>
        </div>
        <div class="mb-4 text-sm font-light">Open-source contributor. Building <a href="/" class="text-blue-600 dark:text-blue-500 hover:underline">flowbite.com</a>.</div>
        <ul class="flex text-sm font-light">
            <li class="mr-2">
                <a href="/" class="hover:underline">
                    <span class="font-semibold text-gray-900 dark:text-white">799</span>
                    <span>Following</span>
                </a>
            </li>
            <li>
                <a href="/" class="hover:underline">
                    <span class="font-semibold text-gray-900 dark:text-white">3,758</span>
                    <span>Followers</span>
                </a>
            </li>
        </ul>
    </div>
    <Button slot="trigger">User profile</Button>
  </Popover>
</ExampleDiv>

<Htwo label="Description popover" />

Show helpful information inside a popover when hovering over a question mark button.

<ExampleDiv>
  <div class="flex items-center text-sm font-light text-gray-500 dark:text-gray-400">This is just some informational text
    <Popover class="w-72 text-sm font-light text-gray-500 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400" placement="bottom-start">
      <div slot="trigger"><QuestionMarkCircle class="ml-1 w-4 h-4" variation="solid"/><span class="sr-only">Show information</span></div>
      <div class="p-3 space-y-2">
          <h3 class="font-semibold text-gray-900 dark:text-white">Activity growth - Incremental</h3>
          Report helps navigate cumulative growth of community activities. Ideally, the chart should have a growing trend, as stagnating chart signifies a significant decrease of community activity.
          <h3 class="font-semibold text-gray-900 dark:text-white">Calculation</h3>
          For each date bucket, the all-time volume of activities is calculated. This means that activities in period n contain all activities up to period n, plus the activities generated by your community in period.
          <a href="/" class="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700">Read more <ChevronRight size="12" /></a>
      </div>
    </Popover>
  </div>
</ExampleDiv>

<Htwo label="Placement" />

Set the position of the popover component relative to the trigger element by using the `placement={top|right|bottom|left}` data attribute and its values.

<ExampleDiv class="flex gap-4">
  <Popover placement="top" class="w-64 text-sm font-light " title="Popover top">
    <Button slot="trigger">Top popover</Button>
      And here's some amazing content. It's very engaging. Right?
  </Popover>
  <Popover placement="right" class="w-64 text-sm font-light " title="Popover right">
    <Button slot="trigger">Right popover</Button>
      And here's some amazing content. It's very engaging. Right?
  </Popover>
  <Popover placement="bottom" class="w-64 text-sm font-light " title="Popover bottom">
    <Button slot="trigger">Bottom popover</Button>
      And here's some amazing content. It's very engaging. Right?
  </Popover>
  <Popover placement="left" class="w-64 text-sm font-light " title="Popover left">
    <Button slot="trigger">Left popover</Button>
      And here's some amazing content. It's very engaging. Right?
  </Popover>
</ExampleDiv>

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types page</a> for type information.</p>

<h3 class='text-xl w-full dark:text-white py-4'>Modal</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={props} rowState='hover' />
</TableProp>
