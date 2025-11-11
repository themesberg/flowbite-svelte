<script lang="ts">
  import { Toast, ToastContainer, P, Button, Heading } from "flowbite-svelte";
  import { fly } from "svelte/transition";

  type ToastColor = "green" | "red" | "yellow" | "blue";

  interface ToastItem {
    id: number;
    message: string;
    color: ToastColor;
    timeoutId?: ReturnType<typeof setTimeout>;
  }

  let toasts = $state<ToastItem[]>([]);
  let nextId = $state(1);

  const messages = {
    green: "Successfully saved!",
    blue: "New message received",
    yellow: "Please review your changes",
    red: "Operation failed"
  };

  function addToast(color?: ToastColor) {
    const selectedColor = color || (["green", "blue", "yellow", "red"][Math.floor(Math.random() * 4)] as ToastColor);
    const newToast: ToastItem = {
      id: nextId,
      message: messages[selectedColor],
      color: selectedColor
    };

    toasts = [...toasts, newToast];
    nextId++;

    // Auto-dismiss after 5 seconds
    const timeoutId = setTimeout(() => {
      dismissToast(newToast.id);
    }, 5000);
    // Store timeout ID for cleanup
    toasts = toasts.map((t) => (t.id === newToast.id ? { ...t, timeoutId } : t));
  }

  function dismissToast(id: number) {
    // Clear timeout if it exists
    const toast = toasts.find((t) => t.id === id);
    if (toast?.timeoutId) {
      clearTimeout(toast.timeoutId);
    }
    toasts = toasts.filter((toast) => toast.id !== id);
  }

  function handleClose(id: number) {
    return () => {
      dismissToast(id);
    };
  }
</script>

<ToastContainer position="top-right">
  {#each toasts as toast (toast.id)}
    <Toast 
      color={toast.color} 
      dismissable={true} 
      transition={fly} 
      params={{ x: 400, duration: 300 }} 
      class="w-64" 
      onclose={handleClose(toast.id)}
    >
      {toast.message}
    </Toast>
  {/each}
</ToastContainer>

<div class="relative min-h-screen p-8">
  <div class="mx-auto max-w-2xl">
    <div class="rounded-xl p-8 shadow-lg">
      <div class="mb-6 flex items-center gap-3">
        <svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        <Heading tag="h1" class="text-3xl">Toast Notifications Demo</Heading>
      </div>
      <P class="mb-8">Click the buttons below to trigger toast notifications. Each toast will appear in the top-right corner and automatically dismiss after 5 seconds.</P>
      <div class="space-y-4">
        <div class="grid grid-cols-2 gap-3">
          <Button onclick={() => addToast("green")} color="green">Success Toast</Button>
          <Button onclick={() => addToast("blue")} color="blue">Info Toast</Button>
          <Button onclick={() => addToast("yellow")} color="yellow">Warning Toast</Button>
          <Button onclick={() => addToast("red")} color="red">Error Toast</Button>
        </div>
        <Button onclick={() => addToast()} color="dark" class="w-full">Random Toast</Button>
      </div>
    </div>
  </div>
</div>