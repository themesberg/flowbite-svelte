<script lang="ts">
  import { EyeOutline, EyeSlashOutline } from 'flowbite-svelte-icons';
  import { Input, Label, InputAddon, ButtonGroup } from '$lib';
  let show = $state(false);
  let show1 = $state(false);
</script>

<div class="mb-4">
  <Label for="show-password" class="mb-2">Your password</Label>
  <Input id="show-password" type={show ? 'text' : 'password'} placeholder="Your password here" size="lg" class="pl-10">
    {#snippet left()}
      <button onclick={() => (show = !show)} class="pointer-events-auto">
        {#if show}
          <EyeOutline class="h-6 w-6" />
        {:else}
          <EyeSlashOutline class="h-6 w-6" />
        {/if}
      </button>
    {/snippet}
  </Input>
</div>

<div>
  <Label for="show-password1" class="mb-2">Your password</Label>
  <ButtonGroup class="w-full">
    <InputAddon>
      <button onclick={() => (show1 = !show1)}>
        {#if show1}
          <EyeOutline class="h-6 w-6" />
        {:else}
          <EyeSlashOutline class="h-6 w-6" />
        {/if}
      </button>
    </InputAddon>
    <Input id="show-password1" type={show1 ? 'text' : 'password'} placeholder="Your password here" />
  </ButtonGroup>
</div>
