<script lang="ts">
  import { Button, DarkMode, NavBrand, NavHamburger, NavLi, NavUl, Navbar, Toggle, P } from "flowbite-svelte";
  import { ArrowLeftToBracketOutline, CloseOutline } from "flowbite-svelte-icons";
  import MetaTag from "../../../utils/MetaTag.svelte";
  import { PriceCard, PriceCardListItem, ComparisonTable, Faq, Footer } from "flowbite-svelte-admin-dashboard";
  import { faqs, menus, rows, prices, brand } from "./data";

  let yearly: boolean = $state(false);
  let period = $derived(yearly ? "year" : "month");

  const path: string = "/pages/pricing";
  const description: string = "Pricing examaple - Flowbite Svelte Admin Dashboard";
  const title: string = "Flowbite Svelte Admin Dashboard - Pricing";
  const subtitle: string = "Pricing";
</script>

<MetaTag {path} {description} {title} {subtitle} />

<Navbar class="fixed start-0 top-0 z-20 w-full border-b border-gray-200 bg-white px-2 py-1 sm:px-4 dark:border-gray-700 dark:bg-gray-900" color="dark">
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </NavBrand>
  <NavHamburger />
  <NavUl class="ms-8 me-auto">
    <NavLi href="/">Home</NavLi>
    <NavLi href="/">Team</NavLi>
    <NavLi href="/">Pricing</NavLi>
    <NavLi href="/">Contact</NavLi>
  </NavUl>
  <div class="py-4">
    <DarkMode />
    <Button class="gap-2 px-3"><ArrowLeftToBracketOutline />Login/Register</Button>
  </div>
</Navbar>
<main class="mx-auto bg-gray-50 dark:bg-gray-900">
  <div class="container mx-auto px-4 pt-24 md:pt-32 lg:px-0 dark:bg-gray-900">
    <h1 class="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl sm:leading-none sm:tracking-tight dark:text-white">Our pricing plan made simple</h1>
    <p class="mb-6 text-lg font-normal text-gray-500 sm:text-xl dark:text-gray-300">
      All types of businesses need access to development resources, so we give you the option to decide how much you need to use.
    </p>
    <div class="flex items-center">
      <span class="text-base font-medium text-gray-900 dark:text-white">Monthly</span>
      <Toggle class="ms-3 peer-focus:ring-0" bind:checked={yearly} />
      <span class="text-base font-medium text-gray-900 dark:text-gray-300">Yearly</span>
    </div>
    <section class="grid grid-cols-1 space-y-12 pt-9 md:grid-cols-2 md:gap-6 md:space-y-0 md:gap-x-6 lg:grid-cols-3">
      <PriceCard title="Starter" price={prices[0][+yearly]} {period}>
        {#snippet subtitle()}
          Best option for personal use and for your next project.
        {/snippet}
        <PriceCardListItem>Individual configuration</PriceCardListItem>
        <PriceCardListItem>No setup, or hidden fees</PriceCardListItem>
        <PriceCardListItem>
          Team size: <span class="font-semibold">1 developer</span>
        </PriceCardListItem>
        <PriceCardListItem icon>
          <CloseOutline class="mr-2 inline text-red-500 dark:text-red-400" />
          Premium support
        </PriceCardListItem>
        <PriceCardListItem icon>
          <CloseOutline class="mr-2 inline text-red-500 dark:text-red-400" />
          Free updates
        </PriceCardListItem>
      </PriceCard>
      <PriceCard title="Company" price={prices[1][+yearly]} {period}>
        {#snippet subtitle()}
          Relevant for multiple users, extended & premium support.
        {/snippet}
        <PriceCardListItem>Individual configuration</PriceCardListItem>
        <PriceCardListItem>No setup, or hidden fees</PriceCardListItem>
        <PriceCardListItem>
          Team size: <span class="font-semibold">10 developers</span>
        </PriceCardListItem>
        <PriceCardListItem>
          Premium support: <span class="font-semibold">24 months</span>
        </PriceCardListItem>
        <PriceCardListItem>
          Free updates: <span class="font-semibold">24 months</span>
        </PriceCardListItem>
      </PriceCard>
      <PriceCard title="Enterprise" price={prices[2][+yearly]} {period}>
        {#snippet subtitle()}
          Best for large scale uses and extended redistribution rights.
        {/snippet}
        <PriceCardListItem>Individual configuration</PriceCardListItem>
        <PriceCardListItem>No setup, or hidden fees</PriceCardListItem>
        <PriceCardListItem>
          Team size: <span class="font-semibold">100 developers</span>
        </PriceCardListItem>
        <PriceCardListItem>
          Premium support: <span class="font-semibold">36 months</span>
        </PriceCardListItem>
        <PriceCardListItem>
          Free updates: <span class="font-semibold">36 months</span>
        </PriceCardListItem>
      </PriceCard>
    </section>
    <section class="flex flex-col pt-10 md:pt-20">
      <div class="overflow-x-auto rounded-lg">
        <div class="inline-block min-w-full align-middle">
          <div class="overflow-hidden shadow sm:rounded-lg">
            <ComparisonTable {rows} />
          </div>
        </div>
      </div>
    </section>
    <section class="pt-20">
      <Faq {faqs} title="Frequently asked questions" />
    </section>
  </div>
</main>
<Footer {menus} {brand}>
  {#snippet description()}
    <P>Flowbite is a UI library of elements &amp; components based on Tailwind CSS that can get you started building websites faster and more efficiently.</P>
  {/snippet}
</Footer>
