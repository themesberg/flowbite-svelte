---
layout: formLayout
---

<script>
import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../../utils'
import { Button, Textarea, Label, Heading, Breadcrumb, BreadcrumbItem, Badge, Alert, CloseButton, CodeBracket, FaceSmile, MapPin, PaperClip, PaperAirplane,  Photo, Toolbar, ToolbarButton, ToolbarGroup } from '$lib'
import { Home, Upload } from 'svelte-heros';

import componentProps from '../../props/Textarea.json'
let items = componentProps.props
let propHeader = ['Name', 'Type', 'Default']

let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

let textareaprops = {
  id: 'message',
  name: 'message',
  label: 'Your message',
  rows: 4,
  placeholder: 'Leave a comment...',
};
</script>

<Breadcrumb class="pb-8">
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem href="/forms/" rel="external">Forms</BreadcrumbItem>
  <BreadcrumbItem>Textarea</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">Textarea</Heading>

<CompoDescription>Use the textarea component as a multi-line text field input and use it inside form elements available in multiple sizes, styles, and variants</CompoDescription>

<ExampleDiv>
<GitHubSource href="forms/Textarea.svelte">Textarea</GitHubSource>
</ExampleDiv>

The textarea component is a multi-line text field input that can be used to receive longer chuncks of text from the user in the form of a comment box, description field, and more.

<Htwo label="Setup" />

```html
<script>
  import { Textarea } from 'flowbite-svelte'
</script>
```

<Htwo label="Textarea example" />

Get started with the default example of a textarea component below.

<ExampleDiv>
  <Label for="textarea-id" class="mb-2">Your message</Label>
  <Textarea id="textarea-id" placeholder="Your message" rows="4" name="message"/>
</ExampleDiv>

```html
  <Label for="textarea-id" class="mb-2">Your message</Label>
  <Textarea id="textarea-id" placeholder="Your message" rows="4" name="message"/>
```

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

```html
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
```
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

```html
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
```

<Htwo label="Chatroom input" />

If you want to build a chatroom component you will usually want to use a textarea element to allow users to write multi-line chunks of text.

<ExampleDiv>
<form>
    <label for="chat" class="sr-only">Your message</label>
    <Alert color="dark" class="px-3 py-2">
      <CloseButton color="dark" class="text-gray-500 dark:text-gray-400">
          <Photo variation="solid" />
          <span class="sr-only">Upload image</span>
      </CloseButton>
      <CloseButton color="dark" class="text-gray-500 dark:text-gray-400">
          <FaceSmile variation="solid" />
          <span class="sr-only">Add emoji</span>
      </CloseButton>
      <Textarea id="chat" class="mx-4" rows="1" placeholder="Your message..."/>
      <CloseButton type="submit" color="blue" class="rounded-full text-blue-600 dark:text-blue-500">
          <PaperAirplane variation="solid" />
          <span class="sr-only">Send message</span>
      </CloseButton>
    </Alert>
</form>
</ExampleDiv>

```html
<form>
  <label for="chat" class="sr-only">Your message</label>
  <Alert color="dark" class="px-3 py-2">
    <CloseButton color="dark" class="text-gray-500 dark:text-gray-400">
        <Photo variation="solid" />
        <span class="sr-only">Upload image</span>
    </CloseButton>
    <CloseButton color="dark" class="text-gray-500 dark:text-gray-400">
        <FaceSmile variation="solid" />
        <span class="sr-only">Add emoji</span>
    </CloseButton>
    <Textarea id="chat" class="mx-4" rows="1" placeholder="Your message..."/>
    <CloseButton type="submit" color="blue" class="rounded-full text-blue-600 dark:text-blue-500">
        <PaperAirplane variation="solid" />
        <span class="sr-only">Send message</span>
    </CloseButton>
  </Alert>
</form>
```

<Htwo label="Props" />

The component has the following props, type, and default values. See <a href="/pages/types">types page</a> for type information.


<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

<Htwo label="Forwarded Events" />

<div class="flex flex-wrap gap-2">
<Badge large={true}>on:blur</Badge>
<Badge large={true}>on:change</Badge>
<Badge large={true}>on:click</Badge>
<Badge large={true}>on:focus</Badge>
<Badge large={true}>on:keydown</Badge>
<Badge large={true}>on:keypress</Badge>
<Badge large={true}>on:keyup</Badge>
<Badge large={true}>on:mouseenter</Badge>
<Badge large={true}>on:mouseleave</Badge>
<Badge large={true}>on:mouseover</Badge>
<Badge large={true}>on:paste</Badge>
</div>
