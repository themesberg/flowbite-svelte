<script lang="ts">
  import Span from "$lib/typography/span/Span.svelte";
</script>

<Span italic underline data-testid="combined-italic-underline">Italic and underline</Span>
<Span uppercase highlight="blue" data-testid="combined-uppercase-highlight">Uppercase with highlight</Span>
<Span italic gradient="purpleToBlue" data-testid="combined-italic-gradient">Italic with gradient</Span>
<Span decoration="wavy" decorationColor="red" decorationThickness="2" data-testid="combined-decoration">Wavy red decoration</Span>
<Span italic underline uppercase highlight="green" data-testid="combined-multiple">Multiple variants</Span>
