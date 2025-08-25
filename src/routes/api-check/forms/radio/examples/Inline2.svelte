<script>
  import { Radio } from "flowbite-svelte";
  let inline2 = $state("third");
</script>

<Radio bind:group={inline2} inline value="first" class="me-2">Inline 1</Radio>
<Radio bind:group={inline2} inline value="second" class="me-2">Inline 2</Radio>
<Radio bind:group={inline2} inline value="third" class="me-2">Inline checked</Radio>
<Radio bind:group={inline2} inline value="fourth" class="me-2" disabled>Inline disabled</Radio>
