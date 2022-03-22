---
layout: doc
---

<script>
import { Input, Iconinput, FloatingLabelInput, Toggle, Textarea, Select, Fileupload, Radio, SingleCheckbox, Checkbox } from '$lib/index'
import { AtSymbolIconSolid , MailIconOutline } from '@codewithshin/svelte-heroicons'
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

</script>

<h1 class="text-3xl w-full dark:text-white py-4">Form</h1>

<h2 class="text-2xl w-full dark:text-white py-4">Input</h2>

<p class="dark:text-white py-4 text-lg">The Input component allows you to change the input size, add disabled, helper text, and floating label.</p>

<h3 class="text-xl w-full dark:text-white py-4">Props</h3>

<p class="dark:text-white py-4 text-lg">The Input component has following props, type, and default values:</p>

```js
let type: 'button'| 'checkbox'| 'color'| 'date'| 'datetime-local'| 'email'| 'file'| 'hidden'| 'image'| 'month'| 'number'| 'password'| 'radio'| 'range'| 'reset'| 'search'| 'submit'| 'tel'| 'text'| 'time'| 'url'| 'week';
let name: string;
let id: string;
let label: string;
let required: boolean;
let placeholder: string;
let size: 'sm:text-md' | 'text-sm' | 'sm:text-xs' = 'text-sm';
let inputClass = `bg-gray-50 border border-gray-300 text-gray-900 ${size} rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`;
let labelClass = 'block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300';
let disabled: boolean = false;
let readonly: boolean = false;
let helper: string;
let helperClass = 'mt-2 text-sm text-gray-500 dark:text-gray-400';
```

<h3 class="text-xl w-full dark:text-white py-8">Size</h3>

<p class="dark:text-white py-4 text-lg">User the size prop to change the input size. Choose one from 'sm:text-md' | 'text-sm' | 'sm:text-xs'. The default size is text-sm.</p>

<h3 class="text-xl w-full dark:text-white py-4">Examples</h3>

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

<h3 class="text-xl w-full dark:text-white py-8">Disabled</h3>

<p class="dark:text-white py-4 text-lg">Add the disabled prop to change the input to disabled.</p>

<h3 class="text-xl w-full dark:text-white py-4">Examples</h3>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Input class="mb-6" disabled placeholder="disabled input" label="Disabled input"/>
<Input class="mb-6" disabled readonly placeholder="disabled readonly" label="Disabled readonly input"/>
</div>

```html
<Input class="mb-6" disabled placeholder="disabled input" label="Disabled input"/>
<Input class="mb-6" disabled readonly placeholder="disabled readonly" label="Disabled readonly input"/>
```

<h3 class="text-xl w-full dark:text-white py-8">Helper text</h3>

<p class="dark:text-white py-4 text-lg">Use the helper prop to add your helper text. You can use HTML in the helper text.</p>

<h3 class="text-xl w-full dark:text-white py-4">Examples</h3>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Input label="Email" id="email" name="email" required placeholder="Your email" helper="You can add helper text in <b>HTML</b>."/>
</div>

```html
<Input label="Email" id="email" name="email" required placeholder="Your email" helper="You can add helper text in <b>HTML</b>."/>
```

<h2 class="text-2xl w-full dark:text-white py-8">Floating label input</h2>

<h3 class="text-xl w-full dark:text-white py-4">Props</h3>

<p class="dark:text-white py-4 text-lg">The FloatingLabelInput component animates labels. It has the following props, type, and default values:</p>

```js
let id: string;
let type: 'button'| 'checkbox'| 'color'| 'date'| 'datetime-local'| 'email'| 'file'| 'hidden'| 'image'| 'month'| 'number'| 'password'| 'radio'| 'range'| 'reset'| 'search'| 'submit'| 'tel'| 'text'| 'time'| 'url'| 'week';
let name: string;
let label: string;
let required: boolean = false;
let divClass = 'relative z-0 mb-6 w-full group';
let inputClass = 'block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer';
let labelClass = 'absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6';
```

<h3 class="text-xl w-full dark:text-white py-4">Examples</h3>

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

<h2 class="text-2xl w-full dark:text-white py-8">Iconinput</h2>

<p class="dark:text-white py-4 text-lg">With the Iconinput component, you can add <a href="https://flowbite-svelte.vercel.app/icons/heroicons">Heroicons</a> or <a href="https://flowbite-svelte.vercel.app/icons/simple-icons">Simple-icons</a>. Use iconClass to modify the icon color.</p> 

<h3 class="text-xl w-full dark:text-white py-4">Props</h3>

<p class="dark:text-white py-4 text-lg">The Iconinput component has the following props, type, and default values:</p>

```js
let label: string;
let id: string;
let type: 'button'| 'checkbox'| 'color'| 'date'| 'datetime-local'| 'email'| 'file'| 'hidden'| 'image'| 'month'| 'number'| 'password'| 'radio'| 'range'| 'reset'| 'search'| 'submit'| 'tel'| 'text'| 'time'| 'url'| 'week';
let icon: typeof SvelteComponent;
let helper: string;
let placeholder: string;
let noBorder: boolean = false;
let labelClass = 'block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300';
let inputClass = 'rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
let spanClass = 'inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600';
let helperClass = 'mt-2 text-sm text-gray-500 dark:text-gray-400';
let noBorderInputClass = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
let noBorderDivClass = 'flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none';
let iconClass = 'h-4 w-4 mr-2';
```

<h3 class="text-xl w-full dark:text-white py-4">Examples</h3>

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

<h2 class="text-2xl w-full dark:text-white py-8">Textarea</h2>

<h3 class="text-xl w-full dark:text-white py-4">Props</h3>

<p class="dark:text-white py-4 text-lg">The Textarea component has the following props, type, and default values:</p>

```js
let id = 'message';
let name = 'message';
let label = 'Your message';
let rows = 4;
let placeholder = 'Leave a comment...';
let labelClass = 'block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400';
let textareaClass = 'block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
let helper: string;
let helperClass = 'mt-2 text-sm text-gray-500 dark:text-gray-400';
```

<h3 class="text-xl w-full dark:text-white py-4">Examples</h3>

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

<h2 class="text-2xl w-full dark:text-white py-8">Select input</h2>

<h3 class="text-xl w-full dark:text-white py-4">Props</h3>

<p class="dark:text-white py-4 text-lg">The Select component has the following props, type, and default values:</p>

```js
let id = 'countries';
let name = 'country';
let label = 'Select your country';
let labelClass = 'block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400';
let selectClass = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
```

<h3 class="text-xl w-full dark:text-white py-4">Examples</h3>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Select {...selectprops}>
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

<Select {...selectprops}>
  <option value="us">United States</option>
  <option value="ca">Canada</option>
  <option value="fr">France</option>
</Select>
```

<h2 class="text-2xl w-full dark:text-white py-8">Checkbox</h2>

<h3 class="text-xl w-full dark:text-white py-4">Props</h3>

<p class="dark:text-white py-4 text-lg">The Checkbox component has the following props, type, and default values:</p>

```js
let legend = 'Checkbox variants';
let divClass = 'flex items-center mb-4';
let inputClass = 'w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600';
let labelClass = 'ml-3 text-sm font-medium text-gray-900 dark:text-gray-300';
let helperLabelClass = 'font-medium text-gray-900 dark:text-gray-300';
let options: {
  id: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  helper?: string;
}[];
```

<h3 class="text-xl w-full dark:text-white py-4">Examples</h3>

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

<h2 class="text-2xl w-full dark:text-white py-8">Single checkobx</h2>

<h3 class="text-xl w-full dark:text-white py-4">Props</h3>

<p class="dark:text-white py-4 text-lg">The Singlecheckbox component has the following props, type, and default values:</p>

```js
let id: string;
let required: boolean = true;
let label: string;
let name: string;
let inputClass = 'w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800';
let labelClass = 'font-medium text-gray-900 dark:text-gray-300';
```

<h3 class="text-xl w-full dark:text-white py-4">Examples</h3>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<SingleCheckbox name="rememberme" id="rememberme" required label="Remember me" />
</div>

```html
<SingleCheckbox name="rememberme" id="rememberme" required label="Remember me" />
```

<h2 class="text-2xl w-full dark:text-white py-8">Radio</h2>

<h3 class="text-xl w-full dark:text-white py-4">Props</h3>

<p class="dark:text-white py-4 text-lg">The Radio component has the following props, type, and default values:</p>

```js
let divClass = 'flex items-center mb-4';
let inputClass = 'w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600';
let labelClass = 'block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300';
let name = 'countries';
let options: {
  id: string;
  label: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
}[]
```

<h3 class="text-xl w-full dark:text-white py-4">Examples</h3>

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

<h2 class="text-2xl w-full dark:text-white py-8">File upload</h2>

<h3 class="text-xl w-full dark:text-white py-4">Props</h3>

<p class="dark:text-white py-4 text-lg">The Fileupload component has the following props, type, and default values:</p>

```js
let id = 'user_avatar';
let label = 'Upload file';
let labelClass = 'block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="user_avatar';
let inputClass = 'block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400';
let divClass = 'mt-1 text-sm text-gray-500 dark:text-gray-300';
let helper: string;
```

<h3 class="text-xl w-full dark:text-white py-4">Examples</h3>

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

<h2 class="text-2xl w-full dark:text-white py-8">Toggle</h2>

<h3 class="text-xl w-full dark:text-white py-4">Props</h3>

<p class="dark:text-white py-4 text-lg">The Toggle component has the following props, type, and default values:</p>

```js
let name = 'toggle-example';
let id = 'toggle-example';
let label = 'Toggle me';
let checked = false;
let disabled = false;
let labelClass = 'flex relative items-center mb-4 cursor-pointer';
let divClass = 'w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600';
let spanClass = 'ml-3 text-sm font-medium text-gray-900 dark:text-gray-300';
```

<h3 class="text-xl w-full dark:text-white py-4">Examples</h3>

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

