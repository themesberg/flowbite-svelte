<script lang="ts">
  import Hr from "$lib/typography/hr/Hr.svelte";
</script>

<Hr
  hrProps={{
    id: "custom-hr-id",
    "data-custom": "custom-value",
    title: "Custom HR title",
    "aria-label": "Custom HR label"
  }}
/>

<Hr divProps={{ "data-testid": "wrapper-div", id: "wrapper-id" }} hrProps={{ "data-testid": "hr-element", id: "hr-id" }}>
  <span data-testid="custom-content">Custom content</span>
</Hr>
