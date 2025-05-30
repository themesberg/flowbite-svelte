---
layout: componentLayout
title: Svelte Clipboard - Flowbite
breadcrumb_title: Svelte Clipboard
component_title: Clipboard
dir: Components
description: Use the clipboard component to copy text, data or lines of code to the clipboard with a single click based on various styles and examples coded with Tailwind CSS and Flowbite
thumnailSize: w-36
---

<script>
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { P, A } from '$lib'
  const dirName = 'clipboard'
</script>

The copy to clipboard component allows you to copy text, lines of code, contact details or any other data to the clipboard with a single click on a trigger element such as a button. This component can be used to copy text from an input field, textarea, code block or even address fields in a form element.

Use cases for websites can be found in the examples below and they include copying code installation commands, API keys, URLs, addresses, contact details, sharing course URLs inside a modal and more.

## Set up

Import Clipboard in the script tag.

```svelte example hideOutput
<script>
  import { Clipboard } from "flowbite-svelte";
</script>
```

## Default copy to clipboard

Use this example to copy the content of an input text field by clicking on a button and update the button text.

String variable `value` is the source of the text copied to the clipboard. Boolean variable `success` turns `true` for a while when text was copied.

```svelte example class="flex items-center justify-center gap-2 h-48" hideScript
<script>
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

```svelte example class="flex justify-center items-center gap-2 h-56" hideScript
<script>
  import { Clipboard, Input, Tooltip } from "flowbite-svelte";
  import { CheckOutline, ClipboardCleanSolid } from "flowbite-svelte-icons";

  let value = $state("npm install flowbite");
</script>

<div>
<Input bind:value class="w-64">
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

```svelte example class="flex justify-center items-center gap-2 h-56" hideScript
<script>
  import { Clipboard, Input, Tooltip, ButtonGroup } from "flowbite-svelte";
  import { CheckOutline, ClipboardCleanSolid } from "flowbite-svelte-icons";

  let value = $state("npm install flowbite");
</script>

<div>
<Input bind:value class="w-64 text-sm">
  {#snippet right()}
    <Clipboard size="xs" color="alternative" bind:value class="w-20 -mr-1 focus:ring-0">
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

```svelte example class="flex justify-center items-center gap-2 h-56" hideScript
<script>
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

```svelte example class="flex flex-col justify-center items-center gap-2 h-56" hideScript
<script>
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

```svelte example class="flex justify-center items-center gap-2 h-96"

<script>
  import { Clipboard, Input, Label, Helper, Button } from "flowbite-svelte";
  import { CheckOutline, ClipboardCleanSolid } from "flowbite-svelte-icons";

  let value = $state("");
  let success = $state(false);

  function onclick(ev) {
    value = ev.target.ownerDocument.querySelector('#code-block').innerText;
  }
</script>

<div class="w-full max-w-lg space-y-1">
    <Label>Card example URL shortener:</Label>
    <div class="relative bg-gray-50 rounded-lg dark:bg-gray-700 p-4 h-64">
        <div class="overflow-scroll max-h-full">
            <pre><code id="code-block" class="text-sm text-gray-500 dark:text-gray-400 whitespace-pre">  
    &#x3C;div class="space-y-2"&#x3E;
        &#x3C;Label for="url-shortener"&#x3E;Shorten URL:&#x3C;/Label&#x3E;
        &#x3C;ButtonGroup&#x3E;
        &#x3C;Button color="primary"&#x3E;Generate&#x3C;/Button&#x3E;
        &#x3C;Input id="url-shortener" bind:value readonly disabled class="w-64" /&#x3E;
            &#x3C;Clipboard bind:value&#x3E;
                {#snippet children(success)}
                &#x3C;Tooltip class="whitespace-nowrap"&#x3E;{success ? "Copied" : "Copy link"}&#x3C;/Tooltip&#x3E;
                {#if success}&#x3C;CheckOutline /&#x3E;{:else}&#x3C;ClipboardCleanSolid /&#x3E;{/if}
                {/snippet}
            &#x3C;/Clipboard&#x3E;
        &#x3C;/ButtonGroup&#x3E;
        &#x3C;Helper&#x3E;Make sure that your URL is valid&#x3C;/Helper&#x3E;
    &#x3C;/div&#x3E;
            </code></pre>
        </div>

        <Clipboard color={success? "alternative":"light"} bind:value bind:success size="sm" class="absolute top-2 end-2 focus:ring-0 font-medium px-2.5 h-8" {onclick}>
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

```svelte example class="flex justify-center items-center gap-2"

<script>
  import { Card, Clipboard, Input, Label, Tooltip, Button } from "flowbite-svelte";
  import { CheckOutline, ClipboardCleanSolid } from "flowbite-svelte-icons";

  let acc_id = $state("756593826");
  let api_key = $state("f4h6sd3t-jsy63ind-hsgdt7rs-jdhf76st");
  let role_arn = $state("123456789012:user/Flowbite");
  let value = $state("");
</script>


{#snippet children(success)}
    <Tooltip isOpen={success}>{success ? "Copied" : "Copy to clipboard"}</Tooltip>
    {#if success}<CheckOutline />{:else}<ClipboardCleanSolid />{/if}
{/snippet}
 

<Card size="md" class="p-4 sm:p-6 md:p-8">
  <form class="flex flex-col space-y-6" action="/">
    <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Create a role with read only in-line policies</h2>
    <p class="text-gray-500 dark:text-gray-400 mb-6">To give Flowbite read access, please create an IAM Role following <a href="#top" class="text-blue-700 dark:text-blue-500 underline hover:no-underline font-medium">trust relationship</a> and <a href="#top" class="text-blue-700 dark:text-blue-500 underline hover:no-underline font-medium">inline policy</a>.</p>

    <Label class="font-medium space-y-2">
      <div>Flowbite account ID:</div>
      <Input bind:value={acc_id} readonly disabled>
      {#snippet right()}
        <Clipboard bind:value={acc_id} embedded {children} />
      {/snippet}
      </Input>
    </Label>
    <Label class="font-medium space-y-2">
      <div>API key:</div>
      <Input bind:value={api_key} readonly disabled>
      {#snippet right()}
        <Clipboard bind:value={api_key} embedded {children} />
      {/snippet}
      </Input>
    </Label>
    <Label class="font-medium space-y-2">
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
