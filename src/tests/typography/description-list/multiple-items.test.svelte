<script lang="ts">
  import DescriptionList from "$lib/typography/description-list/DescriptionList.svelte";
</script>

<dl>
  <DescriptionList tag="dt" data-testid="term-1">First term</DescriptionList>
  <DescriptionList tag="dd" data-testid="def-1">First definition</DescriptionList>
  <DescriptionList tag="dt" data-testid="term-2">Second term</DescriptionList>
  <DescriptionList tag="dd" data-testid="def-2">Second definition</DescriptionList>
</dl>
