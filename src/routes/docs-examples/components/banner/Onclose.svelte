<script lang="ts">
  import { onMount } from "svelte";
  import { Banner, P, Button } from "flowbite-svelte";

  function useDismissableBanner(storageKey: string) {
    let open = $state(false);
    let hasSeen = $state(false);

    onMount(() => {
      const exists = localStorage.getItem(storageKey);
      hasSeen = Boolean(exists);
      open = !exists;
    });

    function onclose(_event: MouseEvent) {
      localStorage.setItem(storageKey, "true");
      open = false;
      hasSeen = true;
    }

    function reset() {
      localStorage.removeItem(storageKey);
      hasSeen = false;
      open = true; // show banner again
    }

    return {
      get open() {
        return open;
      },
      set open(value) {
        open = value;
      },
      get hasSeen() {
        return hasSeen;
      },
      onclose,
      reset
    };
  }

  const banner = useDismissableBanner("announcement-example");
</script>

{#if banner.hasSeen}
  <div class="flex items-center gap-3 text-sm text-gray-600 mb-3">
    <span>
      Banner is hidden because you dismissed it earlier.
      Remove <code>announcement-example</code> from localStorage to show it again or click the reset button.
    </span>
    <Button size="xs" onclick={banner.reset}>Reset</Button>
  </div>
{/if}

<Banner bind:open={banner.open} onclose={banner.onclose}>
  <P>This keeps announcement banners hidden after dismissal across page refreshes!</P>
</Banner>
