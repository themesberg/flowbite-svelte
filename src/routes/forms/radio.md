---
layout: formLayout
---

<script>
import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
import { onMount } from 'svelte';
import { RadioInline, Radio, Breadcrumb } from "$lib/index"
import componentProps from '../props/Radio.json'
let items = componentProps.props

let propHeader = ['Name', 'Type', 'Default']
let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

let radiooptions = [
  {
    id: 'country-option-1',
    name: 'country',
    value: 'USA',
    checked: true,
    label: 'United States'
  },
  {
    id: 'country-option-2',
    name: 'country',
    label: 'Germany',
    value: 'Germany'
  },
  {
    id: 'country-option-3',
    name: 'country',
    label: 'Spain (disabled)',
    value: 'Spain',
    disabled: true
  }
];

let radiooptions2 = [
  {
    id: 'country-option-1',
    name: 'country',
    value: 'USA',
    checked: false,
    label: 'Radio button with a <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">link inside</a>.'
  }
];

let radiooptions3 = [
  {
    id: 'country-option-1',
    name: 'country',
    value: 'USA',
    checked: false,
    label: 'Free shipping via Flowbite',
    helper: 'For orders shipped from $25 in books or $29 in other categories'
  }
];

let radiooptions4 =[
  {
    id: 'inline-1',
    name: 'inline',
    value:'inline-1',
    label: 'Inline 1',
  },
  {
    id: 'inline-2',
    name: 'inline',
    value:'inline-2',
    label: 'Inline 2',
  },
  {
    id: 'inline-3',
    name: 'inline',
    value:'inline-3',
    label: 'Inline 3',
  },
  {
    id: 'inline-4',
    name: 'inline',
    value:'inline-4',
    label: 'Inline 4 (disabled)',
    disabled: true
  }
]

let radiooptions5 =[
  {
    id: 'red',
    name: 'color',
    value:'red',
    label: 'Red',
    color: 'red'
  },
  {
    id: 'green',
    name: 'color',
    value:'green',
    label: 'Green',
    color:'green'
  },
  {
    id: 'purple',
    name: 'color',
    value:'purple',
    label: 'Purple',
    color: 'purple'
  },
  {
    id: 'teal',
    name: 'color',
    value:'teal',
    label: 'Teal',
    color: 'teal'
  },
  {
    id: 'yellow',
    name: 'color',
    value:'yellow',
    label: 'Yellow',
    color: 'yellow'
  },
  {
    id: 'orange',
    name: 'color',
    value:'orange',
    label: 'Orange',
    color: 'orange'
  }
]

  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Forms',
      href:'/forms/'
    },
    {
      label:'Radio',
      href:'/forms/radio'
    }
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Radio Components</h1>

<Htwo label="Examples" />

<ExampleDiv>
{#each radiooptions as option}
<Radio {...option} divClass="flex items-center mb-4"/>
{/each}
</ExampleDiv>

```html
<script>
import { Radio } from 'flowbite-svelte'
let radiooptions = [
  {
    id: 'country-option-1',
    name: 'country',
    value: 'USA',
    checked: true,
    label: 'United States'
  },
  {
    id: 'country-option-2',
    name: 'country',
    label: 'Germany',
    value: 'Germany'
  },
  {
    id: 'country-option-3',
    name: 'country',
    label: 'Spain (disabled)',
    value: 'Spain',
    disabled: true
  }
];
</script>

{#each radiooptions as option}
<Radio {...option} divClass="flex items-center mb-4"/>
{/each}
```

<Htwo label="Radio label with a link" />

<ExampleDiv>
{#each radiooptions2 as option}
<Radio {...option} />
{/each}
</ExampleDiv>

```html
<script>
let radiooptions2 = [
  {
    id: 'country-option-1',
    name: 'country',
    value: 'USA',
    checked: false,
    label: 'Radio button with a <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">link inside</a>.'
  }
];
</script>

{#each radiooptions2 as option}
<Radio {...option} />
{/each}
```

<Htwo label="Helper text" />

<ExampleDiv>
{#each radiooptions3 as option}
<Radio {...option} />
{/each}
</ExampleDiv>


```html
<script>
let radiooptions3 = [
  {
    id: 'country-option-1',
    name: 'country',
    value: 'USA',
    checked: false,
    label: 'Free shipping via Flowbite',
    helper: 'For orders shipped from $25 in books or $29 in other categories'
  }
];
</script>
{#each radiooptions3 as option}
<Radio {...option} />
{/each}
```

<Htwo label="Inline" />

<ExampleDiv>
<RadioInline>
{#each radiooptions4 as option}
<Radio {...option} />
{/each}
</RadioInline>
</ExampleDiv>

```html
<script>

let radiooptions4 =[
  {
    id: 'inline-1',
    name: 'inline',
    value:'inline-1',
    label: 'Inline 1',
  },
  {
    id: 'inline-2',
    name: 'inline',
    value:'inline-2',
    label: 'Inline 2',
  },
  {
    id: 'inline-3',
    name: 'inline',
    value:'inline-3',
    label: 'Inline 3',
  },
  {
    id: 'inline-4',
    name: 'inline',
    value:'inline-4',
    label: 'Inline 4 (disabled)',
    disabled: true
  }
]
</script>

<RadioInline>
{#each radiooptions4 as option}
<Radio {...option} />
{/each}
</RadioInline>
```


<Htwo label="Colors" />

<ExampleDiv>
<RadioInline>
{#each radiooptions5 as option}
<Radio {...option} />
{/each}
</RadioInline>
</ExampleDiv>

```html
<script>
let radiooptions5 =[
  {
    id: 'red',
    name: 'color',
    value:'red',
    label: 'Red',
    color: 'red'
  },
  {
    id: 'green',
    name: 'color',
    value:'green',
    label: 'Green',
    color:'green'
  },
  {
    id: 'purple',
    name: 'color',
    value:'purple',
    label: 'Purple',
    color: 'purple'
  },
  {
    id: 'teal',
    name: 'color',
    value:'teal',
    label: 'Teal',
    color: 'teal'
  },
  {
    id: 'yellow',
    name: 'color',
    value:'yellow',
    label: 'Yellow',
    color: 'yellow'
  },
  {
    id: 'orange',
    name: 'color',
    value:'orange',
    label: 'Orange',
    color: 'orange'
  }
]
</script>

<RadioInline>
{#each radiooptions5 as option}
<Radio {...option} />
{/each}
</RadioInline>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>
