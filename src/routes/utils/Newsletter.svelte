<script>
  import { browser } from '$app/environment';
  import ButtonGroup from '$lib/buttongroups/ButtonGroup.svelte';
  import Button from '$lib/buttons/Button.svelte';
  import Input from '$lib/forms/Input.svelte';
  import Mail from '../utils/icons/Mail.svelte';
  import data from './data.json';
</script>

<aside
  class="flex flex-col justify-center items-start p-4 sm:p-8 mb-8 gap-4 border shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700">
  <div class="flex flex-col items-center gap-5">
    <div class="flex flex-col items-start gap-4">
      <h4 class="tracking-tight leading-none text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
        Get more updates
      </h4>
      <p class="max-w-2xl">
        Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up
        with your email.
      </p>
    </div>
    <div class="flex flex-col items-start justify-center self-stretch">
      <!-- ConvertKit form -->
      {#if browser}
        <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
      {/if}
      <form
        action="https://app.convertkit.com/forms/4692392/subscriptions"
        class="seva-form formkit-form self-stretch"
        method="post"
        data-sv-form="4692392"
        data-uid="344e3b5c48"
        data-format="inline"
        data-version="5"
        data-options={JSON.stringify(data)}>
        <div data-style="clean" class="flex items-end mb-3">
          <ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert" />
          <div
            data-element="fields"
            data-stacked="false"
            class="flex items-center w-full max-w-md seva-fields formkit-fields">
            <label for="member_email" class="sr-only">Email address</label>
            <div class="relative formkit-field">
              <Mail class="absolute top-1/2 -translate-y-1/2 left-4" />
            </div>
            <ButtonGroup>
              <Input
                size="lg"
                id="member_email"
                class="formkit-input text-gray-900 pl-12 sm:!w-96 focus:ring-primary-600 focus:border-primary-600"
                name="email_address"
                aria-label="Email Address"
                placeholder="Your email address..."
                required
                type="email" />
              <Button
                type="submit"
                color="primary"
                size="xl"
                class="self-stretch formkit-submit"
                data-element="submit">
                <div class="formkit-spinner">
                  <div />
                  <div />
                  <div />
                </div>
                Subscribe
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </form>
      <!-- ConvertKit form end -->
      <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
        By subscribing, you agree with ConvertKit's <a
          rel="nofollow"
          href="https://convertkit.com/terms"
          class="text-primary-700 hover:underline dark:text-primary-600">Terms of Service</a>
        and
        <a
          rel="nofollow"
          class="text-primary-700 hover:underline dark:text-primary-600"
          href="https://convertkit.com/privacy">Privacy Policy</a
        >.
      </div>
    </div>
  </div>
</aside>
