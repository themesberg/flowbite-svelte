<script lang="ts">
  import { Span, P, Tooltip } from '$lib';
</script>

<P>Lorem ipsum dolor sit amet, consectetur adipiscing <Span highlight="red" id="ex-inline">tool tip in a paragraph</Span> elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</P>

<Tooltip triggeredBy="#ex-inline" color="yellow" position="top" class="p-4">Tooltip content</Tooltip>
