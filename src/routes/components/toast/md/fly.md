<Toast transition={fly} params={{ x: 200 }} color="green">
  {#snippet icon()}
  <DownloadOutline class="w-5 h-5" />
  {/snippet}
  Transition type: fly right
</Toast>

<Toast transition={fly} params={{ y: 200 }} color="green">
  {#snippet icon()}
  <DownloadOutline class="w-5 h-5" />
  {/snippet}
  Transition type: fly down
</Toast>