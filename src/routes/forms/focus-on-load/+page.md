<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../../utils'
  import { onMount } from 'svelte';
  import { Input, Label, Helper, Iconinput, Breadcrumb, BreadcrumbItem } from '$lib'
  import { Home, AtSymbol , Mail } from 'svelte-heros'
  
  import componentProps1 from '../../props/Input.json'
  let items1 = componentProps1.props
  import componentProps2 from '../../props/Iconinput.json'
  let items2 = componentProps2.props
  let propHeader = ['Name', 'Type', 'Default']
  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
  let ref

  onMount(() => {
    ref.focus();
  });
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem href="/forms/" rel="external">Forms</BreadcrumbItem>
  <BreadcrumbItem>Focus on load</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Focus on load</h1>

<p>To focus on an input field and a textarea field on load create a `ref` variable and bind it in an Input component. Add a `onMount` function as followings.</p>

<p>In the next example, when you reload/refresh the page, the First name field is focused on load.</p>

<p>If you want to use this on your website, your link to the page must have `rel="external"`.</p>

<ExampleDiv>
<Input class="mb-6" placeholder="First name" label="First name" bind:ref />
<Input class="mb-6" placeholder="Last name" label="Last name" />
</ExampleDiv>

```html
<script>
import { onMount } from 'svelte';
let ref

onMount(() => {
  ref.focus();
});
</script>

<Input class="mb-6" placeholder="First name" label="First name" bind:ref/>
<Input class="mb-6" placeholder="Last name" label="Last name"/>
```
