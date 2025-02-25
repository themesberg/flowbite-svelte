<script lang="ts">
  import { Span, P, Tooltip } from "$lib";
</script>

<P class="mt-20">Lorem ipsum dolor sit amet, consectetur adipiscing <Span highlight="red" id="ex-inline">tool tip in a paragraph</Span> elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</P>

<Tooltip triggeredBy="#ex-inline" color="yellow" placement="top" class="p-4">Tooltip content</Tooltip>
