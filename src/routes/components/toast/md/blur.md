<Toast transition={blur} color="purple" params={{ amount: 10 }}>
  {#snippet icon()}
  <BellOutline class="w-5 h-5" />
  {/snippet}
  Transition type: blur, amount: 10
</Toast>

<Toast transition={blur} color="purple" params={{ amount: 50, delay: 1000 }}>
  {#snippet icon()}
  <BellOutline class="w-5 h-5" />
  {/snippet}
  Transition type: blur, amount: 50, delay 1000
</Toast>