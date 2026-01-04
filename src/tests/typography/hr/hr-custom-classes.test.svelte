<script lang="ts">
  import Hr from "$lib/typography/hr/Hr.svelte";
</script>

<Hr
  data-testid="custom-classes-hr"
  class="custom-hr-class"
  classes={{
    wrapper: "custom-wrapper-class",
    content: "custom-content-class"
  }}
>
  <span data-testid="styled-content">Styled content</span>
</Hr>
