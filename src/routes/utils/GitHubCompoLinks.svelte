<script lang="ts">
  import { page } from "$app/state";
  import { getFilteredFileNames } from "./helpers";
  import { github } from "./consts";

  const pathname = page.url.pathname;
  let dirName = pathname.split("/").pop();

  let { components } = $props();

  const forms = ["Checkbox", "Dropzone", "Fileupload", "FloatingLabelInput", "Helper", "Input", "InputAddon", "Label", "MultiSelect", "NumberInput", "Radio", "Range", "Search", "Select", "Textarea", "Toggle"];
  const typography = ["A", "Blockquote", "DesriptionList", "Heading", "Hr", "Img", "Layout", "Li", "List", "Mark", "P", "Secondary", "Span"];
  // default for docs/components
  let fileNames = $state(getFilteredFileNames(dirName || ""));
  // if components are given in docs/forms, typography etc use it
  if (components) {
    // Split the components into an array
    const componentArray = components.split(", ");
    fileNames = componentArray;
    // dirName = forms.includes(components) ? 'forms' : dirName;
  }
</script>

<ul>
  {#each fileNames as compo}
    <li>
      <a target="_blank" href="{github}/{forms.includes(compo) ? 'forms' : typography.includes(compo) ? 'typography' : dirName}/{compo}.svelte">{compo} component on GitHub</a>
    </li>
  {/each}
</ul>
