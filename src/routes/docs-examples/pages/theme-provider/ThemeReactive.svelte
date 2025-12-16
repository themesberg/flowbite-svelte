<script lang="ts">
  import { ThemeProvider, Button, Card, Alert } from "flowbite-svelte";

  type ThemeColor = "purple" | "green" | "blue" | "red";

  let selectedColor = $state<ThemeColor>("purple");
  let buttonWidth = $state("w-48");

  // Make themes a derived value so it reacts to buttonWidth changes
  const themes = $derived({
    purple: {
      button: { base: `${buttonWidth} bg-purple-500 hover:bg-purple-600` },
      card: { base: "bg-purple-100 w-72" }
    },
    green: {
      button: { base: `${buttonWidth} bg-green-500 hover:bg-green-600` },
      card: { base: "bg-green-100 w-72" }
    },
    blue: {
      button: { base: `${buttonWidth} bg-blue-500 hover:bg-blue-600` },
      card: { base: "bg-blue-100 w-72" }
    },
    red: {
      button: { base: `${buttonWidth} bg-red-500 hover:bg-red-600` },
      card: { base: "bg-red-100 w-72" }
    }
  });

  const currentTheme = $derived(themes[selectedColor]);

  const colors: ThemeColor[] = ["purple", "green", "blue", "red"];
  const colorClasses: Record<ThemeColor, string> = {
    purple: "bg-purple-700",
    green: "bg-green-700",
    blue: "bg-blue-700",
    red: "bg-red-700"
  };
</script>

<div class="mx-auto max-w-4xl p-8">
  <h1 class="mb-6 text-3xl font-bold">ThemeProvider Reactivity Test</h1>

  <Alert class="mb-6">
    <span class="font-medium">Testing Instructions:</span>
    <ul class="mt-2 list-inside list-disc">
      <li>Click different color buttons to change the theme</li>
      <li>Toggle button width to see reactive updates</li>
      <li>Both button and card should update immediately</li>
    </ul>
  </Alert>

  <div class="mb-6 space-y-4">
    <div>
      <p class="mb-2 text-sm font-semibold">Color Theme:</p>
      <div class="flex flex-wrap gap-2">
        {#each colors as color}
          <button
            class="rounded px-4 py-2 capitalize transition-colors {selectedColor === color ? `${colorClasses[color]} text-white` : 'bg-gray-200 hover:bg-gray-300'}"
            onclick={() => (selectedColor = color)}
          >
            {color}
          </button>
        {/each}
      </div>
    </div>

    <div>
      <p class="mb-2 text-sm font-semibold">Button Width:</p>
      <div class="flex gap-2">
        <button class="rounded px-4 py-2 {buttonWidth === 'w-32' ? 'bg-gray-700 text-white' : 'bg-gray-200 hover:bg-gray-300'}" onclick={() => (buttonWidth = "w-32")}>Small (w-32)</button>
        <button class="rounded px-4 py-2 {buttonWidth === 'w-48' ? 'bg-gray-700 text-white' : 'bg-gray-200 hover:bg-gray-300'}" onclick={() => (buttonWidth = "w-48")}>Medium (w-48)</button>
        <button class="rounded px-4 py-2 {buttonWidth === 'w-64' ? 'bg-gray-700 text-white' : 'bg-gray-200 hover:bg-gray-300'}" onclick={() => (buttonWidth = "w-64")}>Large (w-64)</button>
      </div>
    </div>
  </div>

  <div class="mb-4 rounded border bg-gray-50 p-4">
    <p class="text-sm">
      <strong>Current State:</strong>
      <br />
      Color:
      <span class="font-mono text-blue-600">{selectedColor}</span>
      <br />
      Button Width:
      <span class="font-mono text-blue-600">{buttonWidth}</span>
    </p>
  </div>

  <ThemeProvider theme={currentTheme}>
    <div class="space-y-6">
      <div>
        <h3 class="mb-2 text-lg font-semibold">Themed Button:</h3>
        <Button>Click Me!</Button>
      </div>

      <div>
        <h3 class="mb-2 text-lg font-semibold">Themed Card:</h3>
        <Card class="p-6">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Reactive Theme Card</h5>
          <p class="leading-tight font-normal text-gray-700 dark:text-gray-400">
            This card's background should change reactively when you select different color themes above. The button should also update its color and width based on your selections.
          </p>
          <p class="mt-4 text-sm text-gray-600">If you see the colors and sizes changing instantly, the ThemeProvider reactivity is working correctly! 🎉</p>
        </Card>
      </div>
    </div>
  </ThemeProvider>
</div>
