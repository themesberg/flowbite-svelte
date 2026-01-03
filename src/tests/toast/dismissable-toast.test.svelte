<script lang="ts">
  import Toast from "$lib/toast/Toast.svelte";
</script>

<Toast data-testid="dismissable-toast" dismissable={true}>Dismissable toast</Toast>

<Toast data-testid="non-dismissable-toast" dismissable={false}>Non-dismissable toast</Toast>
