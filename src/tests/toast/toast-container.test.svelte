<script lang="ts">
  import ToastContainer from "$lib/toast/ToastContainer.svelte";
  import Toast from "$lib/toast/Toast.svelte";
</script>

<ToastContainer data-testid="container-top-left" position="top-left">
  <Toast>Top left container</Toast>
</ToastContainer>

<ToastContainer data-testid="container-top-right" position="top-right">
  <Toast>Top right container</Toast>
</ToastContainer>

<ToastContainer data-testid="container-bottom-left" position="bottom-left">
  <Toast>Bottom left container</Toast>
</ToastContainer>

<ToastContainer data-testid="container-bottom-right" position="bottom-right">
  <Toast>Bottom right container</Toast>
</ToastContainer>
