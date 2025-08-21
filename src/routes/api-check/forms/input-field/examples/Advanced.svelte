<script lang="ts">
  import { Input } from "flowbite-svelte";
  let value = $state(5);
</script>

<Input>
  {#snippet left()}#{/snippet}
  {#snippet children(props)}
    <input type="number" {...props} bind:value class={[props.class, "ps-9"]} />
  {/snippet}
</Input>