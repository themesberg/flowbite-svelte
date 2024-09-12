<script lang="ts">
  import { Button, Toast } from '$lib';
  let toastUndoStatus: boolean = $state(true);
  const changeUndoStatus = () => {
    toastUndoStatus = !toastUndoStatus;
  };
</script>

<div class="flex flex-col items-center">
  <div class="mb-4 h-16">
    <Toast bind:toastStatus={toastUndoStatus} iconClass="w-full text-sm font-normal flex items-center justify-between">
      Conversation archived.
      <a class="ms-auto rounded-lg p-1.5 font-medium text-primary-600 hover:bg-primary-100 dark:text-primary-500 dark:hover:bg-gray-700" href="/">Undo</a>
    </Toast>
  </div>
  <Button class="w-36" disabled={toastUndoStatus ? true : false} onclick={changeUndoStatus}>Open toast</Button>
</div>
