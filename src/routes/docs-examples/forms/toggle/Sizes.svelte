<script lang="ts">
  import { Toggle } from "flowbite-svelte";
  const customSize = "w-16 h-10 after:top-1 after:left-[4px]  after:h-8 after:w-8";
</script>

<Toggle size="small">Small toggle</Toggle>
<Toggle size="default" checked>Default toggle</Toggle>
<Toggle size="large" checked>Large toggle</Toggle>
<Toggle size={undefined} classes={{ track: customSize }}>Custom toggle</Toggle>
