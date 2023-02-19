<script>
  import { Label, Checkbox, Button } from "flowbite-svelte";
  export let title = "Create a Free Account";
  export let site = {
    name: "Flowbite",
    img: "https://flowbite-admin-dashboard.vercel.app/images/logo.svg",
    link: "https://flowbite-admin-dashboard.vercel.app/",
    imgAlt: "FlowBite Logo",
  };
  export let acceptTerms = true;
  export let haveAccount = true;
  export let btnTitle = "Create account";
  export let termsLink = "/";
  export let loginLink = "/";
  export let mainClass = "bg-gray-50 dark:bg-gray-900";
  export let mainDivClass =
    "flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900";
  export let siteLinkClass =
    "flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white";
  export let siteImgClass = "mr-4 h-11";
  export let cardDivClass =
    "w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800";
  export let cardH1Class = "text-2xl font-bold text-gray-900 dark:text-white";
  export let haveAccountDivClass =
    "text-sm font-medium text-gray-500 dark:text-gray-400";
  export let haveAccountLinkClass =
    "text-primary-700 hover:underline dark:text-primary-500";
  export let termsLinkClass =
    "text-primary-700 hover:underline dark:text-primary-500";
</script>

<main class={mainClass}>
  <div class={mainDivClass}>
    <a href={site.link} class={siteLinkClass}>
      <img src={site.img} class={siteImgClass} alt={site.imgAlt} />
      <span>{site.name}</span>
    </a>
    <!-- Card -->
    <div class={cardDivClass}>
      <h1 class={cardH1Class}>
        {title}
      </h1>
      <form class="mt-8 space-y-6" on:submit|preventDefault>
        <slot />
        {#if acceptTerms}
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <Checkbox
                id="accept"
                aria-describedby="accept"
                name="accept"
                value={1}
              />
            </div>
            <div class="ml-3 text-sm">
              <Label for="accept"
                >I accept the <a href={termsLink} class={termsLinkClass}
                  >Terms and Conditions</a
                ></Label
              >
            </div>
          </div>
        {/if}
        <Button type="submit">{btnTitle}</Button>
        {#if haveAccount}
          <div class={haveAccountDivClass}>
            Already have an account? <a
              href={loginLink}
              class={haveAccountLinkClass}>Login here</a
            >
          </div>
        {/if}
      </form>
    </div>
  </div>
</main>
