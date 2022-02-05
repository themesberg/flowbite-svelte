<script>
  import { Button } from "$lib/index";
  import Prism from "prismjs";
  import "prismjs/themes/prism.css";
</script>

<div class="max-w-3xl mx-auto">
  <div class="container mt-4 flex flex-wrap mx-auto">
    <h1 class="text-3xl w-full">Buttons: Setup</h1>

    <p>Import Button in the script tag.</p>

    <div class="code">
      {@html Prism.highlight(
        `
import { Button } from from "svlte-flow";
      `,
        Prism.languages["javascript"]
      )}
    </div>
  </div>

  <div class="container mt-4 flex flex-wrap mx-auto">
    <h1 class="text-3xl w-full">Size xs Default Buttons</h1>

    <div class="code">
      {@html Prism.highlight(
        `
<Button name="Button xs" size="xs" />
<Button name="Button xs" size="xs" type="dark" />
<Button name="Button xs" size="xs" type="light" />
<Button name="Button xs" size="xs" type="green" />
<Button name="Button xs" size="xs" type="red" />
<Button name="Button xs" size="xs" type="yellow" />
<Button name="Button xs" size="xs" type="purple" />
      `,
        Prism.languages["javascript"]
      )}
    </div>
  </div>

  <div class="container mt-4  mx-auto">
    <Button name="Button xs" size="xs" />
    <Button name="Button xs" size="xs" type="dark" />
    <Button name="Button xs" size="xs" type="light" />
    <Button name="Button xs" size="xs" type="green" />
    <Button name="Button xs" size="xs" type="red" />
    <Button name="Button xs" size="xs" type="yellow" />
    <Button name="Button xs" size="xs" type="purple" />
  </div>

  <div class="container mt-4 flex flex-wrap mx-auto">
    <h1 class="text-3xl w-full">Size xs Rounded Buttons</h1>

    <div class="code">
      {@html Prism.highlight(
        `
<Button name="Button xs" size="xs" rounded="true" />
<Button name="Button xs" size="xs" type="dark" rounded="true" />
<Button name="Button xs" size="xs" type="light" rounded="true" />
<Button name="Button xs" size="xs" type="green" rounded="true" />
<Button name="Button xs" size="xs" type="red" rounded="true" />
<Button name="Button xs" size="xs" type="yellow" rounded="true" />
<Button name="Button xs" size="xs" type="purple" rounded="true" />
      `,
        Prism.languages["javascript"]
      )}
    </div>
  </div>

  <div class="container mt-4  mx-auto">
    <Button name="Button xs" size="xs" rounded="true" />
    <Button name="Button xs" size="xs" type="dark" rounded="true" />
    <Button name="Button xs" size="xs" type="light" rounded="true" />
    <Button name="Button xs" size="xs" type="green" rounded="true" />
    <Button name="Button xs" size="xs" type="red" rounded="true" />
    <Button name="Button xs" size="xs" type="yellow" rounded="true" />
    <Button name="Button xs" size="xs" type="purple" rounded="true" />
  </div>

  <div class="container mt-4 flex flex-wrap mx-auto">
    <h1 class="text-3xl w-full">Size xs Outlined Buttons</h1>

    <div class="code">
      {@html Prism.highlight(
        `
<Button name="Button xs" size="xs" type="blue-outline" />
<Button name="Button xs" size="xs" type="dark-outline" />
<Button name="Button xs" size="xs" type="green-outline" />
<Button name="Button xs" size="xs" type="red-outline" />
<Button name="Button xs" size="xs" type="red-outline" />
<Button name="Button xs" size="xs" type="purple-outline" />
      `,
        Prism.languages["javascript"]
      )}
    </div>
  </div>

  <div class="container mt-4  mx-auto">
    <Button name="Button xs" size="xs" type="blue-outline" />
    <Button name="Button xs" size="xs" type="dark-outline" />
    <Button name="Button xs" size="xs" type="green-outline" />
    <Button name="Button xs" size="xs" type="red-outline" />
    <Button name="Button xs" size="xs" type="red-outline" />
    <Button name="Button xs" size="xs" type="purple-outline" />
  </div>

  <div class="container mt-4 flex flex-wrap mx-auto">
    <h1 class="text-3xl w-full">Size sm Default Buttons</h1>

    <div class="code">
      {@html Prism.highlight(
        `
<Button name="Button" size="sm" />
<Button name="Button" size="sm" type="dark" />
<Button name="Button" size="sm" type="light" />
<Button name="Button" size="sm" type="red" />
<Button name="Button" size="sm" type="green" />
<Button name="Button" size="sm" type="yellow" />
<Button name="Button" size="sm" type="purple" />
      `,
        Prism.languages["javascript"]
      )}
    </div>
  </div>

  <div class="container mt-4  mx-auto">
    <Button name="Button" size="sm" />
    <Button name="Button" size="sm" type="dark" />
    <Button name="Button" size="sm" type="light" />
    <Button name="Button" size="sm" type="red" />
    <Button name="Button" size="sm" type="green" />
    <Button name="Button" size="sm" type="yellow" />
    <Button name="Button" size="sm" type="purple" />
  </div>

  <div class="container mt-4 flex flex-wrap mx-auto">
    <h1 class="text-3xl w-full">Size sm Rounded Buttons</h1>

    <div class="code">
      {@html Prism.highlight(
        `
<Button name="Button" size="sm" rounded="true" />
<Button name="Button" size="sm" type="dark" rounded="true" />
<Button name="Button" size="sm" type="light" rounded="true" />
<Button name="Button" size="sm" type="green" rounded="true" />
<Button name="Button" size="sm" type="red" rounded="true" />
<Button name="Button" size="sm" type="yellow" rounded="true" />
<Button name="Button" size="sm" type="purple" rounded="true" />
      `,
        Prism.languages["javascript"]
      )}
    </div>
  </div>

  <div class="container mt-4  mx-auto">
    <Button name="Button" size="sm" rounded="true" />
    <Button name="Button" size="sm" type="dark" rounded="true" />
    <Button name="Button" size="sm" type="light" rounded="true" />
    <Button name="Button" size="sm" type="green" rounded="true" />
    <Button name="Button" size="sm" type="red" rounded="true" />
    <Button name="Button" size="sm" type="yellow" rounded="true" />
    <Button name="Button" size="sm" type="purple" rounded="true" />
  </div>

  <div class="container mt-4 flex flex-wrap mx-auto">
    <h1 class="text-3xl w-full">Size sm Outlined Buttons</h1>

    <div class="code">
      {@html Prism.highlight(
        `
<Button name="Button" size="sm" type="blue-outline" />
<Button name="Button" size="sm" type="dark-outline" />
<Button name="Button" size="sm" type="green-outline" />
<Button name="Button" size="sm" type="red-outline" />
<Button name="Button" size="sm" type="red-outline" />
<Button name="Button" size="sm" type="purple-outline" />
      `,
        Prism.languages["javascript"]
      )}
    </div>
  </div>

  <div class="container mt-4  mx-auto">
    <Button name="Button" size="sm" type="blue-outline" />
    <Button name="Button" size="sm" type="dark-outline" />
    <Button name="Button" size="sm" type="green-outline" />
    <Button name="Button" size="sm" type="red-outline" />
    <Button name="Button" size="sm" type="red-outline" />
    <Button name="Button" size="sm" type="purple-outline" />
  </div>

  <div class="container mt-4 flex flex-wrap mx-auto">
    <h1 class="text-3xl w-full">Size base Default Buttons</h1>

    <div class="code">
      {@html Prism.highlight(
        `
<Button name="Button" size="base" />
<Button name="Button" size="base" type="dark" />
<Button name="Button" size="base" type="light" />
<Button name="Button" size="base" type="red" />
<Button name="Button" size="base" type="green" />
<Button name="Button" size="base" type="yellow" />
<Button name="Button" size="base" type="purple" />
      `,
        Prism.languages["javascript"]
      )}
    </div>
  </div>

  <div class="container mt-4  mx-auto">
    <Button name="Button" size="base" />
    <Button name="Button" size="base" type="dark" />
    <Button name="Button" size="base" type="light" />
    <Button name="Button" size="base" type="red" />
    <Button name="Button" size="base" type="green" />
    <Button name="Button" size="base" type="yellow" />
    <Button name="Button" size="base" type="purple" />
  </div>

  <div class="container mt-4 flex flex-wrap mx-auto">
    <h1 class="text-3xl w-full">Size base Rounded Buttons</h1>

    <div class="code">
      {@html Prism.highlight(
        `
<Button name="Button" size="base" rounded="true" />
<Button name="Button" size="base" type="dark" rounded="true" />
<Button name="Button" size="base" type="light" rounded="true" />
<Button name="Button" size="base" type="green" rounded="true" />
<Button name="Button" size="base" type="red" rounded="true" />
<Button name="Button" size="base" type="yellow" rounded="true" />
<Button name="Button" size="base" type="purple" rounded="true" />
      `,
        Prism.languages["javascript"]
      )}
    </div>
  </div>

  <div class="container mt-4  mx-auto">
    <Button name="Button" size="base" rounded="true" />
    <Button name="Button" size="base" type="dark" rounded="true" />
    <Button name="Button" size="base" type="light" rounded="true" />
    <Button name="Button" size="base" type="green" rounded="true" />
    <Button name="Button" size="base" type="red" rounded="true" />
    <Button name="Button" size="base" type="yellow" rounded="true" />
    <Button name="Button" size="base" type="purple" rounded="true" />
  </div>

  <div class="container mt-4 flex flex-wrap mx-auto">
    <h1 class="text-3xl w-full">Size sm Outlined Buttons</h1>

    <div class="code">
      {@html Prism.highlight(
        `
<Button name="Button" size="base" type="blue-outline" />
<Button name="Button" size="base" type="dark-outline" />
<Button name="Button" size="base" type="green-outline" />
<Button name="Button" size="base" type="red-outline" />
<Button name="Button" size="base" type="red-outline" />
<Button name="Button" size="base" type="purple-outline" />
      `,
        Prism.languages["javascript"]
      )}
    </div>
  </div>

  <div class="container mt-4  mx-auto" />

  <div class="container mt-4 flex flex-wrap mx-auto pb-48">
    <a href="/" class="text-blue-700 text-lg">See more items.</a>
  </div>
</div>
