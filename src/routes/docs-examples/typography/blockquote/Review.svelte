<script lang="ts">
  import { Blockquote, Rating } from "flowbite-svelte";
</script>

<figure class="max-w-(--breakpoint-md)">
  <div class="mb-4 flex items-center text-fg-yellow">
    <Rating total={5} rating={4.66} size={24} />
  </div>
  <Blockquote italic={false} size="2xl">
    "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."
  </Blockquote>
  <figcaption class="mt-6 flex items-center space-x-3 rtl:space-x-reverse">
    <img class="h-6 w-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green profile" />
    <div class="flex items-center divide-x rtl:divide-x-reverse divide-default">
      <cite class="pe-3 font-medium text-heading">Bonnie Green</cite>
      <cite class="ps-3 text-sm text-body">CTO at Flowbite</cite>
    </div>
  </figcaption>
</figure>
