<script lang="ts">
  import { onMount } from "svelte";
  import { Banner, P } from "flowbite-svelte";

  // reusable logic for dismissable banner with localStorage
  function useDismissableBanner(storageKey: string) {
    let open = $state(false);

    onMount(() => {
      open = !localStorage.getItem(storageKey);
    });

    function onclose(event: MouseEvent) {
      localStorage.setItem(storageKey, "true");
      open = false;
    }

    return {
      get open() {
        return open;
      },
      set open(value) {
        open = value;
      },
      onclose
    };
  }

  const banner = useDismissableBanner("announcement-example");
</script>

<Banner bind:open={banner.open} onclose={banner.onclose}>
  <P>This keeps announcement banners hidden after dismissal across page refreshes!</P>
</Banner>
