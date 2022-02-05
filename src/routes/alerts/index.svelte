<script>
  import { Alert, BorderAlert, InfoAlert } from "$lib/index";
  import Prism from "prismjs";
  import "prismjs/themes/prism.css";
</script>

<div class="max-w-3xl mx-auto">
  <div class="container mt-4 flex flex-wrap mx-auto">
    <h1 class="text-3xl w-full">Alert: Setup</h1>

    <p>
      Import Alert, BorderAlert, and InfoAlert and set variables in the script
      tag.
    </p>

    <div class="code">
      {@html Prism.highlight(
        `
import { Alert, BorderAlert, InfoAlert } from "svlte-flow";
        `,
        Prism.languages["javascript"]
      )}
    </div>
  </div>

  <div class="container mt-4 flex flex-wrap mx-auto">
    <h1 class="text-3xl w-full">Simple Alert Examples</h1>

    <div class="code">
      {@html Prism.highlight(
        `
<Alert alertId="alert-blue">
  A simple info alert without a close button.
</Alert>
<Alert alertId="alert-red" color="red" closeBtn="true">
  A simple info alert with a close button.
</Alert>
          `,
        Prism.languages["javascript"]
      )}
    </div>
  </div>

  <div class="container mt-4  mx-auto">
    <Alert alertId="alert-blue">
      A simple info alert without a close button.
    </Alert>

    <Alert alertId="alert-red" color="red" closeBtn="true">
      A simple info alert with a close button.
    </Alert>
  </div>

  <div class="container mt-4 flex flex-wrap mx-auto">
    <h1 class="text-3xl w-full">Border Alert Examples</h1>

    <div class="code">
      {@html Prism.highlight(
        `
<BorderAlert color="green">
  A border alert without the close button.
</BorderAlert>

<BorderAlert alertId="border-alert-2" color="yellow" closeBtn="true">
  A border alert with the close button.
</BorderAlert>
          `,
        Prism.languages["javascript"]
      )}
    </div>
  </div>

  <div class="container mt-4  mx-auto">
    <BorderAlert color="green">
      A border alert without the close button.
    </BorderAlert>

    <BorderAlert alertId="border-alert-2" color="yellow" closeBtn="true">
      A border alert with the close button.
    </BorderAlert>
  </div>

  <div class="container mt-4 flex flex-wrap mx-auto">
    <h1 class="text-3xl w-full">Information Alert Examples</h1>

    <div class="code">
      {@html Prism.highlight(
        `
<BorderAlert color="green">
  A border alert without the close button.
</BorderAlert>
  
<BorderAlert alertId="border-alert-2" color="yellow" closeBtn="true">
  A border alert with the close button.
</BorderAlert>
          `,
        Prism.languages["javascript"]
      )}
    </div>
  </div>

  <div class="container mt-4  mx-auto">
    <InfoAlert>
      <span slot="header">Info header 1</span>
      InfoAlert without View more and Dismiss button.
    </InfoAlert>

    <InfoAlert
      alertId="info-alert-2"
      color="gray"
      closeBtn="true"
      infoLink="/dummy-pages/about"
    >
      <span slot="header">Info header 2</span>
      InfoAlert with View more and Dismiss button.
    </InfoAlert>
  </div>

  <div class="container mt-4 flex flex-wrap mx-auto pb-48">
    <a href="/" class="text-blue-700 text-lg">See more items.</a>
  </div>
</div>
