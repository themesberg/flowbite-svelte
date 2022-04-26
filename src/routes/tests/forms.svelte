<script>
	import { Input, Checkbox, Fileupload, FloatingLabelInput, Iconinput, Radio, Select, SingleCheckbox, Toggle, Textarea } from '$lib/index';
	let username;
	let size;
	import { AtSymbolSolid } from 'svelte-heros';

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
		placeholder: 'Leave a comment...'
	};

	let selectprops = {
		id: 'countries',
		name: 'country',
		label: 'Select your country'
	};

	let selected;
	let fileuploadprops = {
		id: 'user_avatar',
		label: 'Upload file'
	};
	let fileuploadprops2 = {
		id: 'user_avatar',
		label: 'Upload file',
		helper: 'A profile picture is useful to confirm your are logged into your account'
	};
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

	let radioname = 'countries';

	let legend = 'Checkbox variants';
	let checkboxOptions = [
		{
			id: 'checkbox-1',
			checked: true,
			label: 'I agree to the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>'
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
			helper: "For orders shipped from Flowbite from <span class='font-medium'>€ 25</span> in books or <span>€ 29</span> on other categories</span>"
		}
	];
</script>

<Input label="Username" id="username" name="username" type="text" bind:value={username} required />

<Input bind:value={size} class="mb-6" id="large-input" name="size" type="text" size="sm:text-md" placeholder="Write your text here." label="Large input" required />

<Input bind:value={size} class="mb-6" id="large-input2" name="size" type="text" disabled placeholder="disabled input" label="Disabled input" />

<Input bind:value={size} label="Email" id="email" name="email" type="email" required placeholder="Your email" helper="You can add helper text in <b>HTML</b>." />

<form>
	<FloatingLabelInput id="email" name="email" type="email" required label="Email" />
	<FloatingLabelInput id="password" name="password" type="password" required label="Password" />
	<FloatingLabelInput id="confirmpassword" name="confirm_password" type="password" required label="Confirm password" />
	<FloatingLabelInput id="first_name" name="first_name" type="text" required label="First name" />
</form>

<Iconinput id="email" type="email" name="email" placeholder="Your email" label="Border" icon={AtSymbolSolid} iconClass="h-4 w-4 mr-2 text-blue-500" />

<Textarea {...textareaprops} />

<Select {...selectprops} bind:value={selected}>
	<option value="us">United States</option>
	<option value="ca">Canada</option>
	<option value="fr">France</option>
</Select>

<Checkbox options={checkboxOptions} {legend} />

<SingleCheckbox name="rememberme" id="rememberme" required label="Remember me" />

<Radio options={radiooptions} name={radioname} />

<Fileupload {...fileuploadprops} />

<Toggle {...props} />
