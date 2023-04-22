<script lang="ts">
  import { Section, Register } from '$lib';
  import { ExampleDiv, SectionHeader, SectionBlock, MetaTag } from '../utils';
  import { Button, Checkbox, Label, Input } from '$lib';
  const breadcrumb_title = 'Login Forms';
  const title = 'Login';
  const dir = 'marketing';
  const description =
    'The login page can be used to allow users to authenticate inside your application based on a collection of templates from Flowbite and coded with Tailwind CSS.';
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader
  category="marketing"
  title="Svelte {breadcrumb_title} - Flowbite"
  {breadcrumb_title}
  {description}
/>

<SectionBlock {title}>
  This example includes a form with an email and password input accompanied by the logo and other
  helper texts and links to other authentication pages.
</SectionBlock>

<ExampleDiv>
  <Section name="login">
    <Register href="/">
      <svelte:fragment slot="top">
        <img
          class="w-8 h-8 mr-2"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
          alt="logo"
        />
        Flowbite
      </svelte:fragment>
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <form class="flex flex-col space-y-6" action="/">
          <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Change Password</h3>
          <Label class="space-y-2">
            <span>Your email</span>
            <Input type="email" name="email" placeholder="name@company.com" required />
          </Label>
          <Label class="space-y-2">
            <span>Your password</span>
            <Input type="password" name="password" placeholder="•••••" required />
          </Label>
          <div class="flex items-start">
            <Checkbox>Remember me</Checkbox>
            <a href="/" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
              >Forgot password?</a
            >
          </div>
          <Button type="submit" class="w-full1">Sign in</Button>
          <p class="text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet? <a
              href="/"
              class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a
            >
          </p>
        </form>
      </div>
    </Register>
  </Section>
</ExampleDiv>
