<script lang="ts">
  import type { Snippet } from "svelte";
  import { setSimpleContext, type SimpleState } from "./SimpleContext";

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();

  // Create reactive state with explicit tracking
  let hidden = $state(true);

  const simpleState: SimpleState = {
    get hidden() {
      return hidden;
    },
    set hidden(value: boolean) {
      hidden = value;
    }
  };

  setSimpleContext(simpleState);
</script>

<div data-testid="wrapper">
  {@render children()}
</div>
