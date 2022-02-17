<script>
  import { InteractiveCard } from "$lib/index";

  let dropdownLinks = [
    {
      href: "/#",
      label: "Edit",
    },
    {
      href: "/#",
      label: "About",
    },
    {
      href: "/#",
      label: "Profile",
    },
  ];
  let img = {
    src: "/images/profile-picture-3.jpeg",
    alt: "Suzan Boil",
  };
  let header = "Lorem ipsum";
  let content = "Proin efficitur purus felis.";
  let link1 = { href: "/dummy-pages/profile", title: "Profile" };
  let link2 = { href: "/dummy-pages/about", title: "About" };
</script>

<div class="flex flex-wrap mx-auto p-8">
  <div class="flex-auto p-4">
    <InteractiveCard {dropdownLinks} {img} {header} {content} {link1} {link2} />
  </div>
  <div class="flex-auto p-4">
    <InteractiveCard
      {dropdownLinks}
      {img}
      {header}
      {content}
      {link1}
      {link2}
      buttonColor="purple"
    />
  </div>
  <div class="flex-auto p-4">
    <InteractiveCard
      {dropdownLinks}
      {img}
      {header}
      {content}
      {link1}
      {link2}
      buttonColor="green"
    />
  </div>
  <div class="flex-auto p-4">
    <InteractiveCard
      {dropdownLinks}
      {img}
      {header}
      {content}
      {link1}
      buttonColor="red"
    />
  </div>
</div>
<div class="flex flex-wrap mx-auto p-8">
  <div class="flex-auto p-4">
    <InteractiveCard {dropdownLinks} {img} {header} {content} {link2} />
  </div>
  <div class="flex-auto p-4">
    <InteractiveCard {dropdownLinks} {img} {header} {content} />
  </div>
</div>
