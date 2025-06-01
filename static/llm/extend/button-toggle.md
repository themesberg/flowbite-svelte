# Svelte Button Toggle


## Setup

```svelte
<script>
  import { ButtonToggleGroup, ButtonToggle } from "flowbite-svelte";
</script>
```

## Default single and multiple

```svelte
<script lang="ts">
  import { ButtonToggleGroup, ButtonToggle } from "flowbite-svelte";

  let singleValue = $state<string | null>(null);
  let multiValues = $state<string[]>([]);

  function handleSingleSelect(value: string | null) {
    singleValue = value;
    console.log("Single selection:", value);
  }

  function handleMultiSelect(values: string[]) {
    multiValues = values;
    console.log("Multi selection:", values);
  }
</script>

<h3 class="mb-2 text-lg font-medium dark:text-white">Single Selection</h3>
<ButtonToggleGroup onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>
<p class="mt-2 dark:text-white">Selected: {singleValue || "None"}</p>

<h3 class="mb-2 text-lg font-medium dark:text-white">Multi Selection</h3>
<ButtonToggleGroup multiSelect={true} onSelect={handleMultiSelect}>
  <ButtonToggle value="one" selected={multiValues.includes("one")}>One</ButtonToggle>
  <ButtonToggle value="two" selected={multiValues.includes("two")}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={multiValues.includes("three")}>Three</ButtonToggle>
</ButtonToggleGroup>
<p class="mt-2 dark:text-white">Selected: {multiValues.length ? multiValues.join(", ") : "None"}</p>
```

## Button color

You can use `primary`, `secondary`, `gray`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`.

```svelte
<script lang="ts">
  import { ButtonToggleGroup, ButtonToggle } from "flowbite-svelte";

  let singleValue = $state<string | null>(null);
  let multiValues = $state<string[]>([]);

  function handleSingleSelect(value: string | null) {
    singleValue = value;
    console.log("Single selection:", value);
  }
</script>

<p class="mt-2 dark:text-white">Selected: {singleValue || "None"}</p>
<ButtonToggleGroup onSelect={handleSingleSelect}>
  <ButtonToggle color="red" value="red" selected={singleValue === "red"}>Red</ButtonToggle>
  <ButtonToggle color="green" value="green" selected={singleValue === "green"}>Green</ButtonToggle>
  <ButtonToggle color="blue" value="blue" selected={singleValue === "blue"}>Blue</ButtonToggle>
  <ButtonToggle color="gray" value="gray" selected={singleValue === "gray"}>Gray</ButtonToggle>
  <ButtonToggle color="lime" value="lime" selected={singleValue === "lime"}>Lime</ButtonToggle>
  <ButtonToggle color="purple" value="purple" selected={singleValue === "purple"}>Purple</ButtonToggle>
</ButtonToggleGroup>
```

## Group color

```svelte
<script lang="ts">
  import { ButtonToggleGroup, ButtonToggle } from "flowbite-svelte";

  let singleValue = $state<string | null>(null);

  function handleSingleSelect(value: string | null) {
    singleValue = value;
    console.log("Single selection:", value);
  }
</script>

<ButtonToggleGroup color="secondary" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>

<ButtonToggleGroup color="gray" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>

<ButtonToggleGroup color="red" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>

<ButtonToggleGroup color="orange" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>

<ButtonToggleGroup color="amber" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>

<ButtonToggleGroup color="yellow" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>

<ButtonToggleGroup color="lime" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>

<ButtonToggleGroup color="green" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>

<ButtonToggleGroup color="emerald" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>

<ButtonToggleGroup color="teal" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>

<ButtonToggleGroup color="cyan" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>

<ButtonToggleGroup color="sky" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>

<ButtonToggleGroup color="blue" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>

<ButtonToggleGroup color="indigo" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>

<ButtonToggleGroup color="violet" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>

<ButtonToggleGroup color="purple" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>

<ButtonToggleGroup color="fuchsia" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>

<ButtonToggleGroup color="pink" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>

<ButtonToggleGroup color="rose" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>
```

## Rounded size

```svelte
<script lang="ts">
  import { ButtonToggleGroup, ButtonToggle } from "flowbite-svelte";

  let singleValue = $state<string | null>(null);

  function handleSingleSelect(value: string | null) {
    singleValue = value;
    console.log("Single selection:", value);
  }
</script>

<div>
  <h3 class="mb-2 text-lg font-medium dark:text-white">Rounded size: sm</h3>
  <ButtonToggleGroup onSelect={handleSingleSelect} roundedSize="sm">
    <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
    <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
    <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
  </ButtonToggleGroup>
</div>

<div>
  <h3 class="mb-2 text-lg font-medium dark:text-white">Rounded size: md</h3>
  <ButtonToggleGroup onSelect={handleSingleSelect} roundedSize="md">
    <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
    <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
    <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
  </ButtonToggleGroup>
</div>

<div>
  <h3 class="mb-2 text-lg font-medium dark:text-white">Rounded size: lg</h3>
  <ButtonToggleGroup onSelect={handleSingleSelect} roundedSize="lg">
    <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
    <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
    <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
  </ButtonToggleGroup>
</div>

<div>
  <h3 class="mb-2 text-lg font-medium dark:text-white">Rounded size: xl</h3>
  <ButtonToggleGroup onSelect={handleSingleSelect} roundedSize="xl">
    <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
    <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
    <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
  </ButtonToggleGroup>
</div>

<div>
  <h3 class="mb-2 text-lg font-medium dark:text-white">Rounded size: full</h3>
  <ButtonToggleGroup onSelect={handleSingleSelect} roundedSize="full">
    <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
    <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
    <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
  </ButtonToggleGroup>
</div>
```

## ctxBtnClass, ctxIconClass, class

`ButtonToggle`'s `class` takes precedence over `ctxBtnClass`.

```svelte
<script lang="ts">
  import { ButtonToggleGroup, ButtonToggle } from "flowbite-svelte";

  let singleValue = $state<string | null>(null);

  function handleSingleSelect(value: string | null) {
    singleValue = value;
    console.log("Single selection:", value);
  }
</script>

<ButtonToggleGroup onSelect={handleSingleSelect} color="none" ctxIconClass="text-white" ctxBtnClass="data-[selected=true]:bg-rose-400 data-[selected=false]:hover:bg-rose-300">
  <ButtonToggle class="data-[selected=false]:hover:bg-green-300 data-[selected=true]:bg-green-400" value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>
<p class="mt-2 dark:text-white">Selected: {singleValue || "None"}</p>
```

## Custom icon with color="none"

```svelte
<script lang="ts">
  import { ButtonToggleGroup, ButtonToggle } from "flowbite-svelte";
  import { CheckCircleOutline, BadgeCheckOutline, FileCheckOutline } from "flowbite-svelte-icons";

  let singleValue = $state<string | null>(null);

  function handleSingleSelect(value: string | null) {
    singleValue = value;
    console.log("Single selection:", value);
  }
</script>

<ButtonToggleGroup onSelect={handleSingleSelect} color="none">
  <ButtonToggle value="one" selected={singleValue === "one"}>
    {#snippet iconSlot()}
      <CheckCircleOutline class="-mr-3 text-green-400" />
    {/snippet}
    One
  </ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>
    {#snippet iconSlot()}
      <BadgeCheckOutline class="-mr-3 text-red-400" />
    {/snippet}
    Two
  </ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>
    {#snippet iconSlot()}
      <FileCheckOutline class="-mr-3 text-purple-400" />
    {/snippet}
    Three
  </ButtonToggle>
</ButtonToggleGroup>
<p class="mt-2 dark:text-white">Selected: {singleValue || "None"}</p>
```

## See also

- [Button toggle](https://flowbite-svelte.com/llm/extend/button-toggle.md)
- [Button group](https://flowbite-svelte.com/llm/components/button-group.md)
- [List group](https://flowbite-svelte.com/llm/components/list-group.md)
- [Radio#radiobutton](https://flowbite-svelte.com/llm/forms/radio#radiobutton.md)
- [Checkbox#checkboxbutton](https://flowbite-svelte.com/llm/forms/checkbox#checkboxbutton.md)

## Component data

### ButtonToggle

#### Types

[ButtonToggleProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L369)

#### Props

- value
- selected: false
- children
- iconSlot
- color
- class: className
- iconClass
- txtClass
- contentClass

