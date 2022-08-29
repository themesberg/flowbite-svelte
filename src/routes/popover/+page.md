---
layout: modalLayout
---

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'

  import { Popover, Avatar, Breadcrumb, BreadcrumbItem, Button, Input, Label, Checkbox } from '$lib'
  import  ChevronRight  from "$lib/utils/ChevronRight.svelte";
  import componentProps from '../props/Popover.json'

  let props = componentProps.props
  let propHeader = ['Name', 'Type', 'Default']
  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
  let click = false;
  let placement;
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
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
  <Button  id="b1">Default popover</Button>
  <Popover class="w-64 text-sm font-light " title="Popover title" triggeredBy="#b1">
      And here's some amazing content. It's very engaging. Right?
  </Popover>
</ExampleDiv>

```html
  <Button  id="b1">Default popover</Button>
  <Popover class="w-64 text-sm font-light " title="Popover title" triggeredBy="#b1">
      And here's some amazing content. It's very engaging. Right?
  </Popover>
```

<Htwo label="User profile" />

Use this example to show more information about a user profile when hovering over the trigger component.

<ExampleDiv class="flex h-72 items-end justify-center">
  <Button  id="b2">User profile</Button>
  <Popover triggeredBy="#b2" class="w-64 text-sm font-light text-gray-500 bg-white dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
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
  </Popover>
</ExampleDiv>

```html
<Button  id="b2">User profile</Button>
<Popover triggeredBy="#b2" class="w-64 text-sm font-light text-gray-500 bg-white dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
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
</Popover>
```

<Htwo label="Description popover" />

Show helpful information inside a popover when hovering over a question mark button.

<ExampleDiv>
  <div class="flex items-center text-sm font-light text-gray-500 dark:text-gray-400">This is just some informational text
    <button id="b3">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 ml-1"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" /></svg>
    <span class="sr-only">Show information</span></button>
  </div>
  <Popover triggeredBy="#b3" class="w-72 text-sm font-light text-gray-500 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400" placement="bottom-start">
    <div class="p-3 space-y-2">
        <h3 class="font-semibold text-gray-900 dark:text-white">Activity growth - Incremental</h3>
        Report helps navigate cumulative growth of community activities. Ideally, the chart should have a growing trend, as stagnating chart signifies a significant decrease of community activity.
        <h3 class="font-semibold text-gray-900 dark:text-white">Calculation</h3>
        For each date bucket, the all-time volume of activities is calculated. This means that activities in period n contain all activities up to period n, plus the activities generated by your community in period.
        <a href="/" class="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700">Read more <ChevronRight size="12" /></a>
    </div>
  </Popover>
</ExampleDiv>

```svelte
<div class="flex items-center text-sm font-light text-gray-500 dark:text-gray-400">This is just some informational text
  <button id="b3">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 ml-1"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" /></svg>
    <span class="sr-only">Show information</span></button>
</div>
<Popover triggeredBy="#b3" class="w-72 text-sm font-light text-gray-500 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400" placement="bottom-start">
  <div class="p-3 space-y-2">
      <h3 class="font-semibold text-gray-900 dark:text-white">Activity growth - Incremental</h3>
      Report helps navigate cumulative growth of community activities. Ideally, the chart should have a growing trend, as stagnating chart signifies a significant decrease of community activity.
      <h3 class="font-semibold text-gray-900 dark:text-white">Calculation</h3>
      For each date bucket, the all-time volume of activities is calculated. This means that activities in period n contain all activities up to period n, plus the activities generated by your community in period.
      <a href="/" class="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700">Read more <ChevronRight size="12" /></a>
  </div>
</Popover>
```

<Htwo label="Progress popover" />

Show a progress bar with details inside a popover when hovering over a settings button.

<ExampleDiv>
<Button id="progress"><svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"></path><path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"></path><path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"></path></svg> Storage status</Button>
<Popover triggeredBy="#progress" class="text-sm w-64 font-light">
  <div class="space-y-2">
    <h3 class="font-semibold text-gray-900 dark:text-white">Available storage</h3>
    <p class="text-gray-500 dark:text-gray-400">This server has <span class="font-semibold text-gray-900 dark:text-white">30</span> of <span class="font-semibold text-gray-900 dark:text-white">150 GB</span> of block storage remaining.</p>
    <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div class="bg-red-600 h-2.5 rounded-full" style="width: 85%"></div>
    </div>
    <a href="/" class="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700">
      Upgrade now <ChevronRight size="12" variation="solid"/>
    </a>
  </div>
</Popover>
</ExampleDiv>

```html
<Button id="progress"><svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"></path><path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"></path><path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"></path></svg> Storage status</Button>
<Popover triggeredBy="#progress" class="text-sm w-64 font-light">
  <div class="space-y-2">
    <h3 class="font-semibold text-gray-900 dark:text-white">Available storage</h3>
    <p class="text-gray-500 dark:text-gray-400">This server has <span class="font-semibold text-gray-900 dark:text-white">30</span> of <span class="font-semibold text-gray-900 dark:text-white">150 GB</span> of block storage remaining.</p>
    <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div class="bg-red-600 h-2.5 rounded-full" style="width: 85%"></div>
    </div>
    <a href="/" class="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700">
      Upgrade now <ChevronRight size="12" variation="solid"/>
    </a>
  </div>
</Popover>
```

<Htwo label="Password strength" />

Dynamically show the password strength progress when creating a new password positioned relative to the input element.

<ExampleDiv>
<form on:submit|preventDefault>
  <div class="mb-6">
    <Label for="email" class="mb-2">Your email</Label>
    <Input type="email" id="email" placeholder="name@flowbite.com" required="" />
  </div>
  <div class="mb-6">
    <Label for="password" class="mb-2">Your password</Label>
    <Input type="password" id="password" required="" />
  </div>
  <Checkbox class="mb-6">Remember me</Checkbox>
  <Button type="submit">Submit</Button>
</form>
<Popover class="text-sm" triggeredBy="#password" placement="bottom">
  <h3 class="font-semibold text-gray-900 dark:text-white">Must have at least 6 characters</h3>
  <div class="grid grid-cols-4 gap-2">
      <div class="h-1 bg-orange-300 dark:bg-orange-400"></div>
      <div class="h-1 bg-orange-300 dark:bg-orange-400"></div>
      <div class="h-1 bg-gray-200 dark:bg-gray-600"></div>
      <div class="h-1 bg-gray-200 dark:bg-gray-600"></div>
  </div>
  <p class="py-2">It’s better to have:</p>
  <ul>
      <li class="flex items-center mb-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-2 w-4 h-4 text-green-400 dark:text-green-500"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
Upper &amp; lower case letters 
      </li>
      <li class="flex items-center mb-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-2 w-4 h-4 text-gray-300 dark:text-gray-400"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          A symbol (#$&amp;) 
      </li>
      <li class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-2 w-4 h-4 text-gray-300 dark:text-gray-400"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>A longer password (min. 12 chars.)
      </li>
  </ul>
</Popover>
</ExampleDiv>

```html
<form on:submit|preventDefault>
  <div class="mb-6">
    <Label for="email" class="mb-2">Your email</Label>
    <Input type="email" id="email" placeholder="name@flowbite.com" required="" />
  </div>
  <div class="mb-6">
    <Label for="password" class="mb-2">Your password</Label>
    <Input type="password" id="password" required="" />
  </div>
  <Checkbox class="mb-6">Remember me</Checkbox>
  <Button type="submit">Submit</Button>
</form>
<Popover class="text-sm" triggeredBy="#password" placement="bottom">
  <h3 class="font-semibold text-gray-900 dark:text-white">Must have at least 6 characters</h3>
  <div class="grid grid-cols-4 gap-2">
      <div class="h-1 bg-orange-300 dark:bg-orange-400"></div>
      <div class="h-1 bg-orange-300 dark:bg-orange-400"></div>
      <div class="h-1 bg-gray-200 dark:bg-gray-600"></div>
      <div class="h-1 bg-gray-200 dark:bg-gray-600"></div>
  </div>
  <p class="py-2">It’s better to have:</p>
  <ul>
      <li class="flex items-center mb-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-2 w-4 h-4 text-green-400 dark:text-green-500"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Upper &amp; lower case letters 
      </li>
      <li class="flex items-center mb-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-2 w-4 h-4 text-gray-300 dark:text-gray-400"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>A symbol (#$&amp;) 
      </li>
      <li class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-2 w-4 h-4 text-gray-300 dark:text-gray-400"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>A longer password (min. 12 chars.)
      </li>
  </ul>
</Popover>
```

<Htwo label="Placement" />

Set the position of the popover component relative to the trigger element by using the `placement={top|right|bottom|left}` data attribute and its values.

<ExampleDiv class="flex gap-4">
  <Button id="placement-left" on:mouseenter={()=> placement="left"}>Left popover</Button>
  <Button id="placement-top" on:mouseenter={()=> placement="top"}>Top popover</Button>
  <Button id="placement-bottom" on:mouseenter={()=> placement="bottom"}>Bottom popover</Button>
  <Button id="placement-right" on:mouseenter={()=> placement="right"}>Right popover</Button>
  <Popover triggeredBy="[id^='placement-']" {placement} class="w-64 text-sm font-light " title="Popover left">
      And here's some amazing content. It's very engaging. Right?
  </Popover>
</ExampleDiv>

```svelte
<Button id="placement-left" on:mouseenter={()=> placement="left"}>Left popover</Button>
<Button id="placement-top" on:mouseenter={()=> placement="top"}>Top popover</Button>
<Button id="placement-bottom" on:mouseenter={()=> placement="bottom"}>Bottom popover</Button>
<Button id="placement-right" on:mouseenter={()=> placement="right"}>Right popover</Button>
<Popover triggeredBy="[id^='placement-']" {placement} class="w-64 text-sm font-light " title="Popover left">
    And here's some amazing content. It's very engaging. Right?
</Popover>
```

<Htwo label="Triggering" />

<ExampleDiv>
  <Button id='hover'>Hover popover</Button>
  <Button id='click'>Click popover</Button>
  <Popover class="w-64 text-sm font-light " title="Popover title" triggeredBy="#hover" trigger="hover">
    And here's some amazing content. It's very engaging. Right?
  </Popover>
  <Popover class="w-64 text-sm font-light " title="Popover title" triggeredBy="#click" trigger="click">
    And here's some amazing content. It's very engaging. Right?
  </Popover>
</ExampleDiv>

```html
<Button id='hover'>Hover popover</Button>
<Button id='click'>Click popover</Button>
<Popover class="w-64 text-sm font-light " title="Popover title" triggeredBy="#hover" trigger="hover">
  And here's some amazing content. It's very engaging. Right?
</Popover>
<Popover class="w-64 text-sm font-light " title="Popover title" triggeredBy="#click" trigger="click">
  And here's some amazing content. It's very engaging. Right?
</Popover>
```

<Htwo label="Offset" />

Increase or decrease the default offset by adding the `offset` attribute where the value is an integer.

<ExampleDiv  class="flex h-52 items-end justify-center">
  <Button  id="offset">Default popover</Button>
  <Popover offset="30" class="w-64 text-sm font-light" title="Popover title" triggeredBy="#offset">
      And here's some amazing content. It's very engaging. Right?
  </Popover>
</ExampleDiv>

```html
<Button  id="offset">Default popover</Button>
<Popover offset="30" class="w-64 text-sm font-light" title="Popover title" triggeredBy="#offset">
    And here's some amazing content. It's very engaging. Right?
</Popover>
```

<Htwo label="Disable arrow" />

You can also disable the popover arrow by setting `arrow` attribute to `false`.

<ExampleDiv  class="flex h-44 items-end justify-center">
  <Button  id="arrow">Default popover</Button>
  <Popover arrow={false} class="w-64 text-sm font-light" title="Popover title" triggeredBy="#arrow">
      And here's some amazing content. It's very engaging. Right?
  </Popover>
</ExampleDiv>

```html
<Button  id="arrow">Default popover</Button>
<Popover arrow={false} class="w-64 text-sm font-light" title="Popover title" triggeredBy="#arrow">
    And here's some amazing content. It's very engaging. Right?
</Popover>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types page</a> for type information.</p>

<h3 class='text-xl w-full dark:text-white py-4'>Modal</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={props} rowState='hover' />
</TableProp>
