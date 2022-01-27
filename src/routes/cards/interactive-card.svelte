<script>
  import { InteractiveCard } from "$lib/index";
  let dropdownLinks = [
    {
      href: "#",
      name: "Edit",
    },
    {
      href: "#",
      name: "About",
    },
    {
      href: "#",
      name: "Profile",
    },
  ];
  let img = {
    src: "/images/profile-picture-3.jpeg",
    alt: "Suzan Boil",
  };
  let header = "Lorem ipsum";
  let content = "Proin efficitur purus felis.";
  let link1 = { href: "link1", title: "Action 1" };
  let link2 = { href: "link2", title: "Action 2" };
</script>

<div class="container mx-auto p-8">
  <InteractiveCard {dropdownLinks} {img} {header} {content} {link1} {link2} />
</div>

<div class="container mx-auto p-8">
  <InteractiveCard {dropdownLinks} {img} {header} {content} link1="" {link2} />
</div>

<div class="container mx-auto p-8">
  <InteractiveCard {dropdownLinks} {img} {header} {content} link1="" link2="" />
</div>
