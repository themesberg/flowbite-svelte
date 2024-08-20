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