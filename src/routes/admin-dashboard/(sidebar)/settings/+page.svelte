<script lang="ts">
  import { DesktopPcOutline, MobilePhoneOutline } from 'flowbite-svelte-icons';
  // import Accounts from '../../utils/settings/Accounts.svelte';
  import PasswordInfo from '../../utils/settings/PasswordInfo.svelte';
  // import UserProfile from '../../utils/settings/UserProfile.svelte';
  // import Sessions from '../../utils/settings/Sessions.svelte';
  import SocialAccounts from '../../utils/settings/SocialAccounts.svelte';
  import { Breadcrumb, BreadcrumbItem, Heading, Button } from 'flowbite-svelte';
  import { NotificationCard, GeneralInfo, LanguageTime, Sessions, UserProfile, Accounts } from 'flowbite-svelte-admin-dashboard';
  import type { InputField, SessionProps } from 'flowbite-svelte-admin-dashboard';
  import Footer from '../Footer.svelte';

  import { imagesPath } from '../../utils/variables';
  import Users from '../../data/users.json';
  import MetaTag from '../../utils/MetaTag.svelte';

  const items = [
    {
      title: 'Rating reminders',
      subtitle: 'Send an email reminding me to rate an item a week after purchase',
      active: true
    },
    {
      title: 'Item update notifications',
      subtitle: 'Send user and product notifications for you',
      active: false
    },
    {
      title: 'Item comment notifications',
      subtitle: 'Send me an email when someone comments on one of my items',
      active: true
    },
    {
      title: 'Buyer review notifications',
      subtitle: 'Send me an email when someone leaves a review with their rating',
      active: false
    }
  ];

  const alertItems = [
    {
      title: 'Company News',
      subtitle: 'Get Themesberg news, announcements, and product updates',
      active: false
    },
    {
      title: 'Account Activity',
      subtitle: "Get important notifications about you or activity you've missed",
      active: true
    },
    {
      title: 'Meetups Near You',
      subtitle: 'Get an email when a Dribbble Meetup is posted close to my location',
      active: true
    },
    {
      title: 'New Messages',
      subtitle: 'Get Themsberg news, announcements, and product updates',
      active: false
    }
  ];

  const inputs: InputField[] = [
    { label: 'First Name', type: 'text', placeholder: 'Bonnie' },
    { label: 'Last Name', type: 'text', placeholder: 'Green' },
    { label: 'Country', type: 'text', placeholder: 'United States' },
    { label: 'City', type: 'text', placeholder: 'e.g. San Francisco' },
    { label: 'Address', type: 'text', placeholder: 'e.g. California' },
    { label: 'Email', type: 'text', placeholder: 'example@company.com' },
    { label: 'Phone Number', type: 'text', placeholder: 'e.g. +(12)3456 789' },
    { label: 'Birthday', type: 'text', placeholder: '15/08/1980' },
    { label: 'Organization', type: 'text', placeholder: 'Company Name' },
    { label: 'Role', type: 'text', placeholder: 'Svelte Developer' },
    { label: 'Department', type: 'text', placeholder: 'Development' },
    { label: 'Zip/postal code', type: 'text', placeholder: '123456' }
  ];

  const languages = [
    { name: 'English (US)', value: 'en' },
    { name: 'Italiano', value: 'it' },
    { name: 'Français (France)', value: 'fr' },
    { name: '正體字', value: 'ch' },
    { name: 'Español (España)', value: 'es' },
    { name: 'Deutsch', value: 'de' },
    { name: 'Português (Brasil)', value: 'pt' }
  ];

  const timezones = [
    { name: 'GMT+0 Greenwich Mean Time (GMT)', value: '0' },
    { name: 'GMT+1 Central European Time (CET)', value: '1' },
    { name: 'GMT+2 Eastern European Time (EET)', value: '2' },
    { name: 'GMT+3 Moscow Time (MSK)', value: '3' },
    { name: 'GMT+5 Pakistan Standard Time (PKT)', value: '4' },
    { name: 'GMT+8 China Standard Time (CST)', value: '5' },
    { name: 'GMT+10 Eastern Australia Standard Time (AEST)', value: '6' }
  ];
  const path: string = '/settings';
  const description: string = 'Settings examaple - Flowbite Svelte Admin Dashboard';
  const title: string = 'Flowbite Svelte Admin Dashboard - Settings';
  const subtitle: string = 'Settings';
  // seeMorehref,sessions
  const sessionOptions: SessionProps = {
    seeMorehref: '/',
    sessions: [
      {
        ipaddress: 'California 123.123.123.123',
        device: 'Chrome on macOS',
        href: '/',
        btnName: 'Revoke',
        IconOption: {
          icon: DesktopPcOutline
        }
      },
      {
        ipaddress: 'Rome 24.456.355.98',
        device: 'Safari on iPhone',
        href: '/',
        btnName: 'Revoke',
        IconOption: {
          icon: MobilePhoneOutline
        }
      }
    ]
  };
</script>

<MetaTag {path} {description} {title} {subtitle} />

<main class="p-4">
  <div class="grid grid-cols-1 space-y-2 xl:grid-cols-3 xl:gap-3.5 dark:bg-gray-900">
    <div class="col-span-full xl:mb-0">
      <Breadcrumb class="mb-6">
        <BreadcrumbItem home>Home</BreadcrumbItem>
        <BreadcrumbItem class="hover:text-primary-600 inline-flex items-center text-gray-700 dark:text-gray-300 dark:hover:text-white" href="/crud/users">Users</BreadcrumbItem>
        <BreadcrumbItem>Settings</BreadcrumbItem>
      </Breadcrumb>

      <Heading tag="h1" class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">User settings</Heading>
    </div>
    <div class="col-span-full space-y-4 xl:col-auto">
      <UserProfile src={imagesPath(Users[4].avatar, 'users')} />
      <LanguageTime {languages} {timezones} />
      <SocialAccounts />
      <Accounts users={Users.slice(0, 4)}>
        <Button class="mt-2 w-fit">Save all</Button>
      </Accounts>
    </div>
    <div class="col-span-2 space-y-4">
      <GeneralInfo {inputs} />
      <PasswordInfo />
      <Sessions {...sessionOptions} />
    </div>
  </div>
  <div class="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-2 xl:gap-4">
    <NotificationCard items={alertItems} />
    <NotificationCard {items} />
  </div>
</main>
<Footer />
