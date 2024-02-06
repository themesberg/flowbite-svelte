<Toast transition={slide}>
  {#snippet icon()}
  <CircleCheckSolid class="w-5 h-5" />
  {/snippet}
  Transition type: slide
</Toast>

<Toast transition={slide} params={{ delay: 250, duration: 300, easing: quintOut }} >
  {#snippet icon()}
  <CircleCheckSolid class="w-5 h-5" />
  {/snippet}
  Transition type: slide, delay: 250, duration: 300, easing: quintOut
</Toast>

<Toast transition={slide} params={{ delay: 250, duration: 2000, easing: elasticOut }}>
  {#snippet icon()}
  <CircleCheckSolid class="w-5 h-5" />
  {/snippet}
  Transition type: slide, delay: 250, duration: 2000, easing: elasticOut
</Toast>