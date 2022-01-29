# Svelte-flowbite



## Cards

- Card
- CtaCard
- EcommerceCard
- HorizontalCard
- InteractiveCard
- ListCard
- SignInCard

## Modal

- ExtraLargeModal
- LargeModal
- MediumModal
- ModalButton
- SignInModal
- SmallModal

## Tabs

- DefaultTabs
- InteractiveTabs
- PillTabs

## Installation

```sh
npm install @codewithshin/svelte-flow@latest
```

## Alert components example

There are three components you can use.

- Alert
- BorderAlert
- InfoAlert

```sh
<script>
  import { Alert, BorderAlert, InfoAlert } from "@codewithshin/svelte-flow";
</script>

<div class="p-8">
  <Alert alertId="alert-blue">
    A simple info alert without a close button.
  </Alert>

  <Alert alertId="alert-red" color="red" closeBtn="true">
    A simple info alert with a close button.
  </Alert>

  <BorderAlert color="green">
    A border alert without the close button.
  </BorderAlert>

  <BorderAlert alertId="border-alert-2" color="yellow" closeBtn="true">
    A border alert with the close button.
  </BorderAlert>

  <InfoAlert>
    <span slot="header">Info header 1</span>
    <span slot="content">InfoAlert without View more and Dismiss button.</span>
  </InfoAlert>

  <InfoAlert alertId="info-alert-2" color="gray" closeBtn="true" infoLink="/">
    <span slot="header">Info header 2</span>
    <span slot="content">InfoAlert with View more and Dismiss button.</span>
  </InfoAlert>
</div>
```

## Cards component example


