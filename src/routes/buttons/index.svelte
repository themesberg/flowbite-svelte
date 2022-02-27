<script>
  import { Button } from "$lib/index";
  function handleClick() {
    alert("Button Clicked");
  }
</script>

<div class="max-w-4xl mx-auto">
  <div class="container mx-auto p-8 m-4">
    <h1 class="px-8  text-2xl">Text size xs</h1>
    <h2 class="px-8 m-4 text-xl">Default</h2>
    <Button name="Button text-xs" textSize="text-xs" on:click={handleClick} />
    <Button name="Button text-xs" textSize="text-xs" type="dark" />
    <Button name="Button text-xs" textSize="text-xs" type="light" />
    <Button name="Button text-xs" textSize="text-xs" type="green" />
    <Button name="Button text-xs" textSize="text-xs" type="red" />
    <Button name="Button text-xs" textSize="text-xs" type="yellow" />
    <Button name="Button text-xs" textSize="text-xs" type="purple" />

    <h2 class="px-8 m-4 text-xl">Rounded</h2>
    <Button name="Button text-xs" textSize="text-xs" rounded="true" />
    <Button
      name="Button text-xs"
      textSize="text-xs"
      type="dark"
      rounded="true"
    />
    <Button
      name="Button text-xs"
      textSize="text-xs"
      type="light"
      rounded="true"
    />
    <Button
      name="Button text-xs"
      textSize="text-xs"
      type="green"
      rounded="true"
    />
    <Button
      name="Button text-xs"
      textSize="text-xs"
      type="red"
      rounded="true"
    />
    <Button
      name="Button text-xs"
      textSize="text-xs"
      type="yellow"
      rounded="true"
    />
    <Button
      name="Button text-xs"
      textSize="text-xs"
      type="purple"
      rounded="true"
    />

    <h2 class="px-8 m-4 text-xl">Outlined</h2>
    <Button name="Button text-xs" textSize="text-xs" type="blue-outline" />
    <Button name="Button text-xs" textSize="text-xs" type="dark-outline" />
    <Button name="Button text-xs" textSize="text-xs" type="green-outline" />
    <Button name="Button text-xs" textSize="text-xs" type="red-outline" />
    <Button name="Button text-xs" textSize="text-xs" type="red-outline" />
    <Button name="Button text-xs" textSize="text-xs" type="purple-outline" />
  </div>
  <div class="container mx-auto p-8 m-4">
    <h1 class="px-8  text-2xl">Text size sm</h1>
    <h2 class="px-8 m-4 text-xl">Default</h2>
    <Button name="Button" textSize="text-sm" />
    <Button name="Button" textSize="text-sm" type="dark" />
    <Button name="Button" textSize="text-sm" type="light" />
    <Button name="Button" textSize="text-sm" type="red" />
    <Button name="Button" textSize="text-sm" type="green" />
    <Button name="Button" textSize="text-sm" type="yellow" />
    <Button name="Button" textSize="text-sm" type="purple" />

    <h2 class="px-8 m-4 text-xl">Rounded</h2>
    <Button name="Button" textSize="text-sm" rounded="true" />
    <Button name="Button" textSize="text-sm" type="dark" rounded="true" />
    <Button name="Button" textSize="text-sm" type="light" rounded="true" />
    <Button name="Button" textSize="text-sm" type="green" rounded="true" />
    <Button name="Button" textSize="text-sm" type="red" rounded="true" />
    <Button name="Button" textSize="text-sm" type="yellow" rounded="true" />
    <Button name="Button" textSize="text-sm" type="purple" rounded="true" />

    <h2 class="px-8 m-4 text-xl">Outlined</h2>
    <Button name="Button" textSize="text-sm" type="blue-outline" />
    <Button name="Button" textSize="text-sm" type="dark-outline" />
    <Button name="Button" textSize="text-sm" type="green-outline" />
    <Button name="Button" textSize="text-sm" type="red-outline" />
    <Button name="Button" textSize="text-sm" type="red-outline" />
    <Button name="Button" textSize="text-sm" type="purple-outline" />
  </div>

  <div class="container mx-auto p-8 m-4">
    <h1 class="px-8  text-2xl">Text size base</h1>
    <h2 class="px-8 m-4 text-xl">Default</h2>
    <Button name="Button" textSize="text-base" />
    <Button name="Button" textSize="text-base" type="dark" />
    <Button name="Button" textSize="text-base" type="light" />
    <Button name="Button" textSize="text-base" type="red" />
    <Button name="Button" textSize="text-base" type="green" />
    <Button name="Button" textSize="text-base" type="yellow" />
    <Button name="Button" textSize="text-base" type="purple" />

    <h2 class="px-8 m-4 text-xl">Rounded</h2>
    <Button name="Button" textSize="text-base" rounded="true" />
    <Button name="Button" textSize="text-base" type="dark" rounded="true" />
    <Button name="Button" textSize="text-base" type="light" rounded="true" />
    <Button name="Button" textSize="text-base" type="green" rounded="true" />
    <Button name="Button" textSize="text-base" type="red" rounded="true" />
    <Button name="Button" textSize="text-base" type="yellow" rounded="true" />
    <Button name="Button" textSize="text-base" type="purple" rounded="true" />

    <h2 class="px-8 m-4 text-xl">Outlined</h2>
    <Button name="Button" textSize="text-base" type="blue-outline" />
    <Button name="Button" textSize="text-base" type="dark-outline" />
    <Button name="Button" textSize="text-base" type="green-outline" />
    <Button name="Button" textSize="text-base" type="red-outline" />
    <Button name="Button" textSize="text-base" type="red-outline" />
    <Button name="Button" textSize="text-base" type="purple-outline" />
  </div>
</div>
