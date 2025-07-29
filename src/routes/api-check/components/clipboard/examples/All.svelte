<script lang="ts">
  import { Card, Clipboard, Input, Tooltip, InputAddon, ButtonGroup, Label, Helper, Button, Textarea } from "flowbite-svelte";
  import { CheckOutline, ClipboardCleanSolid } from "flowbite-svelte-icons";

  let value = $state("npm install flowbite");
  let value2 = $state("https://flowbite.com");
  let value3 = $state("https://bit.ly/3U2SXcF");
  let success = $state(false);
  let value4 = $state("");

  function onclick(ev: MouseEvent): void {
    const target = ev.target as HTMLElement;
    const codeBlock = target.ownerDocument.querySelector("#code-block");
    if (codeBlock) {
      value = codeBlock.textContent || "";
    }
  }
  let acc_id = $state("756593826");
  let api_key = $state("f4h6sd3t-jsy63ind-hsgdt7rs-jdhf76st");
  let role_arn = $state("123456789012:user/Flowbite");
  let value5 = $state("");
  let value6 = $state("");
</script>

<h1 class="my-4 text-3xl">Clipboard</h1>

<h2 class="my-4 text-2xl">Default copy to clipboard</h2>
<div class="my-4 flex flex-wrap justify-center gap-2 rounded border border-gray-200 p-4 dark:border-gray-600">
  <Input bind:value class="w-64" />
  <Clipboard bind:value bind:success class="w-24">
    {#if success}<CheckOutline />{:else}Copy{/if}
  </Clipboard>
</div>

<h2 class="my-4 text-2xl">Input with copy button</h2>
<div class="my-4 flex flex-wrap justify-center gap-2 rounded border border-gray-200 p-4 dark:border-gray-600">
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
</div>

<h2 class="my-4 text-2xl">Copy button with text</h2>
<div class="my-4 flex flex-wrap justify-center gap-2 rounded border border-gray-200 p-4 dark:border-gray-600">
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
</div>

<h2 class="my-4 text-2xl">Input group with copy</h2>
<div class="my-4 flex flex-wrap justify-center gap-2 rounded border border-gray-200 p-4 dark:border-gray-600">
  <ButtonGroup>
    <InputAddon>URL</InputAddon>
    <Input bind:value={value2} readonly disabled class="w-64" />
    <Clipboard color="primary" bind:value={value2}>
      {#snippet children(success)}
        <Tooltip class="whitespace-nowrap">{success ? "Copied" : "Copy to clipboard"}</Tooltip>
        {#if success}<CheckOutline />{:else}<ClipboardCleanSolid />{/if}
      {/snippet}
    </Clipboard>
  </ButtonGroup>
</div>

<h2 class="my-4 text-2xl">URL shortener input group</h2>
<div class="my-4 flex flex-wrap justify-center gap-2 rounded border border-gray-200 p-4 dark:border-gray-600">
  <div class="space-y-2">
    <Label for="url-shortener">Shorten URL:</Label>
    <ButtonGroup>
      <Button color="primary">Generate</Button>
      <Input id="url-shortener" bind:value={value3} readonly disabled class="w-64" />
      <Clipboard bind:value={value3}>
        {#snippet children(success)}
          <Tooltip class="whitespace-nowrap">{success ? "Copied" : "Copy link"}</Tooltip>
          {#if success}<CheckOutline />{:else}<ClipboardCleanSolid />{/if}
        {/snippet}
      </Clipboard>
    </ButtonGroup>
    <Helper>Make sure that your URL is valid</Helper>
  </div>
</div>

<h2 class="my-4 text-2xl">Copy source code block</h2>
<div class="my-4 flex flex-wrap justify-center gap-2 rounded border border-gray-200 p-4 dark:border-gray-600">
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
              &#x3C;Clipboard bind:value&#x3E;
                  {#snippet children(success: boolean)}
              &#x3C;Tooltip class="whitespace-nowrap"&#x3E;{success ? "Copied" : "Copy link"}&#x3C;/Tooltip&#x3E;
                  {#if success}&#x3C;CheckOutline /&#x3E;{:else}&#x3C;ClipboardCleanSolid /&#x3E;{/if}
            {/snippet}
              &#x3C;/Clipboard&#x3E;
          &#x3C;/ButtonGroup&#x3E;
          &#x3C;Helper&#x3E;Make sure that your URL is valid&#x3C;/Helper&#x3E;
      &#x3C;/div&#x3E;
              </code></pre>
      </div>

      <Clipboard color={success ? "alternative" : "light"} bind:value={value4} bind:success size="sm" class="absolute end-2 top-2 h-8 px-2.5 font-medium focus:ring-0" {onclick}>
        {#if success}
          <CheckOutline class="h-3 w-3" /> Copied
        {:else}
          <ClipboardCleanSolid class="h-3 w-3" /> Copy code
        {/if}
      </Clipboard>
    </div>
    <Helper>Configure Tailwind CSS and Flowbite before copying the code</Helper>
  </div>
</div>

<h2 class="my-4 text-2xl">Card with API keys</h2>
<div class="my-4 flex flex-wrap justify-center gap-2 rounded border border-gray-200 p-4 dark:border-gray-600">
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
</div>

<h2 class="my-4 text-2xl">Copy Textarea</h2>
<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <Textarea id="textarea-id" placeholder="Your message" rows={4} name="message" bind:value={value6}>
    {#snippet addon()}
      {#if value6.length > 0}
        <Clipboard color={success ? "alternative" : "light"} bind:value={value6} bind:success size="sm" class="absolute end-2 top-2 h-8 w-32 px-2.5 font-medium focus:ring-0">
          {#if success}
            <CheckOutline class="h-3 w-3" /> Copied
          {:else}
            <ClipboardCleanSolid class="h-3 w-3" /> Copy text
          {/if}
        </Clipboard>
      {/if}
    {/snippet}
  </Textarea>
</div>
