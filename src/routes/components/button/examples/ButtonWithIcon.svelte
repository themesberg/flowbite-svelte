<script lang="ts">
  import { Button } from '$lib';
  import { ShoppingBagSolid, ArrowRightOutline } from 'flowbite-svelte-icons';
</script>

<div class="flex flex-wrap gap-2">
  <Button><ShoppingBagSolid class="me-2 h-4 w-4" />Buy Now</Button>
  <Button>Choose Plan<ArrowRightOutline class="ms-2 h-5 w-5" /></Button>
</div>
