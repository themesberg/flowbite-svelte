<script lang="ts">
  import { Radio } from 'svelte-5-ui-lib';
  let inline1 = $state('second');
</script>
<div class="flex gap-3">
    <Radio group={inline1} name="inline-layout" value="first">Inline 1</Radio>
    <Radio group={inline1} name="inline-layout" value="second">Inline 2 checked</Radio>
    <Radio group={inline1} name="inline-layout" value="third">Inline 3</Radio>
    <Radio group={inline1} name="inline-layout" value="fourth" disabled>Inline disabled</Radio>
</div>