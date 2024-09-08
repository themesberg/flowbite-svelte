<script lang="ts">
  import { Radio } from '$lib';
  let inline1 = $state('second');
</script>

<div class="flex gap-3 p-4">
  <Radio bind:group={inline1} name="inline-layout" value="first">Inline 1</Radio>
  <Radio bind:group={inline1} name="inline-layout" value="second">Inline 2 checked</Radio>
  <Radio bind:group={inline1} name="inline-layout" value="third">Inline 3</Radio>
  <Radio bind:group={inline1} name="inline-layout" value="fourth" disabled>Inline disabled</Radio>
</div>
