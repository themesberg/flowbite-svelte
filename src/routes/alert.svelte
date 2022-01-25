<script>
  import { Alert, BorderAlert, InfoAlert } from "$lib/index";
</script>

<div class="p-8">
  <Alert alertId="alert-blue">
    A simple info alert with an <a
      href="/"
      class="font-semibold underline hover:text-blue-800 dark:hover:text-blue-900"
      >example link</a
    >. Give it a click if you like.
  </Alert>

  <Alert alertId="alert-red" color="red">
    A simple info alert with an <a
      href="/"
      class="font-semibold underline hover:text-blue-800 dark:hover:text-blue-900"
      >example link</a
    >. Give it a click if you like.
  </Alert>

  <BorderAlert>
    A simple info alert with an <a
      href="/"
      class="font-semibold underline hover:text-blue-800">example link</a
    >. Give it a click if you like.
  </BorderAlert>

  <InfoAlert>
    <span slot="header">My info header</span>
    <span slot="content">More info here</span>
  </InfoAlert>
</div>
