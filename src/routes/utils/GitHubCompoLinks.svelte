<script lang="ts">
  import { page } from "$app/state";
  import { getFilteredFileNames } from "./helpers";
  import { github } from "./consts";

  const pathname = page.url.pathname;
  const parts = pathname.split("/").filter(Boolean); 
  const dirName = parts.at(-1);      // "input-field"
  const parentDir = parts.at(-2);    // "forms"

  let { components } = $props();

  const forms = ["Checkbox", "Dropzone", "Fileupload", "FloatingLabelInput", "Helper", "Input", "InputAddon", "Label", "MultiSelect", "NumberInput", "PhoneInput", "Radio", "Range", "Search", "Select", "Tags", "Textarea", "Timepicker", "Toggle"];
  const typography = ["A", "Blockquote", "DesriptionList", "Heading", "Hr", "Img", "Layout", "Li", "List", "Mark", "P", "Secondary", "Span"];
  
  // Special cases for components that don't follow the standard directory pattern
  const specialCases = {
    "MultiSelect": "forms/select"
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

<h2 class="relative group text-2xl leading-tight font-bold text-gray-900 dark:text-white">GitHub Links</h2>
<ul>
  {#each fileNames as compo}
    <li>
      <a target="_blank" href="{github}/{getComponentPath(compo)}">{compo} component on GitHub</a>
    </li>
  {/each}
</ul>

<h2 class="relative group text-2xl leading-tight font-bold text-gray-900 dark:text-white mt-6">Machine-Readable LLM Files</h2>
<ul>
  <li>
    <a href="/llm/{parentDir}/{dirName}.md" target="_blank" class="underline">Open LLM source for this page</a>
  </li>
</ul>