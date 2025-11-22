# Svelte Textarea - Flowbite


The textarea component is a multi-line text field input that can be used to receive longer chunks of text from the user in the form of a comment box, description field, and more.

## Setup

```svelte
<script lang="ts">
  import { Textarea } from "flowbite-svelte";
</script>
```

## Textarea example

Get started with the default example of a textarea component below.

```svelte
<script lang="ts">
  import { Textarea, Label } from "flowbite-svelte";
</script>

<Label for="textarea-id" class="mb-2">Your message</Label>
<Textarea id="textarea-id" placeholder="Your message" rows={4} name="message" class="w-full" />
```

## Disabled

Get started with the default example of a textarea component below.

```svelte
<script lang="ts">
  import { Textarea } from "flowbite-svelte";
</script>

<Textarea disabled id="textarea-id" placeholder="Your message" rows={4} name="message" class="w-full" />
```

## Clearable

```svelte
<script lang="ts">
  import { Textarea, Label } from "flowbite-svelte";
</script>

<Label for="textarea-id" class="mb-2">Your message</Label>
<Textarea clearable id="textarea-clearable" placeholder="Your message" rows={4} name="message" class="w-full" />
```

## Event

```svelte
<script lang="ts">
  import { Textarea, Label } from "flowbite-svelte";
</script>

<Label for="textarea-id" class="mb-2">Your message</Label>
<Textarea
  clearable
  clearableOnClick={() => {
    alert("Clicked clear button!");
  }}
  class="textarea-event w-full"
  placeholder="Your message"
  rows={4}
  name="message"
/>
```

## Accessing Textarea Element with elementRef

```svelte
<script lang="ts">
  import { Textarea, Button } from "flowbite-svelte";

  let textareaRef = $state() as HTMLTextAreaElement;
  let textContent = $state("This is some example text that will be selected when you click the button.");
</script>

<Textarea bind:elementRef={textareaRef} bind:value={textContent} placeholder="Type something here..." class="w-full" />
<Button
  class="mt-2"
  onclick={() => {
    textareaRef?.focus();
    textareaRef?.setSelectionRange(0, textareaRef.value.length);
  }}
>
  Select All Text
</Button>
```

## WYSIWYG Editor

If you want to add other actions as buttons alongside your textarea component, such as with a WYSIWYG editor, then you can use the example below.

```svelte
<script lang="ts">
  import { Textarea, Toolbar, ToolbarGroup, ToolbarButton, Button, Label } from "flowbite-svelte";
  import { PaperClipOutline, MapPinAltSolid, ImageOutline, CodeOutline, FaceGrinOutline, PaperPlaneOutline } from "flowbite-svelte-icons";
</script>

<form>
  <Label for="editor" class="sr-only">Publish post</Label>
  <Textarea id="editor" rows={8} class="mb-4" placeholder="Write a comment">
    {#snippet header()}
      <Toolbar embedded>
        <ToolbarGroup>
          <ToolbarButton name="Attach file"><PaperClipOutline class="h-6 w-6 rotate-45" /></ToolbarButton>
          <ToolbarButton name="Embed map"><MapPinAltSolid class="h-6 w-6" /></ToolbarButton>
          <ToolbarButton name="Upload image"><ImageOutline class="h-6 w-6" /></ToolbarButton>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarButton name="Format code"><CodeOutline class="h-6 w-6" /></ToolbarButton>
          <ToolbarButton name="Add emoji"><FaceGrinOutline class="h-6 w-6" /></ToolbarButton>
        </ToolbarGroup>
        {#snippet end()}
          <ToolbarButton name="send"><PaperPlaneOutline class="h-6 w-6 rotate-45" /></ToolbarButton>
        {/snippet}
      </Toolbar>
    {/snippet}
  </Textarea>
  <Button class="mt-2">Publish post</Button>
</form>
```

## Comment box

Most often the textarea component is used as the main text field input element in comment sections. Use this example to also apply a helper text and buttons below the textarea itself.

```svelte
<script lang="ts">
  import { Textarea, Toolbar, ToolbarButton, Button } from "flowbite-svelte";
  import { PaperClipOutline, MapPinAltSolid, ImageOutline } from "flowbite-svelte-icons";
</script>

<form>
  <Textarea class="mb-4" placeholder="Write a comment">
    {#snippet footer()}
      <div class="flex items-center justify-between">
        <Button type="submit">Post comment</Button>
        <Toolbar embedded>
          <ToolbarButton name="Attach file"><PaperClipOutline class="h-6 w-6" /></ToolbarButton>
          <ToolbarButton name="Set location"><MapPinAltSolid class="h-6 w-6" /></ToolbarButton>
          <ToolbarButton name="Upload image"><ImageOutline class="h-6 w-6" /></ToolbarButton>
        </Toolbar>
      </div>
    {/snippet}
  </Textarea>
</form>
<p class="ms-auto text-xs text-gray-500 dark:text-gray-400">
  Remember, contributions to this topic should follow our <a href="/" class="text-primary-600 dark:text-primary-500 hover:underline">Community Guidelines</a>
  .
</p>
```

## Chatroom input

If you want to build a chatroom component you will usually want to use a textarea element to allow users to write multi-line chunks of text.

```svelte
<script lang="ts">
  import { Textarea, ToolbarButton } from "flowbite-svelte";
  import { ImageOutline, FaceGrinOutline, PaperPlaneOutline } from "flowbite-svelte-icons";
</script>

<form>
  <label for="chat" class="sr-only">Your message</label>
  <div class="flex items-center rounded-lg bg-gray-50 px-3 py-2 dark:bg-gray-700">
    <ToolbarButton color="dark" class="text-gray-500 dark:text-gray-400">
      <ImageOutline class="h-6 w-6" />
      <span class="sr-only">Upload image</span>
    </ToolbarButton>
    <ToolbarButton color="dark" class="text-gray-500 dark:text-gray-400">
      <FaceGrinOutline class="h-6 w-6" />
      <span class="sr-only">Add emoji</span>
    </ToolbarButton>
    <Textarea id="chat" class="mx-4 w-full bg-white dark:bg-gray-800" classes={{ div: "w-full" }} rows={1} placeholder="Your message..." />
    <ToolbarButton type="submit" color="blue" class="text-primary-600 dark:text-primary-500 ml-6 rounded-full">
      <PaperPlaneOutline class="h-6 w-6 rotate-45" />
      <span class="sr-only">Send message</span>
    </ToolbarButton>
  </div>
</form>
```

## Using Svelte's snapshot to preserve the input

```svelte
<script lang="ts">
  import { Tabs, TabItem, Label, Button, Input, Textarea } from "flowbite-svelte";
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

<Tabs role="tablist">
  <TabItem open title="Profile">
    <form method="POST">
      <Label for="name" class="my-4">Name</Label>
      <Input id="name" bind:value={name} type="text" />
      <Label for="email" class="my-4">Email</Label>
      <Input id="email" bind:value={email} type="email" />
      <Label for="comment" class="my-4">Comment</Label>
      <Textarea id="comment" class="w-full" bind:value={comment} />
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

## Component data

### Textarea

#### Types

[TextareaProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L986)

#### Props

- header
- footer
- addon
- value: $bindable()
- elementRef: $bindable()
- divClass
- innerClass
- headerClass
- footerClass
- addonClass
- disabled
- class: className
- classes
- clearable
- clearableSvgClass
- clearableColor: "none"
- clearableClass
- clearableOnClick
- textareaClass


## References

- [Flowbite Textarea](https://flowbite.com/docs/forms/textarea/)
