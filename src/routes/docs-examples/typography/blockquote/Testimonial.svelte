<script lang="ts">
  import { Blockquote } from "flowbite-svelte";
  import { QuoteSolid } from "flowbite-svelte-icons";
</script>

<figure class="mx-auto max-w-(--breakpoint-md) text-center">
  <QuoteSolid class="mx-auto mb-3 h-12 w-12 text-heading" />
  <Blockquote alignment="center" size="2xl">
    "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."
  </Blockquote>
  <figcaption class="mt-6 flex items-center justify-center space-x-3 rtl:space-x-reverse">
    <img class="h-6 w-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="Micheal Gough profile" />
    <div class="flex items-center divide-x rtl:divide-x-reverse divide-default">
      <cite class="pe-3 font-medium text-heading">Micheal Gough</cite>
      <cite class="ps-3 text-sm text-body">CEO at Google</cite>
    </div>
  </figcaption>
</figure>
