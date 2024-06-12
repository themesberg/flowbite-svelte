<script lang="ts">
	import Accounts from '../../utils/settings/Accounts.svelte';
	import Alerts from '../../utils/settings/Alerts.svelte';
	import Emails from '../../utils/settings/Emails.svelte';
	import GeneralInfo from '../../utils/settings/GeneralInfo.svelte';
	import LanguageTime from '../../utils/settings/LanguageTime.svelte';
	import PasswordInfo from '../../utils/settings/PasswordInfo.svelte';
	import ProfilePicture from '../../utils/settings/ProfilePicture.svelte';
	import Sessions from '../../utils/settings/Sessions.svelte';
	import SocialAccounts from '../../utils/settings/SocialAccounts.svelte';
	import { Breadcrumb, BreadcrumbItem, Heading } from 'flowbite-svelte';
	import Footer from '../Footer.svelte';

	import { imagesPath } from '../../utils/variables';
	import Users from '../../data/users.json';
	import MetaTag from '../../utils/MetaTag.svelte';

	const path: string = '/settings';
  const description: string = 'Settings examaple - Flowbite Svelte Admin Dashboard';
  const title: string = 'Flowbite Svelte Admin Dashboard - Settings';
  const subtitle: string = 'Settings';
</script>

<MetaTag {path} {description} {title} {subtitle} />

<main class="p-4">
	<div class="grid grid-cols-1 space-y-2 dark:bg-gray-900 xl:grid-cols-3 xl:gap-3.5">
		<div class="col-span-full xl:mb-0">
			<Breadcrumb class="mb-6">
				<BreadcrumbItem home>Home</BreadcrumbItem>
				<BreadcrumbItem
					class="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white"
					href="/curd/users">Users</BreadcrumbItem
				>
				<BreadcrumbItem>Settings</BreadcrumbItem>
			</Breadcrumb>

			<Heading tag="h1" class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
				User settings
			</Heading>
		</div>
		<div class="col-span-full space-y-4 xl:col-auto">
			<ProfilePicture src={imagesPath(Users[4].avatar, 'users')} />
			<LanguageTime />
			<SocialAccounts />
			<Accounts />
		</div>
		<div class="col-span-2 space-y-4">
			<GeneralInfo />
			<PasswordInfo />
			<Sessions />
		</div>
	</div>
	<div class="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-2 xl:gap-4">
		<Alerts />
		<Emails />
	</div>
</main>
<Footer />