---
layout: tooltipLayout
---

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
  import { Toolbar, ToolbarButton, ToolbarGroup, Avatar, Button, Textarea, Breadcrumb, BreadcrumbItem, PaperAirplane, PaperClip, Photo, MapPin, CodeBracket, FaceSmile } from '$lib'
  import { Home, Mail, QuestionMarkCircle, Qrcode } from 'svelte-heros'
  
  import componentProps from '../props/Toolbar.json'
  // Props table
  let items = componentProps.props
  let propHeader = ['Name', 'Type', 'Default']

  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Toolbar</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Tooltips</h1>

<CompoDescription>Use the following Tailwind CSS powered toolbars to show groups of tool buttons</CompoDescription>

<ExampleDiv>
<GitHubSource href="tooltips/Tooltip.svelte">Tooltip</GitHubSource>
</ExampleDiv>



<Htwo label="Setup" />

```html
<script>
	import { Toolbar, ToolbarButton, ToolbarGroup } from 'flowbite-svelte';
</script>
```

<Htwo label="Default toolbar" />

<ExampleDiv>
<Toolbar>
	<ToolbarButton><Home variation="solid"/></ToolbarButton>
	<ToolbarButton><Qrcode variation="solid"/></ToolbarButton>
    <ToolbarButton><Mail variation="solid" /></ToolbarButton>
    <ToolbarButton slot="end"><Home variation="solid"/></ToolbarButton>
</Toolbar>
</ExampleDiv>

<Htwo label="Colored toolbars" />

<ExampleDiv class="space-y-4">
<Toolbar color="red">
	<ToolbarButton color="red"><Home variation="solid"/></ToolbarButton>
	<ToolbarButton color="red"><Qrcode variation="solid"/></ToolbarButton>
    <ToolbarButton color="red"><Mail variation="solid" /></ToolbarButton>
    <ToolbarButton slot="end" color="red"><Home variation="solid"/></ToolbarButton>
</Toolbar>
<Toolbar color="blue">
	<ToolbarButton color="blue"><Home variation="solid"/></ToolbarButton>
	<ToolbarButton color="blue"><Qrcode variation="solid"/></ToolbarButton>
    <ToolbarButton color="blue"><Mail variation="solid" /></ToolbarButton>
    <ToolbarButton slot="end" color="blue"><Home variation="solid"/></ToolbarButton>
</Toolbar>
</ExampleDiv>

<Htwo label="Toolbar with groups" />

<ExampleDiv>
<Toolbar color="green">
    <ToolbarGroup>
        <ToolbarButton color="green"><Home variation="solid"/></ToolbarButton>
        <ToolbarButton color="green"><Qrcode variation="solid"/></ToolbarButton>
        <ToolbarButton color="green"><Mail variation="solid" /></ToolbarButton>
    </ToolbarGroup>
    <ToolbarGroup>
        <ToolbarButton color="green"><Home variation="solid"/></ToolbarButton>
        <ToolbarButton color="green"><Qrcode variation="solid"/></ToolbarButton>
        <ToolbarButton color="green"><Mail variation="solid" /></ToolbarButton>
    </ToolbarGroup>
    <ToolbarButton slot="end" color="green"><Home variation="solid"/></ToolbarButton>
</Toolbar>
</ExampleDiv>

<Htwo label="WYSIWYG Editor" />

If you want to add other actions as buttons alongside your textarea component, such as with a WYSIWYG editor, then you can use the example below.

<ExampleDiv>
<form>
  <label for="editor" class="sr-only">Publish post</label>
  <Textarea id="editor" rows="8" class="mb-4" placeholder="Write a comment">
    <Toolbar slot="header" embedded>
      <ToolbarGroup>
        <ToolbarButton name="Attach file"><PaperClip size={20} variation="solid"/></ToolbarButton>
        <ToolbarButton name="Embed map"><MapPin size={20} variation="solid" /></ToolbarButton>
        <ToolbarButton name="Upload image"><Photo size={20} variation="solid" /></ToolbarButton>
      </ToolbarGroup>
      <ToolbarGroup>
        <ToolbarButton name="Format code"><CodeBracket size={20} variation="solid" /></ToolbarButton>
        <ToolbarButton name="Add emoji"><FaceSmile size={20} variation="solid" /></ToolbarButton>
      </ToolbarGroup>
      <ToolbarButton name="send" slot="end"><PaperAirplane size={20} variation="solid" /></ToolbarButton>
    </Toolbar>
  </Textarea>
  <Button>Publish post</Button>
</form>
</ExampleDiv>

<Htwo label="Comment box" />

Most often the textarea component is used as the main text field input element in comment sections. Use this example to also apply a helper text and buttons below the textarea itself.

<ExampleDiv class="space-y-4">
<form>
  <Textarea class="mb-4" placeholder="Write a comment">
    <div slot="footer" class="flex items-center justify-between">
    <Button type="submit">Post comment</Button>
    <Toolbar embedded>
        <ToolbarButton name="Attach file"><PaperClip size={20} variation="solid" /></ToolbarButton>
        <ToolbarButton name="Set location"><MapPin size={20} variation="solid" /></ToolbarButton>
        <ToolbarButton name="Upload image"><Photo size={20} variation="solid" /></ToolbarButton>
    </Toolbar>
    </div>
  </Textarea>
</form>
<p class="ml-auto text-xs text-gray-500 dark:text-gray-400">Remember, contributions to this topic should follow our <a href="/" class="text-blue-600 dark:text-blue-500 hover:underline">Community Guidelines</a>.</p>

</ExampleDiv>

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>