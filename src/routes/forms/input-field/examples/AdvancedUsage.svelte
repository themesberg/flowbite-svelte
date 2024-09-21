<script>
  import { Input, Helper } from '$lib';
  let value = $state();
</script>

<Input placeholder='Your lucky number'>
  {#snippet children(prop)}
  <input type="number" bind:value class={prop.class} {...prop}/>
  {/snippet}
</Input>
<Helper class="mt-2">Your lucky number: {value}</Helper>