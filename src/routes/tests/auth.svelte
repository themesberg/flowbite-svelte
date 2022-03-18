<script lang="ts">
	import { Register, Login, ForgotPassword, Reset } from '$lib/index';
	const fields = [
		{
			label: 'name',
			fieldtype: 'text',
			required: true,
			placeholder: 'Your name'
		},
		{
			label: 'email',
			fieldtype: 'email',
			required: true,
			placeholder: 'Your email'
		},
		{
			label: 'password',
			fieldtype: 'password',
			required: true,
			placeholder: 'Your password'
		}
	];
	let loginfield = [
		{
			label: 'username',
			fieldtype: 'text',
			required: true,
			placeholder: 'Username'
		},
		{
			label: 'password',
			fieldtype: 'password',
			required: true,
			placeholder: 'Your password'
		}
	];
</script>

<div
	class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"
>
	<Register {fields} />
</div>

<h2>Login example</h2>
<div
	class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"
>
	<Login fields={loginfield} />
</div>

<div
	class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"
>
	<ForgotPassword />
</div>

<div
	class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"
>
	<Reset />
</div>
