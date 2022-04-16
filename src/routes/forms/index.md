---
layout: formLayout
---

<script>
import { onMount } from 'svelte';
import { Input, Iconinput, FloatingLabelInput, Toggle, Textarea, Select, Fileupload, Radio, SingleCheckbox, Checkbox, Table, TableDefaultRow, Breadcrumb } from '$lib/index'
import { AtSymbolIconSolid , MailIconOutline } from '@codewithshin/svelte-heroicons'
import componentProps1 from '../props/Input.json'
export let items1 = componentProps1.props
import componentProps2 from '../props/Iconinput.json'
export let items2 = componentProps2.props
import componentProps3 from '../props/FloatingLabelInput.json'
export let items3 = componentProps3.props
import componentProps4 from '../props/Toggle.json'
export let items4 = componentProps4.props
import componentProps5 from '../props/Textarea.json'
export let items5 = componentProps5.props
import componentProps6 from '../props/Select.json'
export let items6 = componentProps6.props
import componentProps7 from '../props/Fileupload.json'
export let items7 = componentProps7.props
import componentProps8 from '../props/Radio.json'
export let items8 = componentProps8.props
import componentProps9 from '../props/SingleCheckbox.json'
export let items9 = componentProps9.props
import componentProps10 from '../props/Checkbox.json'
export let items10 = componentProps10.props

let propHeader = ['Name', 'Type', 'Default']
// console.log(items)
let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'

let props = {
  name: 'toggle-example',
  id: 'toggle-example',
  label: 'Toggle me',
  checked: false,
  disabled: false
};
let props2 = {
  name: 'toggle-example-checked',
  id: 'toggle-example-checked',
  label: 'Toggle me (checked)',
  checked: true,
  disabled: false
};
let props3 = {
  name: 'toggle-example-disabled',
  id: 'toggle-example-disabled',
  label: 'Toggle me (disabled)',
  checked: false,
  disabled: true
};
let textareaprops = {
  id: 'message',
  name: 'message',
  label: 'Your message',
  rows: 4,
  placeholder: 'Leave a comment...',
};

let selectprops = {
  id : 'countries',
	name : 'country',
	label : 'Select your country',
}
let selected;
let fileuploadprops = {
  id : 'user_avatar',
	label : 'Upload file'
}
let fileuploadprops2 = {
  id : 'user_avatar',
  label : 'Upload file',
  helper : 'A profile picture is useful to confirm your are logged into your account'
}
let radiooptions = [
  {
    id: 'country-option-1',
    value: 'USA',
    checked: true,
    label: 'United States'
  },
  {
    id: 'country-option-2',
    label: 'Germany',
    value: 'Germany'
  },
  {
    id: 'country-option-3',
    label: 'Spain (disabled)',
    value: 'Spain',
    disabled: true
  }
];

let radioname='countries'

let legend = 'Checkbox variants';
let checkboxOptions= [
  {
    id: 'checkbox-1',
    checked: true,
    label:
      'I agree to the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>'
  },
  {
    id: 'checkbox-2',
    label: 'I want to get promotional offers'
  },
  {
    id: 'checkbox-3',
    label: 'Eligible for international shipping (disabled)',
    disabled: true
  },
  {
    id: 'checkbox-4',
    label: 'Free shipping via Flowbite',
    helper:
      "For orders shipped from Flowbite from <span class='font-medium'>€ 25</span> in books or <span>€ 29</span> on other categories</span>"
  }
]

let ref

onMount(() => {
  ref.focus();
});
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Form Components</h1>

<h2 class="text-2xl w-full dark:text-white py-4">Input</h2>

<p>The Input component allows you to change the input size, add disabled, helper text, and floating label.</p>

<h3>Size</h3>

<p>User the size prop to change the input size. Choose one from 'sm:text-md' | 'text-sm' | 'sm:text-xs'. The default size is text-sm.</p>

<h3>Examples</h3>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Input class="mb-6"
  id="large-input"
  name="size"
  type="text"
  size="sm:text-md"
  value="large"
  placeholder="Write your text here."
  label="Large input"
  required
  />
<Input class="mb-6" placeholder="Base input" label="Base input"/>
<Input class="mb-6" size="sm:text-xs" placeholder="Small input" label="Small input"/>
</div>

```html
<script>
import { Input } from 'flowbite-svelte'
</script>
<Input
  class="mb-6"
  id="large-input"
  name="size"
  type="text"
  size="sm:text-md"
  value="large"
  placeholder="Write your text here."
  label="Large input"
  required
  />
<Input class="mb-6" placeholder="Base input" label="Base input"/>
<Input class="mb-6" size="sm:text-xs" placeholder="Small input" label="Small input"/>
```

<h3 class="text-xl w-full dark:text-white py-8" id="Focus_on_load">Focus on load</h3>

<p>To focus on an input field and a textarea field on load create a `ref` variable and bind it in an Input component. Add a `onMount` function as followings.</p>

<p>In the next example, when you reload/refresh the page, the First name field is focused on load.</p>

<p>If you want to use this on your website, your link to the page must have `rel="external"`.</p>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Input class="mb-6" placeholder="First name" label="First name" bind:ref/>
<Input class="mb-6" placeholder="Last name" label="Last name"/>
</div>

```html
<script>
import { onMount } from 'svelte';
let ref

onMount(() => {
  ref.focus();
});
</script>

<Input class="mb-6" placeholder="First name" label="First name" bind:ref/>
<Input class="mb-6" placeholder="Last name" label="Last name"/>
```

<h3>Disabled</h3>

<p>Add the disabled prop to change the input to disabled.</p>

<h3>Examples</h3>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Input class="mb-6" disabled placeholder="disabled input" label="Disabled input"/>
<Input class="mb-6" disabled readonly placeholder="disabled readonly" label="Disabled readonly input"/>
</div>

```html
<Input class="mb-6" disabled placeholder="disabled input" label="Disabled input"/>
<Input class="mb-6" disabled readonly placeholder="disabled readonly" label="Disabled readonly input"/>
```

<h3>Helper text</h3>

<p>Use the helper prop to add your helper text. You can use HTML in the helper text.</p>

<h3>Examples</h3>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Input label="Email" id="email" name="email" required placeholder="Your email" helper="You can add helper text in <b>HTML</b>."/>
</div>

```html
<Input label="Email" id="email" name="email" required placeholder="Your email" helper="You can add helper text in <b>HTML</b>."/>
```

<h2 class="text-2xl w-full dark:text-white py-4">Floating label input</h2>

<h3>Examples</h3>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<form>
<FloatingLabelInput id="email" name="email" type="email" required label="Email"/>
<FloatingLabelInput id="password" name="password" type="password" required label="Password" />
<FloatingLabelInput id="confirmpassword" name="confirm_password" type="password" required label="Confirm password" />
<FloatingLabelInput id="first_name" name="first_name" type="text" required label="First name" />
</form>
</div>

```html
<script>
  import { FloatingLabelInput } from 'flowbite-svelte'
</script>

<form> 
<FloatingLabelInput id="email" name="email" type="email" required label="Email"/>
<FloatingLabelInput id="password" name="password" type="password" required label="Password" />
<FloatingLabelInput id="confirmpassword" name="confirm_password" type="password" required label="Confirm password" />
<FloatingLabelInput id="first_name" name="first_name" type="text" required label="First name" />
</form>
```

<h2 class="text-2xl w-full dark:text-white py-4">Iconinput</h2>

<p>With the Iconinput component, you can add <a href="https://flowbite-svelte.vercel.app/icons/heroicons">Heroicons</a> or <a href="https://flowbite-svelte.vercel.app/icons/simple-icons">Simple-icons</a>. Use iconClass to modify the icon color.</p>

<h3>Examples</h3>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Iconinput id="email" type="email" name="email" placeholder="Your email" label="Border" icon={AtSymbolIconSolid} iconClass="h-4 w-4 mr-2 text-blue-500"/>
<div class="py-4">
<Iconinput noBorder id="email" type="email" name="email" label="No border" icon={MailIconOutline} iconClass="h-4 w-4 mr-2 text-blue-500"/>
</div>
</div>

```html
<script>
  import { Iconinput } from 'flowbite-svelte'
</script>

<Iconinput id="email" type="email" name="email" placeholder="Your email" label="Border" icon={AtSymbolIconSolid} iconClass="h-4 w-4 mr-2 text-blue-500"/>

<Iconinput noBorder id="email" type="email" name="email" label="No border" icon={MailIconOutline} iconClass="h-4 w-4 mr-2 text-blue-500"/>
```

<h2 class="text-2xl w-full dark:text-white py-4">Textarea</h2>

<h3>Examples</h3>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Textarea {...textareaprops} />
</div>

```html
<script>
import { Textarea } from 'flowbite-svelte'
let textareaprops = {
  id: 'message',
  name: 'message',
  label: 'Your message',
  rows: 4,
  placeholder: 'Leave a comment...',
};
</script>

<Textarea {...textareaprops} />
```

<h3 class="text-xl w-full dark:text-white py-8" id="Focus_on_load_textarea">Focus on load</h3>

<p><a href="#Focus_on_load" class="text-blue-600 hover:underline dark:text-blue-500">As mentioned in the Input field,</a> you can focus on the Textarea component on load.</p>

<h2 class="text-2xl w-full dark:text-white py-4">Select input</h2>

<h3>Examples</h3>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Select {...selectprops} bind:value={selected}>
  <option value="us">United States</option>
  <option value="ca">Canada</option>
  <option value="fr">France</option>
</Select>
</div>

```html
<script>
import { Select} from 'flowbite-svelte'

let selectprops = {
  id : 'countries',
	name : 'country',
	label : 'Select your country',
}
</script>

<Select {...selectprops} bind:value={selected}>
  <option value="us">United States</option>
  <option value="ca">Canada</option>
  <option value="fr">France</option>
</Select>
```

<h2 class="text-2xl w-full dark:text-white py-4">Checkbox</h2>

<h3>Examples</h3>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Checkbox options={checkboxOptions} {legend} />
</div>

```html
<script>
import { Checkbox } from 'flowbite-svelte'

let legend = 'Checkbox variants';
let checkboxOptions= [
  {
    id: 'checkbox-1',
    checked: true,
    label:
      'I agree to the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>'
  },
  {
    id: 'checkbox-2',
    label: 'I want to get promotional offers'
  },
  {
    id: 'checkbox-3',
    label: 'Eligible for international shipping (disabled)',
    disabled: true
  },
  {
    id: 'checkbox-4',
    label: 'Free shipping via Flowbite',
    helper:
      "For orders shipped from Flowbite from <span class='font-medium'>€ 25</span> in books or <span>€ 29</span> on other categories</span>"
  }
]
</script>

<Checkbox options={checkboxOptions} {legend} />
```

<h2 class="text-2xl w-full dark:text-white py-4">Single checkobx</h2>

<h3>Examples</h3>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<SingleCheckbox name="rememberme" id="rememberme" required label="Remember me" />
</div>

```html
<SingleCheckbox name="rememberme" id="rememberme" required label="Remember me" />
```

<h2 class="text-2xl w-full dark:text-white py-4">Radio</h2>

<h3>Examples</h3>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Radio options={radiooptions} name={radioname}/>
</div>

```html
<script>
let radiooptions = [
		{
			id: 'country-option-1',
			value: 'USA',
			checked: true,
			label: 'United States'
		},
		{
			id: 'country-option-2',
			label: 'Germany',
			value: 'Germany'
		},
		{
			id: 'country-option-3',
			label: 'Spain (disabled)',
			value: 'Spain',
			disabled: true
		}
	];
let radioname='countries'
</script>

<Radio options={radiooptions} name={radioname}/>
```

<h2 class="text-2xl w-full dark:text-white py-4">File upload</h2>

<h3>Examples</h3>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Fileupload {...fileuploadprops} />
<Fileupload {...fileuploadprops2} />
</div>

```html
<script>
import { Fileupload } from 'flowbite-svelte'

let fileuploadprops = {
  id : 'user_avatar',
  label : 'Upload file'
}

let fileuploadprops2 = {
  id : 'user_avatar',
  label : 'Upload file',
  helper : 'A profile picture is useful to confirm your are logged into your account'
}
</script>

<Fileupload {...fileuploadprops} />
<Fileupload {...fileuploadprops2} />
```

<h2 class="text-2xl w-full dark:text-white py-4">Toggle</h2>

<h3>Examples</h3>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Toggle {...props}/>

<Toggle {...props2}/>

<Toggle {...props3}/>
</div>

```html
<script>
import { Toggle } from 'flowbite-svelte'
let props = {
		name: 'toggle-example',
		id: 'toggle-example',
		label: 'Toggle me',
		labelClass: 'flex relative items-center mb-4 cursor-pointer',
		divClass:
			'w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600',
		spanClass: 'ml-3 text-sm font-medium text-gray-900 dark:text-gray-300',
		checked: false,
		disabled: false
	};
let props2 = {
		name: 'toggle-example-checked',
		id: 'toggle-example-checked',
		label: 'Toggle me (checked)',
		checked: true,
		disabled: false
	};
let props3 = {
		name: 'toggle-example-disabled',
		id: 'toggle-example-disabled',
		label: 'Toggle me (disabled)',
		checked: false,
		disabled: true
	};
 let textareaprops = {
		id: 'message',
		name: 'message',
		label: 'Your message',
		rows: 4,
		placeholder: 'Leave a comment...',
	};
</script>

<Toggle {...props}/>

<Toggle {...props2}/>

<Toggle {...props3}/>
```

<h2 class="text-2xl w-full dark:text-white py-4">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<h3>Input</h3>

<Table header={propHeader} {divClass} >
  <TableDefaultRow items={items1} rowState='hover' />
</Table>


<h3>Iconinput</h3>

<Table header={propHeader} {divClass} >
  <TableDefaultRow items={items2} rowState='hover' />
</Table>


<h3>FloatingLabelInput</h3>

<Table header={propHeader} {divClass} >
  <TableDefaultRow items={items3} rowState='hover' />
</Table>


<h3>Toggle</h3>

<Table header={propHeader} {divClass} >
  <TableDefaultRow items={items4} rowState='hover' />
</Table>


<h3>Textarea</h3>

<Table header={propHeader} {divClass} >
  <TableDefaultRow items={items5} rowState='hover' />
</Table>


<h3>Select</h3>

<Table header={propHeader} {divClass} >
  <TableDefaultRow items={items6} rowState='hover' />
</Table>


<h3>Fileupload</h3>

<Table header={propHeader} {divClass} >
  <TableDefaultRow items={items7} rowState='hover' />
</Table>


<h3>Radio</h3>

<Table header={propHeader} {divClass} >
  <TableDefaultRow items={items8} rowState='hover' />
</Table>


<h3>SingleCheckbox</h3>

<Table header={propHeader} {divClass} >
  <TableDefaultRow items={items9} rowState='hover' />
</Table>


<h3>Checkbox</h3>

<Table header={propHeader} {divClass} >
  <TableDefaultRow items={items10} rowState='hover' />
</Table>
