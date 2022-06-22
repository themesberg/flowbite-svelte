---
layout: formLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { Checkbox, CheckboxInline ,Breadcrumb } from "$lib/index"
  import componentProps from '../props/Checkbox.json'
  let items = componentProps.props

let propHeader = ['Name', 'Type', 'Default']
let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

let legend = 'Checkbox variants';
let checkboxOptions= [
  {
    id: 'checkbox-1',
    name:'checkbox1',
    label:'Default checkbox'
  },
  {
    id: 'checkbox-2',
    name:'checkbox1',
    checked: true,
    label: 'Checked state'
  }
]

let checkboxOptions2= [
  {
    id: 'disabled-1',
    name:'checkbox2',
    label:'Disabled checkbox',
  },
  {
    id: 'disabled-2',
    name:'checkbox2',
    checked: true,
    label: 'Disabled checked',
  }
]

let checkboxOptions3= [
  {
    id: 'link',
    name:'checkbox3',
    label:'I agree with the <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.',
  }
]

let checkboxOptions4= [
  {
    id: 'helper',
    name:'checkbox4',
    label:'Free shipping via Flowbite',
    helper:'For orders shipped from $25 in books or $29 in other categories'
  }
]

let checkboxOptions5= [
  {
    id: 'inline',
    name:'checkbox5',
    label:'Inline 1',
  },
  {
    id: 'inline2',
    name:'checkbox5',
    label:'Inline 2',
  },
  {
    id: 'inline3',
    name:'checkbox5',
    label:'Inline checked',
    checked:true,
  },
  {
    id: 'inline4',
    name:'checkbox5',
    label:'Inline disabled',
    disabled:true
  },
]

let checkboxOptions6 =[
  {
    id: 'red',
    name: 'color',
    value:'red',
    label: 'Red',
    color: 'red',
    checked:true
  },
  {
    id: 'green',
    name: 'color',
    value:'green',
    label: 'Green',
    color:'green',
    checked:true
  },
  {
    id: 'purple',
    name: 'color',
    value:'purple',
    label: 'Purple',
    color: 'purple',
    checked:true
  },
  {
    id: 'teal',
    name: 'color',
    value:'teal',
    label: 'Teal',
    color: 'teal',
    checked:true
  },
  {
    id: 'yellow',
    name: 'color',
    value:'yellow',
    label: 'Yellow',
    color: 'yellow',
    checked:true
  },
  {
    id: 'orange',
    name: 'color',
    value:'orange',
    label: 'Orange',
    color: 'orange',
    checked:true
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
      label:'Checkbox',
      href:'/forms/checkbox'
    }
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Checkbox Components</h1>

<Htwo label="Examples" />

<ExampleDiv>
{#each checkboxOptions as option}
<Checkbox {...option} divClass="flex items-center mb-4" />
{/each}
</ExampleDiv>

```html
<script>
import { Checkbox } from 'flowbite-svelte'
let checkboxOptions= [
  {
    id: 'checkbox-1',
    name:'checkbox1',
    label:'Default checkbox'
  },
  {
    id: 'checkbox-2',
    name:'checkbox1',
    checked: true,
    label: 'Checked state'
  }
]
</script>
{#each checkboxOptions as option}
  <Checkbox options={checkboxOptions} {legend} />
{/each}
```

<Htwo label="Disabled state" />

<ExampleDiv>
{#each checkboxOptions2 as option}
<Checkbox {...option} disabled divClass="flex items-center mb-4" />
{/each}
</ExampleDiv>

```html
<script>

let checkboxOptions2= [
  {
    id: 'disabled-1',
    name:'checkbox2',
    label:'Disabled checkbox',
  },
  {
    id: 'disabled-2',
    name:'checkbox2',
    checked: true,
    label: 'Disabled checked',
  }
]

</script>

{#each checkboxOptions2 as option}
<Checkbox {...option} disabled divClass="flex items-center mb-4" />
{/each}
```

<Htwo label="Checkbox with a link" />

<ExampleDiv>
{#each checkboxOptions3 as option}
<Checkbox {...option} />
{/each}
</ExampleDiv>

```html
<script>
let checkboxOptions3= [
  {
    id: 'link',
    name:'checkbox3',
    label:'I agree with the <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.',
  }
]

</script>

{#each checkboxOptions3 as option}
<Checkbox {...option} />
{/each}
```

<Htwo label="Helper text" />

<ExampleDiv>
{#each checkboxOptions4 as option}
<Checkbox {...option} />
{/each}
</ExampleDiv>

```html
<script>
let checkboxOptions4= [
  {
    id: 'helper',
    name:'checkbox4',
    label:'Free shipping via Flowbite',
    helper:'For orders shipped from $25 in books or $29 in other categories'
  }
]

</script>

{#each checkboxOptions4 as option}
<Checkbox {...option} />
{/each}
```

<Htwo label="Inline" />

<ExampleDiv>
<CheckboxInline>
{#each checkboxOptions5 as option}
<Checkbox {...option} />
{/each}
</CheckboxInline>
</ExampleDiv>

```html
<script>
import { Checkbox, CheckboxInline } from 'flowbite-svelte'

let checkboxOptions5= [
  {
    id: 'inline',
    name:'checkbox5',
    label:'Inline 1',
  },
  {
    id: 'inline2',
    name:'checkbox5',
    label:'Inline 2',
  },
  {
    id: 'inline3',
    name:'checkbox5',
    label:'Inline checked',
    checked:true,
  },
  {
    id: 'inline4',
    name:'checkbox5',
    label:'Inline disabled',
    disabled:true
  },
]

</script>

<CheckboxInline>
{#each checkboxOptions5 as option}
<Checkbox {...option} />
{/each}
</CheckboxInline>
```

<Htwo label="Colors" />

<ExampleDiv>
<CheckboxInline>
{#each checkboxOptions6 as option}
<Checkbox {...option} />
{/each}
</CheckboxInline>
</ExampleDiv>

```html
<script>

let checkboxOptions6 =[
  {
    id: 'red',
    name: 'color',
    value:'red',
    label: 'Red',
    color: 'red',
    checked:true
  },
  {
    id: 'green',
    name: 'color',
    value:'green',
    label: 'Green',
    color:'green',
    checked:true
  },
  {
    id: 'purple',
    name: 'color',
    value:'purple',
    label: 'Purple',
    color: 'purple',
    checked:true
  },
  {
    id: 'teal',
    name: 'color',
    value:'teal',
    label: 'Teal',
    color: 'teal',
    checked:true
  },
  {
    id: 'yellow',
    name: 'color',
    value:'yellow',
    label: 'Yellow',
    color: 'yellow',
    checked:true
  },
  {
    id: 'orange',
    name: 'color',
    value:'orange',
    label: 'Orange',
    color: 'orange',
    checked:true
  }
]

</script>

<CheckboxInline>
{#each checkboxOptions6 as option}
<Checkbox {...option} />
{/each}
</CheckboxInline>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items} rowState='hover' />
</TableProp>

