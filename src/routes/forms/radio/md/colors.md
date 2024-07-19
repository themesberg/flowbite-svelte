<p class="mb-4 font-semibold {colors}">Select color</p>
<div class="flex gap-4">
  <Radio bind:group={colors} color="red" value="text-red-500">Red</Radio>
  <Radio bind:group={colors} color="green" value="text-green-500">Green</Radio>
  <Radio bind:group={colors} color="purple" value="text-purple-500">Purple</Radio>
  <Radio bind:group={colors} color="teal" value="text-teal-500">Teal</Radio>
  <Radio bind:group={colors} color="yellow" value="text-yellow-500">Yellow</Radio>
  <Radio bind:group={colors} color="orange" value="text-orange-500">Orange</Radio>
</div>