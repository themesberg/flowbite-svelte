<script lang="ts">
  import { Button, ThemeProvider } from "$lib";
  import type { ThemeConfig } from "$lib";

  // Test 1: Component without ThemeProvider (should use defaults)
  // Test 2: Component with ThemeProvider (should use custom theme)

  const customTheme: ThemeConfig = {
    button: {
      base: "custom-button-class"
    }
  };
</script>

<div class="space-y-8 p-8">
  <section>
    <h2 class="mb-4 text-xl font-bold">Test 1: Without ThemeProvider</h2>
    <p class="mb-2 text-gray-600">Should render with default theme</p>
    <Button>Default Button</Button>
  </section>

  <section>
    <h2 class="mb-4 text-xl font-bold">Test 2: With ThemeProvider</h2>
    <p class="mb-2 text-gray-600">Should render with custom theme class</p>
    <ThemeProvider theme={customTheme}>
      <Button>Custom Themed Button</Button>
    </ThemeProvider>
  </section>

  <section>
    <h2 class="mb-4 text-xl font-bold">Test 3: Multiple components in provider</h2>
    <p class="mb-2 text-gray-600">All should use custom theme</p>
    <ThemeProvider theme={customTheme}>
      <div class="flex gap-4">
        <Button>Button 1</Button>
        <Button color="blue">Button 2</Button>
        <Button outline>Button 3</Button>
      </div>
    </ThemeProvider>
  </section>
</div>
