<script lang="ts">
  import { Radio } from '$lib';
</script>

<div class="grid grid-cols-2 gap-6">
  <div class="rounded border border-gray-200 dark:border-gray-700">
    <Radio name="bordered" labelClass="p-4">Default radio</Radio>
  </div>
  <div class="rounded border border-gray-200 dark:border-gray-700">
    <Radio name="bordered" checked labelClass="p-4">Checked state</Radio>
  </div>
</div>