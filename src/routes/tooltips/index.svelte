<script>
  import { Tooltip, Button } from "$lib/index";
</script>

<div class="w-full p-8">
  <Tooltip tip="My tooltip here" top>
    <Button />
  </Tooltip>
</div>
<div class="w-full p-8">
  <Tooltip tip="My tooltip here" bottom bgColor="bg-yellow-500">
    <Button />
  </Tooltip>
</div>
<div class="w-full p-16">
  <Tooltip tip="My tooltip here" right bgColor="bg-indigo-700">
    <Button />
  </Tooltip>
</div>
<div class="w-full pl-80">
  <Tooltip tip="My tooltip." left bgColor="bg-pink-500">
    <Button />
  </Tooltip>
</div>

<div class="w-full p-8">
  <Tooltip tip="My tooltip here" top>
    <Button />
  </Tooltip>
</div>
