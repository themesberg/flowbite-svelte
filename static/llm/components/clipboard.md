# Svelte Clipboard - Flowbite


The copy to clipboard component allows you to copy text, lines of code, contact details or any other data to the clipboard with a single click on a trigger element such as a button. This component can be used to copy text from an input field, textarea, code block or even address fields in a form element.

Use cases for websites can be found in the examples below and they include copying code installation commands, API keys, URLs, addresses, contact details, sharing course URLs inside a modal and more.

## Set up

Import Clipboard in the script tag.

```svelte
<script lang="ts">
  import { Clipboard } from "flowbite-svelte";
</script>
```

## Default copy to clipboard

Use this example to copy the content of an input text field by clicking on a button and update the button text.

String variable `value` is the source of the text copied to the clipboard. Boolean variable `success` turns `true` for a while when text was copied.

```svelte
<script lang="ts">
  import { Clipboard, Input } from "flowbite-svelte";
  import { CheckOutline } from "flowbite-svelte-icons";

  let value = $state("npm install flowbite");
  let success = $state(false);
</script>

<Input bind:value class="w-64" />
<Clipboard bind:value bind:success class="w-24">
  {#if success}<CheckOutline />{:else}Copy{/if}
</Clipboard>
```

## Input with copy button

This example can be used to copy the content of an input field by clicking on a button with an icon positioned inside the form element and also show a tooltip with a message when the text has been copied.

Notice the different style of monitoring the `success` state by using the parameter in the `children` snippet.

```svelte
<script lang="ts">
  import { Clipboard, Input, Tooltip } from "flowbite-svelte";
  import { CheckOutline, ClipboardCleanSolid } from "flowbite-svelte-icons";

  let value = $state("npm install flowbite");
</script>

<div class="w-64">
  <Input bind:value>
    {#snippet right()}
      <Clipboard bind:value embedded>
        {#snippet children(success)}
          <Tooltip isOpen={success}>{success ? "Copied" : "Copy to clipboard"}</Tooltip>
          {#if success}<CheckOutline />{:else}<ClipboardCleanSolid />{/if}
        {/snippet}
      </Clipboard>
    {/snippet}
  </Input>
</div>
```

## Copy button with text

Use this example to show a copy button inside the input field with a text label and icon that updates to a success state when the text has been copied.

```svelte
<script lang="ts">
  import { Clipboard, Input } from "flowbite-svelte";
  import { CheckOutline, ClipboardCleanSolid } from "flowbite-svelte-icons";

  let value = $state("npm install flowbite");
</script>

<div class="w-64">
  <Input bind:value class="text-sm">
    {#snippet right()}
      <Clipboard size="xs" color="alternative" bind:value class="-mr-1 w-20 focus:ring-0">
        {#snippet children(success)}
          {#if success}
            <CheckOutline class="h-3 w-3" /> Copied
          {:else}
            <ClipboardCleanSolid class="h-3 w-3" /> Copy
          {/if}
        {/snippet}
      </Clipboard>
    {/snippet}
  </Input>
</div>
```

## Input group with copy

This example can be used to show a copy to clipboard button inside an input group which has a label positioned inside the input field.

```svelte
<script lang="ts">
  import { Clipboard, Input, InputAddon, Tooltip, ButtonGroup } from "flowbite-svelte";
  import { CheckOutline, ClipboardCleanSolid } from "flowbite-svelte-icons";

  let value = $state("https://flowbite.com");
</script>

<ButtonGroup>
  <InputAddon>URL</InputAddon>
  <Input bind:value readonly disabled class="w-64" />
  <Clipboard color="primary" bind:value>
    {#snippet children(success)}
      <Tooltip class="whitespace-nowrap">{success ? "Copied" : "Copy to clipboard"}</Tooltip>
      {#if success}<CheckOutline />{:else}<ClipboardCleanSolid />{/if}
    {/snippet}
  </Clipboard>
</ButtonGroup>
```

## URL shortener input group

Use this example to copy a shortened URL to the clipboard by clicking on a button with an icon positioned inside the input field and also show a tooltip with a message when the text has been copied.

```svelte
<script lang="ts">
  import { Clipboard, Input, Label, Helper, Button, Tooltip, ButtonGroup } from "flowbite-svelte";
  import { CheckOutline, ClipboardCleanSolid } from "flowbite-svelte-icons";

  let value = $state("https://bit.ly/3U2SXcF");
</script>

<div class="space-y-2">
  <Label for="url-shortener">Shorten URL:</Label>
  <ButtonGroup>
    <Button color="primary">Generate</Button>
    <Input id="url-shortener" bind:value readonly disabled class="w-64" />
    <Clipboard bind:value>
      {#snippet children(success)}
        <Tooltip class="whitespace-nowrap">{success ? "Copied" : "Copy link"}</Tooltip>
        {#if success}<CheckOutline />{:else}<ClipboardCleanSolid />{/if}
      {/snippet}
    </Clipboard>
  </ButtonGroup>
  <Helper>Make sure that your URL is valid</Helper>
</div>
```

## Copy source code block

This example can be used to copy and paste code inside a `<pre>` and `<code>` block by clicking on a button with an icon position inside the block and also show a tooltip with a message when the text has been copied.

```svelte
<script lang="ts">
  import { Clipboard, Label, Helper } from "flowbite-svelte";
  import { CheckOutline, ClipboardCleanSolid } from "flowbite-svelte-icons";

  let value = $state("");
  let success = $state(false);

  function onclick(ev: MouseEvent): void {
    const target = ev.target as HTMLElement;
    const codeBlock = target.ownerDocument.querySelector("#code-block");
    if (codeBlock) {
      value = codeBlock.textContent || "";
    }
  }
</script>

<div class="w-full max-w-lg space-y-1">
  <Label>Copy source code block:</Label>
  <div class="relative h-64 rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
    <div class="max-h-full overflow-scroll">
      <pre><code id="code-block" class="text-sm whitespace-pre text-gray-500 dark:text-gray-400">  
    &#x3C;div class="space-y-2"&#x3E;
        &#x3C;Label for="url-shortener"&#x3E;Shorten URL:&#x3C;/Label&#x3E;
        &#x3C;ButtonGroup&#x3E;
        &#x3C;Button color="primary"&#x3E;Generate&#x3C;/Button&#x3E;
        &#x3C;Input id="url-shortener" bind:value readonly disabled class="w-64" /&#x3E;
        &#x3C;/ButtonGroup&#x3E;
        &#x3C;Helper&#x3E;Make sure that your URL is valid&#x3C;/Helper&#x3E;
    &#x3C;/div&#x3E;
            </code></pre>
    </div>

    <Clipboard color={success ? "alternative" : "light"} bind:value bind:success size="sm" class="absolute end-2 top-2 h-8 px-2.5 font-medium focus:ring-0" {onclick}>
      {#if success}
        <CheckOutline class="h-3 w-3" /> Copied
      {:else}
        <ClipboardCleanSolid class="h-3 w-3" /> Copy code
      {/if}
    </Clipboard>
  </div>
  <Helper>Configure Tailwind CSS and Flowbite before copying the code</Helper>
</div>
```

## Card with API keys

Use this example to show multiple input field elements that have the copy to clipboard button inside a card component for more complex applications where you need to copy API keys, account IDs and more.

```svelte
<script lang="ts">
  import { Card, Clipboard, Input, Label, Tooltip, Button } from "flowbite-svelte";
  import { CheckOutline, ClipboardCleanSolid } from "flowbite-svelte-icons";

  let acc_id = $state("756593826");
  let api_key = $state("f4h6sd3t-jsy63ind-hsgdt7rs-jdhf76st");
  let role_arn = $state("123456789012:user/Flowbite");
</script>

{#snippet children(success: boolean)}
  <Tooltip isOpen={success}>{success ? "Copied" : "Copy to clipboard"}</Tooltip>
  {#if success}<CheckOutline />{:else}<ClipboardCleanSolid />{/if}
{/snippet}

<Card size="md" class="p-4 sm:p-6 md:p-8">
  <form class="flex flex-col space-y-6" action="/">
    <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Create a role with read only in-line policies</h2>
    <p class="mb-6 text-gray-500 dark:text-gray-400">
      To give Flowbite read access, please create an IAM Role following <a href="#top" class="font-medium text-blue-700 underline hover:no-underline dark:text-blue-500">trust relationship</a>
      and
      <a href="#top" class="font-medium text-blue-700 underline hover:no-underline dark:text-blue-500">inline policy</a>
      .
    </p>

    <Label class="space-y-2 font-medium">
      <div>Flowbite account ID:</div>
      <Input bind:value={acc_id} readonly disabled>
        {#snippet right()}
          <Clipboard bind:value={acc_id} embedded {children} />
        {/snippet}
      </Input>
    </Label>
    <Label class="space-y-2 font-medium">
      <div>API key:</div>
      <Input bind:value={api_key} readonly disabled>
        {#snippet right()}
          <Clipboard bind:value={api_key} embedded {children} />
        {/snippet}
      </Input>
    </Label>
    <Label class="space-y-2 font-medium">
      <div>Role ARN:</div>
      <Input bind:value={role_arn} readonly disabled>
        {#snippet right()}
          <Clipboard bind:value={role_arn} embedded {children} />
        {/snippet}
      </Input>
    </Label>

    <div class="flex gap-4">
      <Button color="alternative">Cancel</Button>
      <Button type="submit">Next step</Button>
    </div>
  </form>
</Card>
```

## Copy Textarea

Add a `Clipboard` to your `Textarea` using the `addon` snippet. The button appears in the top-right corner when there's content to copy.

```svelte
<script lang="ts">
  import { Clipboard, Textarea } from "flowbite-svelte";
  import { CheckOutline, ClipboardCleanSolid } from "flowbite-svelte-icons";

  let value = $state("");
  let success = $state(false);
</script>

<Textarea id="textarea-id" placeholder="Your message" rows={4} name="message" bind:value class="w-full">
  {#snippet addon()}
    {#if value.length > 0}
      <Clipboard color={success ? "alternative" : "light"} bind:value bind:success size="sm" class="absolute end-2 top-2 h-8 w-32 px-2.5 font-medium focus:ring-0">
        {#if success}
          <CheckOutline class="h-3 w-3" /> Copied
        {:else}
          <ClipboardCleanSolid class="h-3 w-3" /> Copy text
        {/if}
      </Clipboard>
    {/if}
  {/snippet}
</Textarea>
```

## Copy contact details

This example can be used to copy the text content (ie. contact details) inside of the `<address>` field by clicking on the copy to clipboard button positioned inside of the address card.

Make sure that you set the `id` to the trigger element to specify the source of the content that is to be copied.

```svelte
<script lang="ts">
  import { Card, Clipboard, Tooltip } from "$lib";
  import { CheckOutline, ClipboardCleanSolid } from "flowbite-svelte-icons";

  let value = $state("");

  function onclick(ev: MouseEvent): void {
    const target = ev.target as HTMLElement;
    const codeBlock = target.ownerDocument.querySelector("#contact-details");
    if (codeBlock) {
      value = codeBlock.textContent || "";
    }
  }
</script>

<Card class="relative p-5">
  <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Contact details</h2>
  <address class="relative grid grid-cols-2 rounded-lg border border-gray-200 bg-gray-50 p-4 not-italic dark:border-gray-600 dark:bg-gray-700">
    <div class="hidden space-y-2 leading-loose text-gray-500 sm:block dark:text-gray-400">
      Name <br />
      Email
      <br />
      Phone Number
    </div>
    <div id="contact-details" class="space-y-2 leading-loose font-medium text-gray-900 dark:text-white">
      Bonnie Green <br />
      name@flowbite.com
      <br />
      + 12 345 67890
    </div>
  </address>
  <Clipboard {onclick} bind:value embedded class="absolute end-2 top-2 h-8 px-2.5 font-medium focus:ring-0">
    {#snippet children(success)}
      <Tooltip isOpen={success}>{success ? "Copied" : "Copy to clipboard"}</Tooltip>
      {#if success}<CheckOutline />{:else}<ClipboardCleanSolid />{/if}
    {/snippet}
  </Clipboard>
</Card>
```

## Copy button with modal

Use this example to show an input field where you can copy the URL of the current page and also show a modal with the copied URL when the copy button is clicked.

```svelte
<script lang="ts">
  import { Clipboard, Input, Tooltip, Modal, Button, Label } from "$lib";
  import { CheckOutline, ClipboardCleanSolid, ShareNodesOutline } from "flowbite-svelte-icons";

  let value = $state("npm install flowbite-svelte");
  let copyModal = $state(false);
</script>

<Button color="alternative" onclick={() => (copyModal = true)}><ShareNodesOutline class="me-2" /> Share course</Button>

<Modal title="Share course" bind:open={copyModal} autoclose class="divide-y-0" classes={{ header: "text-lg text-gray-500 dark:text-gray-400", footer: "px-5 pb-5" }}>
  <Label for="course-url" class="mb-2 block text-sm font-medium">Share the course link below with your friends:</Label>

  <Input bind:value id="course-url">
    {#snippet right()}
      <Clipboard bind:value embedded>
        {#snippet children(success)}
          <Tooltip isOpen={success}>{success ? "Copied" : "Copy to clipboard"}</Tooltip>
          {#if success}<CheckOutline />{:else}<ClipboardCleanSolid />{/if}
        {/snippet}
      </Clipboard>
    {/snippet}
  </Input>
  {#snippet footer()}
    <Button onclick={() => (copyModal = false)}>Close</Button>
  {/snippet}
</Modal>
```

## Component data

### Clipboard

#### Types

[ClipboardProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L470)

#### Props

- children
- embedded: false
- value: $bindable("")
- success: $bindable(false)
- onclick
- class: className: ""


## References

- [Flowbite Clipboard](https://flowbite.com/docs/components/clipboard/)
