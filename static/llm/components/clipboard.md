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
{#include Default.svelte}
```

## Input with copy button

This example can be used to copy the content of an input field by clicking on a button with an icon positioned inside the form element and also show a tooltip with a message when the text has been copied.

Notice the different style of monitoring the `success` state by using the parameter in the `children` snippet.

```svelte
{#include Input.svelte}
```

## Copy button with text

Use this example to show a copy button inside the input field with a text label and icon that updates to a success state when the text has been copied.

```svelte
{#include CopyButton.svelte}
```

## Input group with copy

This example can be used to show a copy to clipboard button inside an input group which has a label positioned inside the input field.

```svelte
{#include InputGroup.svelte}
```

## URL shortener input group

Use this example to copy a shortened URL to the clipboard by clicking on a button with an icon positioned inside the input field and also show a tooltip with a message when the text has been copied.

```svelte
{#include Url.svelte}
```

## Copy source code block

This example can be used to copy and paste code inside a `<pre>` and `<code>` block by clicking on a button with an icon position inside the block and also show a tooltip with a message when the text has been copied.

```svelte
{#include Source.svelte}
```

## Card with API keys

Use this example to show multiple input field elements that have the copy to clipboard button inside a card component for more complex applications where you need to copy API keys, account IDs and more.

```svelte
{#include ApiKeys.svelte}
```

## Copy Textarea

Add a `Clipboard` to your `Textarea` using the `addon` snippet. The button appears in the top-right corner when there's content to copy.

```svelte
{#include Textarea.svelte}
```

## Copy contact details

This example can be used to copy the text content (ie. contact details) inside of the `<address>` field by clicking on the copy to clipboard button positioned inside of the address card.

Make sure that you set the `id` to the trigger element to specify the source of the content that is to be copied.

```svelte
{#include Contact.svelte}
```

## Copy button with modal

Use this example to show an input field where you can copy the URL of the current page and also show a modal with the copied URL when the copy button is clicked.

```svelte
{#include Modal.svelte}
```

## Component data

### Clipboard

#### Types

[ClipboardProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L431)

#### Props

- children
- embedded: false
- value: $bindable("")
- success: $bindable(false)
- onclick
- class: className: ""


## References

- [Flowbite Clipboard](https://flowbite.com/docs/components/clipboard/)


