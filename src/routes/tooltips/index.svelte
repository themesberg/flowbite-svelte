<script>
  import { Tooltip, LightTooltip, Button } from "$lib/index";
</script>

<div class="w-full p-8">
  <Tooltip tip="My tooltip here" top>
    <Button />
  </Tooltip>
</div>
<div class="w-full p-8">
  <Tooltip tip="My tooltip here" bottom>
    <Button />
  </Tooltip>
</div>
<div class="w-full p-8">
  <LightTooltip tip="My tooltip here" bottom>
    <Button />
  </LightTooltip>
</div>
<div class="w-full p-16">
  <LightTooltip tip="My tooltip here" right>
    <Button />
  </LightTooltip>
</div>
<div class="w-full pl-80">
  <Tooltip tip="My tooltip very long tip here and there and more." right>
    <Button />
  </Tooltip>
</div>
<div class="w-full pl-80">
  <Tooltip tip="My tooltip very long tip here and there and more." top>
    <Button />
  </Tooltip>
</div>
<div class="w-full pl-80">
  <Tooltip tip="My tooltip." left>
    <Button />
  </Tooltip>
</div>
<div class="w-full pl-80">
  <Tooltip
    tip="My tooltip very long tip here and there and more."
    left
    bgColor="bg-pink-500"
  >
    <Button />
  </Tooltip>
</div>

<div class="w-full p-8">
  <Tooltip tip="My tooltip here" top>
    <Button />
  </Tooltip>
</div>
