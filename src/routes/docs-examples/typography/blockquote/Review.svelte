<script lang="ts">
  import { Blockquote, Rating } from "flowbite-svelte";
</script>

<figure class="max-w-(--breakpoint-md)">
  <div class="text-fg-yellow mb-4 flex items-center">
    <Rating total={5} rating={4.66} size={24} />
  </div>
  <Blockquote italic={false} size="2xl">
    "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."
  </Blockquote>
  <figcaption class="mt-6 flex items-center space-x-3 rtl:space-x-reverse">
    <img class="h-6 w-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green profile" />
    <div class="divide-default flex items-center divide-x rtl:divide-x-reverse">
      <cite class="text-heading pe-3 font-medium">Bonnie Green</cite>
      <cite class="text-body ps-3 text-sm">CTO at Flowbite</cite>
    </div>
  </figcaption>
</figure>
