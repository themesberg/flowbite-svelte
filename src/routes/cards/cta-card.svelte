<script>
  import { CtaCard } from "$lib/index";
  let title = "Be The First";
  let headColor = "gray";
  let btns = [
    {
      size: "base",
      name: "Download it",
      type: "purple",
      link: "/about",
      rel: undefined,
      rounded: true,
    },
    {
      size: "base",
      name: "Get in on",
      type: "green-outline",
      link: "/",
      rel: undefined,
    },
  ];
  let btns2 = [
    {
      size: "base",
      name: "Download it",
      type: "green",
      link: "/about",
      rel: undefined,
      rounded: true,
    },
    {
      size: "base",
      name: "Get in on",
      type: "red-outline",
      link: "/",
      rel: undefined,
    },
  ];
</script>

<div class="flex flex-wrap mx-auto p-8">
  <div class="flex-auto m-2">
    <CtaCard {btns} {title} {headColor}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt libero
      dicta ex, suscipit, qui beatae in odio corrupti est quis quibusdam
      explicabo non atque!
    </CtaCard>
  </div>
  <div class="flex-auto m-2">
    <CtaCard btns={btns2} {title} headColor="red">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt libero
      dicta ex, suscipit, qui beatae in odio corrupti est quis quibusdam
      explicabo non atque!
    </CtaCard>
  </div>
</div>
