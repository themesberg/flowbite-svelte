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

<h1 class="text-3xl w-full dark:text-white py-8">Form</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Input</h2>

<h3 class="text-xl w-full dark:text-white py-8">Size</h3>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Input
  id="large-input"
  name="size"
  type="text"
  size="sm:text-md"
  value="large"
  placeholder="Write your text here."
  label="Large input"
  required
  />
<Input placeholder="Base input" label="Base input"/>
<Input size="sm:text-xs" placeholder="Small input" label="Small input"/>
</div>

```html
<script>
import { Input } from 'flowbite-svelte'
</script>
<Input
  id="large-input"
  name="size"
  type="text"
  size="sm:text-md"
  value="large"
  placeholder="Write your text here."
  label="Large input"
  required
  />
<Input placeholder="Base input" label="Base input"/>
<Input size="sm:text-xs" placeholder="Small input" label="Small input"/>
```

<h3 class="text-xl w-full dark:text-white py-8">Disabled</h3>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Input disabled placeholder="disabled input" label="Disabled input"/>
<Input disabled readonly placeholder="disabled readonly" label="Disabled readonly input"/>
</div>

```html
<Input disabled placeholder="disabled input" label="Disabled input"/>
<Input disabled readonly placeholder="disabled readonly" label="Disabled readonly input"/>
```

<h3 class="text-xl w-full dark:text-white py-8">Helper text</h3>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Input label="Email" helper="You can add helper text in <b>HTML</b>."/>
</div>

```html
<Input label="Email" helper="You can add helper text in <b>HTML</b>."/>
```

<h2 class="text-2xl w-full dark:text-white py-8">Floating label input</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<form>
<FloatingLabelInput id="email" name="email" type="email" required label="Email"/>
<FloatingLabelInput id="password" name="password" type="password" required label="Password" />
<FloatingLabelInput id="confirmpassword" name="confirm_password" type="password" required label="Confirm password" />
<FloatingLabelInput id="first_name" name="first_name" type="text" required label="First name" />
</form>
</div>

```html
<form>
<FloatingLabelInput id="email" name="email" type="email" required label="Email"/>
<FloatingLabelInput id="password" name="password" type="password" required label="Password" />
<FloatingLabelInput id="confirmpassword" name="confirm_password" type="password" required label="Confirm password" />
<FloatingLabelInput id="first_name" name="first_name" type="text" required label="First name" />
</form>
```

<h2 class="text-2xl w-full dark:text-white py-8">Iconinput</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Iconinput label="Border" icon={AtSymbolIconSolid} iconClass="h-4 w-4 mr-2 text-blue-500"/>
<div class="py-4">
<Iconinput noBorder label="No border" icon={MailIconOutline} iconClass="h-4 w-4 mr-2 text-blue-500"/>
</div>
</div>

```html
<Iconinput label="Border" icon={AtSymbolIconSolid} iconClass="h-4 w-4 mr-2 text-blue-500" />

<Iconinput noBorder label="No border" icon={MailIconOutline} iconClass="h-4 w-4 mr-4" />
```

<h2 class="text-2xl w-full dark:text-white py-8">Textarea</h2>

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

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Select {...selectprops}>
  <option>United States</option>
  <option>Canada</option>
  <option>France</option>
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
  <option>United States</option>
  <option>Canada</option>
  <option>France</option>
</Select>
```

<h2 class="text-2xl w-full dark:text-white py-8">Checkbox</h2>

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

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<SingleCheckbox name="rememberme" id="rememberme" required label="Remember me" />
</div>

```html
<SingleCheckbox name="rememberme" id="rememberme" required label="Remember me" />
```

<h2 class="text-2xl w-full dark:text-white py-8">Radio</h2>

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

