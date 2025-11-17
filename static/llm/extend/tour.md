# Svelte Tour


## Setup

```svelte
<script lang="ts">
  import { Tour } from  'flowbite-svelte';
</script>
```

## Usage Examples

See [examples](/docs-examples/extend/tour) and [code](https://github.com/themesberg/flowbite-svelte/tree/main/src/routes/docs-examples/extend/tour).


## Component data

### Tour

#### Types

[TourProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L2176)

#### Props

- steps: []
- active: $bindable(false)
- currentStep: $bindable(0)
- oncomplete: () => {

