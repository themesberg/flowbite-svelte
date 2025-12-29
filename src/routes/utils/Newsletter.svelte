<script lang="ts">
  // import { browser } from "$app/environment";
  import { ButtonGroup, Button, Input } from "$lib";
  import Mail from "../utils/icons/Mail.svelte";
  // import data from "./data.json";
  // import { onMount } from "svelte";

  let email: string = $state("");
  let isSubmitting: boolean = $state(false);
  let errorMessage: string = $state("");
  let successMessage: string = $state("");

  function preventDefault<E extends Event>(fn: (event: E) => void) {
    return function (this: any, event: E) {
      event.preventDefault();
      fn.call(this, event);
    };
  }
  // Handle form submission
  async function handleSubmit() {
    if (!email) return;

    isSubmitting = true;
    errorMessage = "";
    successMessage = "";

    try {
      // Option 1: Use your own server endpoint to proxy the request
      // const response = await fetch('/api/newsletter-signup', {
      //  method: 'POST',
      //  headers: { 'Content-Type': 'application/json' },
      //  body: JSON.stringify({ email })
      // });

      // Option 2: Direct client-side submission with no-cors mode
      const formData = new FormData();
      formData.append("email_address", email);
      formData.append("fields[source]", window.location.href);

      await fetch("https://app.convertkit.com/forms/4692392/subscriptions", {
        method: "POST",
        mode: "no-cors", // This is key to avoiding CORS errors
        body: formData
      });

      // Since we're using no-cors, we can't read the response
      // So we'll just assume success if no error is thrown
      successMessage = "Thanks for subscribing!";
      email = "";
    } catch (error) {
      console.error("Subscription error:", error);
      errorMessage = "Something went wrong. Please try again.";
    } finally {
      isSubmitting = false;
    }
  }
</script>

<aside class="rounded-base mb-8 flex flex-col items-start justify-center gap-4 border bg-white p-4 shadow-lg sm:p-8 dark:border-gray-700 dark:bg-gray-800">
  <div class="flex flex-col items-center gap-5">
    <div class="flex flex-col items-start gap-4">
      <h4 class="text-xl leading-none font-bold tracking-tight text-gray-900 sm:text-2xl dark:text-white">Get more updates</h4>
      <p class="max-w-2xl">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
    </div>
    <div class="flex flex-col items-start justify-center self-stretch">
      <!-- Custom Form (not using ConvertKit's direct form) -->
      <form onsubmit={preventDefault(handleSubmit)} class="self-stretch">
        <div class="mb-3 flex items-end">
          {#if errorMessage}
            <p class="mb-2 text-red-600">{errorMessage}</p>
          {/if}
          {#if successMessage}
            <p class="mb-2 text-green-600">{successMessage}</p>
          {/if}
          <div class="flex w-full max-w-md items-center">
            <label for="member_email" class="sr-only">Email address</label>
            <div class="relative">
              <Mail class="absolute start-4 top-1/2 -translate-y-1/2" />
            </div>
            <ButtonGroup>
              <Input
                size="lg"
                id="member_email"
                class="focus:ring-primary-600 focus:border-primary-600 ps-12 text-gray-900 sm:w-96!"
                bind:value={email}
                aria-label="Email Address"
                placeholder="Your email address..."
                required
                type="email"
              />
              <Button type="submit" color="primary" size="xl" class="self-stretch" disabled={isSubmitting}>
                {#if isSubmitting}
                  <div class="flex items-center">
                    <span class="mr-2">Subscribing...</span>
                    <div class="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                  </div>
                {:else}
                  Subscribe
                {/if}
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </form>
      <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
        By subscribing, you agree with ConvertKit's <a rel="nofollow" href="https://convertkit.com/terms" class="text-primary-700 dark:text-primary-600 hover:underline">Terms of Service</a>
        and
        <a rel="nofollow" class="text-primary-700 dark:text-primary-600 hover:underline" href="https://convertkit.com/privacy">Privacy Policy</a>
        .
      </div>
    </div>
  </div>
</aside>
