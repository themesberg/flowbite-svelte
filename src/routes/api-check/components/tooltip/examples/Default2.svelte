<script>
  import { Tooltip, Button, P } from "flowbite-svelte";
</script>

<Button id="specific-button-anywhere-on-page">Default tooltip</Button>
<P>hi mom</P>
<P>lorem ipsum, content blah blah, other stuff</P>
<Tooltip triggeredBy="#specific-button-anywhere-on-page">Tooltip content</Tooltip>