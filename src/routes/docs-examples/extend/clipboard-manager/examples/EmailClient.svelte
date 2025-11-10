<script lang="ts">
  import { ClipboardManager } from "flowbite-svelte";
  
  let responses = [
    { id: 1, text: "Thank you for contacting us!", pinned: true, timestamp: Date.now() },
    { id: 2, text: "Your order has been shipped.", pinned: true, timestamp: Date.now() - 1000 },
    { id: 3, text: "We appreciate your feedback.", pinned: true, timestamp: Date.now() - 2000 }
  ];
</script>

<div id="email-body">
    <textarea placeholder="Compose email..." class="w-full"></textarea>
  </div>


<ClipboardManager 
  items={responses}
  enableSelectionMenu={true}
  selectionTarget="#email-body"
  placeholder="Save new response..."
  storageKey="email-client"
/>