<script lang="ts">
  interface Props {
    inflate?: (power: number) => void;
    deflate?: (power: number) => void;
  }
  let { inflate = () => {}, deflate = () => {} }: Props = $props();
  let power = $state(5);
</script>

<button onclick={() => inflate(power)}>inflate</button>
<button onclick={() => deflate(power)}>deflate</button>
<button onclick={() => power--}>-</button> Pump power: {power}
<button onclick={() => power++}>+</button>
