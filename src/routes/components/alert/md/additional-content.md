<Alert>
  <div class="flex items-center gap-3">
    {#snippet icon()}
    <InfoCircleSolid slot="icon" class="w-4 h-4" />
    {/snippet}
    <span class="text-lg font-medium">This is a info alert</span>
  </div>
  <p class="mt-2 mb-4 text-sm">More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <div class="flex gap-2">
    <Button size="xs"><EyeSolid class="w-4 h-4 me-2" />View more</Button>
    <Button size="xs" outline>Go to Home</Button>
  </div>
</Alert>
<Alert color="green">
  <div class="flex items-center gap-3">
    {#snippet icon()}
    <InfoCircleSolid slot="icon" class="w-4 h-4" />
    {/snippet}
    <span class="text-lg font-medium">This is a info alert</span>
  </div>
  <p class="mt-2 mb-4 text-sm">More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <div class="flex gap-2">
    <Button size="xs" color="green"><EyeSolid class="w-4 h-4 me-2" />View more</Button>
    <Button size="xs" outline color="green">Go to Home</Button>
  </div>
</Alert>