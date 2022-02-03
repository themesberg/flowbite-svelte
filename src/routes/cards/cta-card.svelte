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
      rel: "external",
    },
    {
      size: "base",
      name: "Get in on",
      type: "green-outline",
      link: "/#",
      rel: "external",
    },
  ];
</script>

<div class="container mx-auto p-8">
  <CtaCard {btns} {title} {headColor}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt libero dicta
    ex, suscipit, qui beatae in odio corrupti est quis quibusdam explicabo non
    atque!
  </CtaCard>
</div>
