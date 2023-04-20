<script>
  import ButtonGroup from '$lib/buttongroups/ButtonGroup.svelte';
  import Button from '$lib/buttons/Button.svelte';
  import Input from '$lib/forms/Input.svelte';
  import Mail from '../utils/icons/Mail.svelte';
</script>

<div
  class="flex flex-col justify-center items-start p-4 sm:p-8 mb-8 gap-4 border shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700">
  <div class="flex flex-col items-center gap-5">
    <div class="flex flex-col items-start gap-4">
      <h4 class="tracking-tight leading-none text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
        Get more updates
      </h4>
      <p class="text-base md:text-xl font-normal max-w-2xl">
        Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up
        with your email.
      </p>
    </div>
    <div class="flex flex-col justify-center items-start gap-2 self-stretch">
      <div class="flex flex-col sm:flex-row items-start gap-4 relative sm:hidden w-full">
        <Input size="lg" placeholder="Enter your email" class="text-gray-900 pl-12 ">
          <Mail slot="left" />
        </Input>
        <Button color="primary" size="xl" class="self-stretch">Subscribe</Button>
      </div>
      <div class="flex-col sm:flex-row items-start gap-4 relative hidden sm:flex">
        <Mail class="absolute top-1/2 -translate-y-1/2 left-4" />
        <ButtonGroup>
          <Input size="lg" placeholder="Enter your email" class="text-gray-900 pl-12 !w-96" />
          <Button color="primary" size="xl" class="self-stretch">Subscribe</Button>
        </ButtonGroup>
      </div>
      <p class="text-sm font-medium">
        We care about the protection of your data. Read our <a
          href="/"
          class="underline text-gray-900 dark:text-white">Privacy Policy</a
        >.
      </p>
    </div>
  </div>
</div>
