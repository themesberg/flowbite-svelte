<script lang="ts">
  import { browser } from "$app/environment";
  import { ButtonGroup, Button, Input } from "flowbite-svelte";
  import Mail from "../utils/icons/Mail.svelte";
  import data from "./data.json";
</script>

<aside class="mb-8 flex flex-col items-start justify-center gap-4 rounded-lg border p-4 shadow-lg sm:p-8 dark:border-gray-700 dark:bg-gray-800">
  <div class="flex flex-col items-center gap-5">
    <div class="flex flex-col items-start gap-4">
      <h4 class="text-xl leading-none font-bold tracking-tight text-gray-900 sm:text-2xl dark:text-white">Get more updates</h4>
      <p class="max-w-2xl">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
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
        data-options={JSON.stringify(data)}
      >
        <div data-style="clean" class="mb-3 flex items-end">
          <ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
          <div data-element="fields" data-stacked="false" class="seva-fields formkit-fields flex w-full max-w-md items-center">
            <label for="member_email" class="sr-only">Email address</label>
            <div class="formkit-field relative">
              <Mail class="absolute top-1/2 left-4 -translate-y-1/2" />
            </div>
            <ButtonGroup>
              <Input
                size="lg"
                id="member_email"
                class="formkit-input focus:ring-primary-600 focus:border-primary-600 pl-12 text-gray-900 sm:!w-96"
                name="email_address"
                aria-label="Email Address"
                placeholder="Your email address..."
                required
                type="email"
              />
              <Button type="submit" color="primary" size="xl" class="formkit-submit self-stretch" data-element="submit">
                <div class="formkit-spinner">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                Subscribe
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </form>
      <!-- ConvertKit form end -->
      <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
        By subscribing, you agree with ConvertKit's <a rel="nofollow" href="https://convertkit.com/terms" class="text-primary-700 dark:text-primary-600 hover:underline">Terms of Service</a>
        and
        <a rel="nofollow" class="text-primary-700 dark:text-primary-600 hover:underline" href="https://convertkit.com/privacy">Privacy Policy</a>
        .
      </div>
    </div>
  </div>
</aside>
