<script lang="ts">
  // Updated props data interface to match your actual data structure exactly
  interface PropData {
    name: string;
    type: {
      name: string;
      link: string;
    };
    props: string[][]; // This matches your actual data structure
  }

  // Component props
  let { data, initiallyExpanded = false } = $props<{
    data: PropData;
    initiallyExpanded?: boolean;
  }>();

  // State
  let expanded = $state(initiallyExpanded);

  // Toggle expanded state
  function toggle() {
    expanded = !expanded;
  }

  // Check if a prop has a default value
  function hasDefaultValue(propArray: string[]): boolean {
    // Check if there is a second element and it's not an empty string
    return propArray.length > 1 && propArray[1] !== '';
  }
</script>

<div class="json-view my-2 mb-8 overflow-hidden rounded-md border border-gray-200 bg-gray-50">
  <button onclick={toggle} class="toggle-btn flex w-full items-center justify-between p-3 text-left transition-colors hover:bg-gray-100">
    <div class="flex items-center gap-2">
      <span class="text-gray-600">{expanded ? '▼' : '►'}</span>
      <span class="font-medium">{data.name}</span>
      <a href={data.type.link} target="_blank" rel="noopener noreferrer" class="ml-2 text-sm text-blue-600 hover:underline">
        Type: {data.type.name}
      </a>
    </div>
    <span class="text-sm text-gray-500">{data.props.length} props</span>
  </button>

  {#if expanded}
    <div class="props-content border-t border-gray-200">
      {#if data.props.length === 0}
        <div class="p-3 text-sm text-gray-500 italic">No props available</div>
      {:else}
        <div class="p-2">
          {#each data.props as propArray}
            <div class="prop-item flex rounded p-1.5 text-sm hover:bg-gray-100">
              <div class="prop-name flex-grow font-mono text-violet-700">{propArray[0]}</div>
              {#if hasDefaultValue(propArray)}
                <div class="prop-value text-gray-600">
                  default: <span class="font-mono">{propArray[1]}</span>
                </div>
              {/if}
            </div>
          {/each}
        </div>
      {/if}
    </div>
  {/if}
</div>
