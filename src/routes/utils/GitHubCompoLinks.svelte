<script lang="ts">
  import { page } from "$app/state";
  import { getFilteredFileNames } from "./helpers";
  import { github } from "./consts";

  let { components } = $props();

  const pathname = page.url.pathname;
  const parts = pathname.split("/").filter(Boolean);
  const dirName = parts.at(-1); // "input-field"
  const forms = ["Checkbox", "Dropzone", "Fileupload", "FloatingLabelInput", "Helper", "Input", "InputAddon", "Label", "MultiSelect", "NumberInput", "PhoneInput", "Radio", "Range", "Search", "Select", "Tags", "Textarea", "Timepicker", "Toggle"];
  const typography = ["A", "Blockquote", "DesriptionList", "Heading", "Hr", "Img", "Layout", "Li", "DescriptionList", "List", "Mark", "P", "Secondary", "Span"];

  // Special cases for components that don't follow the standard directory pattern
  const specialCases: Record<string, string> = {
    Input: "forms/input-field",
    InputAddon: "forms/input-addon",
    MultiSelect: "forms/select",
    ButtonToggle: "forms/button-toggle",
    ButtonToggleGroup: "forms/button-toggle",
    RadioButton: "forms/radio",
    Progressradial: "progress",
    Toolbar: "toolbar",
    ToolbarButton: "toolbar",
    CloseButton: "utils",
    P: "typography/paragraph",
    Li: "typography/list"
  };

  // default for docs/components
  let fileNames = $state(getFilteredFileNames(dirName || ""));
  // if components are given in docs/forms, typography etc use it
  if (components) {
    // Split the components into an array
    const componentArray = components.split(", ");
    fileNames = componentArray;
  }

  function getComponentPath(compo: string): string {
    // Check for special cases first
    if (specialCases[compo]) {
      return `${specialCases[compo]}/${compo}.svelte`;
    }

    // Default behavior
    if (forms.includes(compo)) {
      return `forms/${compo.toLowerCase()}/${compo}.svelte`;
    } else if (typography.includes(compo)) {
      return `typography/${compo.toLowerCase()}/${compo}.svelte`;
    } else {
      return `${dirName}/${compo}.svelte`;
    }
  }
</script>

<ul>
  {#each fileNames as compo}
    <li>
      <a target="_blank" href="{github}/{getComponentPath(compo)}">{compo} component on GitHub</a>
    </li>
  {/each}
</ul>
