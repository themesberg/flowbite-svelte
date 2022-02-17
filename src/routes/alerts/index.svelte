<script>
  import { Alert, BorderAlert, InfoAlert } from "$lib/index";
</script>

<div class="p-8">
  <Alert alertId="alert-blue">
    A simple info alert without a close button.
  </Alert>

  <Alert alertId="alert-gray" color="gray" closeBtn="true">
    A simple info alert with a close button.
  </Alert>

  <Alert alertId="alert-green" color="green" closeBtn="true">
    A simple info alert with a close button.
  </Alert>

  <Alert alertId="alert-red" color="red" closeBtn="true">
    A simple info alert with a close button.
  </Alert>

  <Alert alertId="alert-purple" color="purple" closeBtn="true">
    A simple info alert with a close button.
  </Alert>

  <Alert alertId="alert-yellow" color="yellow" closeBtn="true">
    A simple info alert with a close button.
  </Alert>

  <Alert alertId="alert-indigo" color="indigo" closeBtn="true">
    A simple info alert with a close button.
  </Alert>

  <Alert alertId="alert-pink" color="pink" closeBtn="true">
    A simple info alert with a close button.
  </Alert>

  <BorderAlert color="blue">
    A border alert without the close button.
  </BorderAlert>

  <BorderAlert color="gray">
    A border alert without the close button.
  </BorderAlert>

  <BorderAlert color="green">
    A border alert without the close button.
  </BorderAlert>

  <BorderAlert alertId="border-alert-1" color="yellow" closeBtn="true">
    A border alert with the close button.
  </BorderAlert>

  <BorderAlert alertId="border-alert-2" color="red" closeBtn="true">
    A border alert with the close button.
  </BorderAlert>

  <BorderAlert alertId="border-alert-3" color="purple" closeBtn="true">
    A border alert with the close button.
  </BorderAlert>

  <BorderAlert alertId="border-alert-4" color="indigo" closeBtn="true">
    A border alert with the close button.
  </BorderAlert>

  <BorderAlert alertId="border-alert-5" color="pink" closeBtn="true">
    A border alert with the close button.
  </BorderAlert>

  <InfoAlert>
    <span slot="header">Info header 1</span>
    InfoAlert without View more and Dismiss button.
  </InfoAlert>

  <InfoAlert
    alertId="info-alert-2"
    color="green"
    closeBtn="true"
    infoLink="/dummy-pages/about"
  >
    <span slot="header">Info header 2</span>
    InfoAlert with View more and Dismiss button.
  </InfoAlert>

  <InfoAlert
    alertId="info-alert-3"
    color="red"
    closeBtn="true"
    infoLink="/dummy-pages/about"
  >
    <span slot="header">Info header 3</span>
    InfoAlert with View more and Dismiss button.
  </InfoAlert>

  <InfoAlert
    alertId="info-alert-4"
    color="yellow"
    closeBtn="true"
    infoLink="/dummy-pages/about"
  >
    <span slot="header">Info header 4</span>
    InfoAlert with View more and Dismiss button.
  </InfoAlert>

  <InfoAlert
    alertId="info-alert-5"
    color="gray"
    closeBtn="true"
    infoLink="/dummy-pages/about"
  >
    <span slot="header">Info header 5</span>
    InfoAlert with View more and Dismiss button.
  </InfoAlert>

  <InfoAlert
    alertId="info-alert-6"
    color="indigo"
    closeBtn="true"
    infoLink="/dummy-pages/about"
  >
    <span slot="header">Info header 4</span>
    InfoAlert with View more and Dismiss button.
  </InfoAlert>

  <InfoAlert
    alertId="info-alert-7"
    color="purple"
    closeBtn="true"
    infoLink="/dummy-pages/about"
  >
    <span slot="header">Info header 4</span>
    InfoAlert with View more and Dismiss button.
  </InfoAlert>

  <InfoAlert
    alertId="info-alert-8"
    color="pink"
    closeBtn="true"
    infoLink="/dummy-pages/about"
  >
    <span slot="header">Info header 4</span>
    InfoAlert with View more and Dismiss button.
  </InfoAlert>
</div>
